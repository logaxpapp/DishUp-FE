const baseUrl = "https://staging.logadash.com/api/v1";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${baseUrl}/re/auth/token`,
    REGISTER: `${baseUrl}/re/auth/create`,
    VERIFY_OTP: `${baseUrl}/re/auth/verify-otp`,
    RESEND_OTP: `${baseUrl}/re/auth/resend-otp`,
    FORGOT_PASSWORD: `${baseUrl}/re/auth/forgot-password`,
    RESET_PASSWORD: `${baseUrl}/re/auth/reset-password`,
  },
};
