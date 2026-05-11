import { z } from "zod";

export function createBookingStepFourSchema(messages: { mustAgree: string }) {
  return z.object({
    notes: z.string().trim(),
    agreedToContact: z
      .boolean()
      .refine((val) => val === true, { message: messages.mustAgree }),
  });
}

export function createBookingStepThreeSchema(messages: { required: string }) {
  return z.object({
    occupation: z.string().trim().min(1, messages.required),
    educationLevel: z.string().trim().min(1, messages.required),
    graduationYear: z.string().trim().min(1, messages.required),
    workExperience: z.string().trim().min(1, messages.required),
    englishTest: z.string().trim().min(1, messages.required),
  });
}

export function createBookingStepTwoSchema(messages: { required: string }) {
  return z.object({
    pathway: z.string().trim().min(1, messages.required),
    nationality: z.string().trim().min(1, messages.required),
    countryOfResidency: z.string().trim().min(1, messages.required),
    dateOfBirth: z.date({ error: messages.required }),
    currentVisa: z.string(),
    visaExpiry: z.date().optional(),
  });
}

export function createBookingStepOneSchema(messages: {
  required: string;
  invalidEmail: string;
}) {
  return z.object({
    firstName: z.string().trim().min(1, messages.required),
    lastName: z.string().trim().min(1, messages.required),
    email: z
      .string()
      .trim()
      .min(1, messages.required)
      .email({ message: messages.invalidEmail }),
    mobile: z.string().trim().min(1, messages.required),
    preferredContact: z.string().trim().min(1, messages.required),
    preferredLanguage: z.string().trim().min(1, messages.required),
    source: z.string().trim().min(1, messages.required),
  });
}
