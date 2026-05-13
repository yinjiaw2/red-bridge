export type BookingStepOneValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  preferredContact: string;
  preferredLanguage: string;
  source: string;
  contactHandle?: string;
};

export const bookingStepOneDefaultValues: BookingStepOneValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  preferredContact: "",
  preferredLanguage: "",
  source: "",
  contactHandle: "",
};

export type BookingStepFourValues = {
  notes: string;
  agreedToContact: boolean;
};

export const bookingStepFourDefaultValues: BookingStepFourValues = {
  notes: "",
  agreedToContact: false,
};

export type BookingStepThreeValues = {
  occupation: string;
  educationLevel: string;
  graduationYear: string;
  workExperience: string;
  englishTest: string;
};

export const bookingStepThreeDefaultValues: BookingStepThreeValues = {
  occupation: "",
  educationLevel: "",
  graduationYear: "",
  workExperience: "",
  englishTest: "",
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
