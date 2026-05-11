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
