import { z } from "zod";

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
      .email(messages.invalidEmail),
    mobile: z.string().trim().min(1, messages.required),
    preferredContact: z.string().trim().min(1, messages.required),
    preferredLanguage: z.string().trim().min(1, messages.required),
    source: z.string().trim().min(1, messages.required),
  });
}
