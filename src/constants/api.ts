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
  BANK: {
    ALL_BANK_LISTS: `${baseUrl}/re/base/banks`,
  },
  LOCATION: {
    ALL_COUNTRY_LISTS: `${baseUrl}/re/base/country`,
    ALL_CITY_LISTS: `${baseUrl}/re/base`,
  },
  FILE: {
    UPLOAD_FILE: `${baseUrl}/re/file`,
  },
  USER: {
    COMPLETE_PROFILE: `${baseUrl}/re/user/complete-profile`,
  },
  CATEGORY: {
    GET_CATEGORIES: `${baseUrl}/re/category`,
  },
  MENU: {
    MENU_API: `${baseUrl}/re/menu`,
    MENU_PRICING: `${baseUrl}/re/menu/price`,
  },
  SUPPLIER: {
    SUPPLIER_API: `${baseUrl}/re/supplier`,
  },
  INVENTORY: {
    ANALYTICS: `${baseUrl}/re/inventory/dashboard/counters`,
    INVENTORY_API: `${baseUrl}/re/inventory`,
  },
};
