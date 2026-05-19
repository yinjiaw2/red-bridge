"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepThreeValues } from "./types";
import { TextField } from "./form-field/TextField";
import { SelectField } from "./form-field/SelectField";

type BookingStepThreeProps = {
  form: UseFormReturn<BookingStepThreeValues>;
};

export function BookingStepThree({ form }: BookingStepThreeProps) {
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const educationLevels = dataT.raw("educationLevels") as string[];
  const workExperienceOptions = dataT.raw("workExperienceOptions") as string[];
  const englishTests = dataT.raw("englishTests") as string[];

  return (
    <div className="flex flex-col gap-5">
      <TextField
        form={form}
        name="occupation"
        label={formT("fields.occupation")}
      />

      <SelectField
        form={form}
        name="educationLevel"
        label={formT("fields.educationLevel")}
        placeholder={formT("placeholders.select")}
        options={educationLevels}
      />

      <div className="flex flex-row gap-6">
        <TextField
          form={form}
          name="graduationYear"
          label={formT("fields.graduationYear")}
          type="number"
          min={1000}
          max={new Date().getFullYear()}
        />
        <SelectField
          form={form}
          name="workExperience"
          label={formT("fields.workExperience")}
          placeholder={formT("placeholders.select")}
          options={workExperienceOptions}
        />
      </div>

      <SelectField
        form={form}
        name="englishTest"
        label={formT("fields.englishTest")}
        placeholder={formT("placeholders.select")}
        options={englishTests}
      />
    </div>
  );
}
