"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepOneValues } from "./types";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";

type BookingStepOneProps = {
  form: UseFormReturn<BookingStepOneValues>;
};

export function BookingStepOne({ form }: BookingStepOneProps) {
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const contactMethods = dataT.raw("contactMethods") as string[];
  const languages = dataT.raw("languages") as string[];
  const sources = dataT.raw("sources") as string[];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <TextField
        form={form}
        name="firstName"
        label={formT("fields.firstName")}
      />
      <TextField form={form} name="lastName" label={formT("fields.lastName")} />
      <TextField
        form={form}
        name="email"
        type="email"
        label={formT("fields.email")}
      />
      <TextField
        form={form}
        name="mobile"
        type="tel"
        label={formT("fields.mobile")}
      />
      <SelectField
        form={form}
        name="preferredContact"
        label={formT("fields.preferredContact")}
        placeholder={formT("placeholders.select")}
        options={contactMethods}
      />
      <SelectField
        form={form}
        name="preferredLanguage"
        label={formT("fields.preferredLanguage")}
        placeholder={formT("placeholders.select")}
        options={languages}
      />
      <div className="md:col-span-2">
        <SelectField
          form={form}
          name="source"
          label={formT("fields.source")}
          placeholder={formT("placeholders.select")}
          options={sources}
        />
      </div>
    </div>
  );
}
