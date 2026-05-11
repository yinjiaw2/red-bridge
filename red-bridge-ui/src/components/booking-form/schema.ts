import { z } from "zod";

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
