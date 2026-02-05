/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  IUserProfile,
} from "@/interfaces/auth";
import { ILoginPayload } from "@/models/auth";
import { login } from "@/services/auth";
import { customToast } from "@/helpers/customToast";

export const _login = createAsyncThunk(
  `adminLogin`,
  async (payload: ILoginPayload, thunkApi) => {
    try {
      const response = await login(payload);
      return response;
    } catch (error: any) {
      customToast.error(error?.response?.data?.message || "error occured");
      return thunkApi.rejectWithValue(error);
    }
  },
);

interface authState {
  token: string | null;
  user: IUserProfile | null;
  isProfileCompleted:boolean;
  role: "RESTAURANT" | "ADMIN" | "USER"|"";
  loading: boolean;
  error: boolean;
  invalidSession: boolean;
}

const initialState: authState = {
  token: null,
  user: null,
  isProfileCompleted:false,
  role:  null,
  loading: false,
  error: false,
  invalidSession: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.loading = false;
      state.error = false;
      state.invalidSession = false;
      localStorage.clear();
    },
    setUser: (
      state,
      {
        payload,
      }: PayloadAction<{
        accessToken: string;
        userInfo: IUserProfile;
        isProfileCompleted:boolean;
        role: "RESTAURANT" | "ADMIN" | "USER" | ""
      }>,
    ) => {
      console.log({ payload });

      state.user = payload?.userInfo || null;
      state.token = payload?.accessToken || "";
     state.isProfileCompleted = payload?.isProfileCompleted;
      state.role = payload?.role || "";

    },
    setRegisterUser: (
      state,
      action: PayloadAction<{ email: string; token: string }>,
    ) => {
      const { email, token } = action.payload;

      state.token = token;
      state.user.profile.email = email;
    },

    partialLogOut: (state) => {
      state.token = null;
    },
    invalidSession: (state) => {
      state.invalidSession = true;
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.clear();
    },
  },
});

export const {
  logOut,
  partialLogOut,
  invalidSession,
  clearToken,
  setUser,
  setRegisterUser,
} = auth.actions;
export default auth.reducer;
