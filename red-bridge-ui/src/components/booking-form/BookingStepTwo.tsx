"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepTwoValues } from "./types";
import { SelectField } from "./SelectField";
import { DateField } from "./DateField";

type BookingStepTwoProps = {
  form: UseFormReturn<BookingStepTwoValues>;
};

export function BookingStepTwo({ form }: BookingStepTwoProps) {
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const pathways = dataT.raw("pathways") as string[];
  const countries = dataT.raw("countries") as string[];
  const visaTypes = dataT.raw("visaTypes") as string[];

  const today = new Date();
  const twentyYearsFromNow = new Date(
    today.getFullYear() + 20,
    today.getMonth(),
    today.getDate(),
  );

  return (
    <div className="flex flex-col gap-5">
      <SelectField
        form={form}
        name="pathway"
        label={formT("fields.pathway")}
        placeholder={formT("placeholders.select")}
        options={pathways}
      />

      <div className="flex flex-row gap-6">
        <SelectField
          form={form}
          name="nationality"
          label={formT("fields.nationality")}
          placeholder={formT("placeholders.select")}
          options={countries}
        />
        <SelectField
          form={form}
          name="countryOfResidency"
          label={formT("fields.countryOfResidency")}
          placeholder={formT("placeholders.select")}
          options={countries}
        />
      </div>

      <DateField
        form={form}
        name="dateOfBirth"
        label={formT("fields.dateOfBirth")}
        placeholder={formT("placeholders.pickDate")}
        disabled={{ after: today }}
        fromYear={1920}
        toYear={today.getFullYear()}
      />

      <div className="flex flex-row gap-6">
        <SelectField
          form={form}
          name="currentVisa"
          label={formT("fields.currentVisa")}
          placeholder={formT("placeholders.select")}
          options={visaTypes}
        />
        <DateField
          form={form}
          name="visaExpiry"
          label={formT("fields.visaExpiry")}
          placeholder={formT("placeholders.pickDate")}
          fromYear={2000}
          toYear={twentyYearsFromNow.getFullYear()}
        />
      </div>
    </div>
  );
}
