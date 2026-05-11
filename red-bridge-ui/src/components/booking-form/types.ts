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

export type BookingStepThreeValues = {
  occupation: string;
  targetOccupation: string;
  educationLevel: string;
  yearOfGraduation: string;
  australianWorkExperience: string;
  latestEnglishTest: string;
};

export const bookingStepThreeDefaultValues: BookingStepThreeValues = {
  occupation: "",
  targetOccupation: "",
  educationLevel: "",
  yearOfGraduation: "",
  australianWorkExperience: "",
  latestEnglishTest: "",
};

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
