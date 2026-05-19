"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { format } from "date-fns";
import { zhCN, enUS } from "date-fns/locale";
import type {
  BookingStepFourValues,
  BookingStepOneValues,
  BookingStepTwoValues,
  BookingStepThreeValues,
} from "./types";
import { TextareaField } from "./form-field/TextareaField";
import { CheckboxField } from "./form-field/CheckboxField";

type BookingStepFourProps = {
  form: UseFormReturn<BookingStepFourValues>;
  consultationSlot?: string;
  stepOneValues: BookingStepOneValues;
  stepTwoValues: Partial<BookingStepTwoValues>;
  stepThreeValues: BookingStepThreeValues;
};

export function BookingStepFour({
  form,
  consultationSlot,
  stepOneValues,
  stepTwoValues,
  stepThreeValues,
}: BookingStepFourProps) {
  const formT = useTranslations("bookingForm.form");
  const locale = useLocale();
  const calendarLocale = locale === "zh" ? zhCN : enUS;
  const dateFormat = locale === "zh" ? "yyyy年MM月dd日" : "dd/MM/yyyy";

  const formatDate = (date: Date | undefined) =>
    date ? format(date, dateFormat, { locale: calendarLocale }) : "—";

  return (
    <div className="flex flex-col gap-6">
      {consultationSlot && (
        <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            {formT("review.selectedConsultation")}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {consultationSlot}
          </p>
        </div>
      )}

      <TextareaField
        form={form}
        name="notes"
        label={formT("fields.notes")}
        placeholder={formT("placeholders.notes")}
        rows={4}
      />

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {formT("review.summary")}
        </p>

        <ReviewSection title={formT("review.sections.contact")}>
          <ReviewRow
            label={formT("fields.firstName")}
            value={stepOneValues.firstName}
          />
          <ReviewRow
            label={formT("fields.lastName")}
            value={stepOneValues.lastName}
          />
          <ReviewRow
            label={formT("fields.email")}
            value={stepOneValues.email}
          />
          <ReviewRow
            label={formT("fields.mobile")}
            value={stepOneValues.mobile}
          />
          <ReviewRow
            label={formT("fields.preferredContact")}
            value={stepOneValues.preferredContact}
          />
          <ReviewRow
            label={formT("fields.preferredLanguage")}
            value={stepOneValues.preferredLanguage}
          />
        </ReviewSection>

        <ReviewSection title={formT("review.sections.pathway")}>
          <ReviewRow
            label={formT("fields.pathway")}
            value={stepTwoValues.pathway}
          />
          <ReviewRow
            label={formT("fields.nationality")}
            value={stepTwoValues.nationality}
          />
          <ReviewRow
            label={formT("fields.countryOfResidency")}
            value={stepTwoValues.countryOfResidency}
          />
          <ReviewRow
            label={formT("fields.dateOfBirth")}
            value={formatDate(stepTwoValues.dateOfBirth)}
          />
          <ReviewRow
            label={formT("fields.currentVisa")}
            value={stepTwoValues.currentVisa}
          />
          <ReviewRow
            label={formT("fields.visaExpiry")}
            value={formatDate(stepTwoValues.visaExpiry)}
          />
        </ReviewSection>

        <ReviewSection title={formT("review.sections.profile")}>
          <ReviewRow
            label={formT("fields.occupation")}
            value={stepThreeValues.occupation}
          />
          <ReviewRow
            label={formT("fields.educationLevel")}
            value={stepThreeValues.educationLevel}
          />
          <ReviewRow
            label={formT("fields.graduationYear")}
            value={stepThreeValues.graduationYear}
          />
          <ReviewRow
            label={formT("fields.workExperience")}
            value={stepThreeValues.workExperience}
          />
          <ReviewRow
            label={formT("fields.englishTest")}
            value={stepThreeValues.englishTest}
          />
        </ReviewSection>
      </div>

      <CheckboxField
        form={form}
        name="agreedToContact"
        label={formT("review.consentLabel")}
      />
    </div>
  );
}

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">{children}</div>
    </div>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-muted-foreground">
        {label.replace("*", "")}
      </span>
      <span className="text-sm font-medium text-foreground">
        {value || "—"}
      </span>
    </div>
  );
}
