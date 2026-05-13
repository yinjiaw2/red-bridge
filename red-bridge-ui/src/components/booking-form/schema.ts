import { z } from "zod";

export function createBookingStepFourSchema(messages: { mustAgree: string }) {
  return z.object({
    notes: z.string().trim(),
    agreedToContact: z
      .boolean()
      .refine((val) => val === true, { message: messages.mustAgree }),
  });
}

export function createBookingStepThreeSchema(messages: { required: string; invalidYear: string }) {
  return z.object({
    occupation: z.string().trim().min(1, messages.required),
    educationLevel: z.string().trim().min(1, messages.required),
    graduationYear: z
      .string()
      .trim()
      .min(1, messages.required)
      .regex(/^[1-9]\d{3}$/, messages.invalidYear)
      .refine((val) => parseInt(val) <= new Date().getFullYear(), { message: messages.invalidYear }),
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

const CONTACT_HANDLE_METHODS = ["WeChat", "WhatsApp", "微信"];

export function createBookingStepOneSchema(messages: {
  required: string;
  invalidEmail: string;
}) {
  return z
    .object({
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
      contactHandle: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (
        CONTACT_HANDLE_METHODS.includes(data.preferredContact) &&
        !data.contactHandle?.trim()
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: messages.required,
          path: ["contactHandle"],
        });
      }
    });
}
