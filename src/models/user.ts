import { IBaseResponse } from "./base";

export interface ICompleteProfilePayload {
  businessName: string;
  taxId: string;
  countryCode: string;
  stateId: string;
  city: string;
  zipCode: string;
  registrationNumber: string;
  businessLiscence: string;
  bankName: string;
  accountNumber: string;
  holderName: string;
  routingNumber: string;
  swiftCode: string;
}
