export type BookingStepTwoValues = {
  pathway: string;
  nationality: string;
  countryOfResidency: string;
  dateOfBirth: Date;
  currentVisa: string;
  visaExpiry?: Date;
};

export const bookingStepTwoDefaultValues = {
  pathway: "",
  nationality: "",
  countryOfResidency: "",
  dateOfBirth: undefined,
  currentVisa: "",
  visaExpiry: undefined,
};

export type BookingStepOneValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  preferredContact: string;
  preferredLanguage: string;
  source: string;
};

export const bookingStepOneDefaultValues: BookingStepOneValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  preferredContact: "",
  preferredLanguage: "",
  source: "",
};
