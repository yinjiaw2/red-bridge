"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepThreeValues } from "./types";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";

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
      <div className="flex flex-row gap-6">
        <TextField
          form={form}
          name="occupation"
          label={formT("fields.occupation")}
        />
        <TextField
          form={form}
          name="targetOccupation"
          label={formT("fields.targetOccupation")}
        />
      </div>

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
          name="yearOfGraduation"
          label={formT("fields.yearOfGraduation")}
          type="number"
        />
        <SelectField
          form={form}
          name="australianWorkExperience"
          label={formT("fields.australianWorkExperience")}
          placeholder={formT("placeholders.select")}
          options={workExperienceOptions}
        />
      </div>

      <SelectField
        form={form}
        name="latestEnglishTest"
        label={formT("fields.latestEnglishTest")}
        placeholder={formT("placeholders.select")}
        options={englishTests}
      />
    </div>
  );
}
