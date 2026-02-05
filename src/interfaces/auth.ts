export interface ILoginResponse {
  userProfile: IUserProfile;
}

export interface IRegisterResponse {
  fullName: string;
  email: string;
  userId: string;
}
export interface IAcivateMailResponse {
  token: string;
  userProfile: IUserProfile;
}

export interface IUserProfile {
  id: string;
  username: string;
  active: boolean;
  deleted: boolean;

  profile: {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    bio: string;
    picture: string;
    email: string;
    countryCode: string;
    zipCode: string;
    userId: string;
    stateId: string;
    isProfileComplete: boolean;
    agreeToTermAndCondition: boolean;
    pushNotification: boolean;
    emailNotification: boolean;
    requestNotification: boolean;
    registrationNumber: string;
    businessLiscence: string;
    bankName: string;
    accountNumber: string;
    holderName: string;
    routingNumber: string;
    swiftCode: string;
    createdAt: string;
    updatedAt: string;
    archived: boolean;

    state: {
      id: string;
      name: string;
    };

    country: {
      name: string;
    };
  };

  wallet: {
    id: string;
    totalAmount: string;
    available: string;
    amountPaid: string;
    pendingPayment: string;
    inEscrow: string;
    createdAt: string;
    updatedAt: string;
    updatedBy: string | null;
    deletedAt: string | null;
    deletedBy: string | null;
  };

  businessInformation: {
    id: string;
    name: string | null;
    address: string | null;
    services: any[];
    slogan: string | null;
    userId: string;
    workingDays: any[];
    workingHours: any | null;
    breaks: any[];
    certificate: string | null;
    certified: boolean;
  };

  kyc: any | null;
}
