import { API_ENDPOINTS } from "@/constants/api";
import { ICompleteProfilePayload } from "@/models/user";
import axios from "axios";

export async function completeBusinessProfile(
  payload: ICompleteProfilePayload,
) {
  const response = await axios.patch(
    API_ENDPOINTS.USER.COMPLETE_PROFILE,
    payload,
  );
  return response.data.data;
}
