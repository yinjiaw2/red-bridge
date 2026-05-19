"use client";

import { useEffect, useId } from "react";
import { Controller } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepTwoValues } from "./types";
import { SelectField } from "./form-field/SelectField";
import { DateField } from "./form-field/DateField";

type BookingStepTwoProps = {
  form: UseFormReturn<BookingStepTwoValues>;
};

export function BookingStepTwo({ form }: BookingStepTwoProps) {
  const pathwayId = useId();
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const countries = dataT.raw("countries") as string[];
  const visaTypes = dataT.raw("visaTypes") as string[];
  const lockedPathway =
    ((dataT.raw("pathways") as string[]).find((pathway) =>
      pathway.startsWith("482"),
    ) as string | undefined) ?? "482/186 Employer Sponsored";

  const today = new Date();
  const twentyYearsFromNow = new Date(
    today.getFullYear() + 20,
    today.getMonth(),
    today.getDate(),
  );

  useEffect(() => {
    if (form.getValues("pathway") !== lockedPathway) {
      form.setValue("pathway", lockedPathway, {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: true,
      });
    }
  }, [form, lockedPathway]);

  return (
    <div className="flex flex-col gap-5">
      <Controller
        name="pathway"
        control={form.control}
        render={({ field }) => (
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor={pathwayId}
              className="text-sm font-medium text-foreground"
            >
              {formT("fields.pathway")}
            </label>
            <input
              id={pathwayId}
              value={field.value || lockedPathway}
              readOnly
              aria-readonly="true"
              className="flex h-10 w-full cursor-not-allowed rounded-lg border border-input bg-muted px-3 py-2 text-sm text-muted-foreground outline-none"
            />
          </div>
        )}
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
