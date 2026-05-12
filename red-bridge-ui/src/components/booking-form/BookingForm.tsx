"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { BookingStepOne } from "./BookingStepOne";
import { BookingStepTwo } from "./BookingStepTwo";
import { BookingStepThree } from "./BookingStepThree";
import { BookingStepFour } from "./BookingStepFour";
import {
  createBookingStepOneSchema,
  createBookingStepTwoSchema,
  createBookingStepThreeSchema,
  createBookingStepFourSchema,
} from "./schema";
import {
  bookingStepOneDefaultValues,
  bookingStepTwoDefaultValues,
  bookingStepThreeDefaultValues,
  bookingStepFourDefaultValues,
} from "./types";

type BookingFormProps = {
  consultationSlot?: string;
};

const TOTAL_STEPS = 4;

export function BookingForm({ consultationSlot }: BookingFormProps = {}) {
  const formT = useTranslations("bookingForm.form");
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState(false);

  const stepTitles = formT.raw("steps") as string[];

  const stepOneSchema = createBookingStepOneSchema({
    required: formT("validation.required"),
    invalidEmail: formT("validation.invalidEmail"),
  });

  const stepTwoSchema = createBookingStepTwoSchema({
    required: formT("validation.required"),
  });

  const stepThreeSchema = createBookingStepThreeSchema({
    required: formT("validation.required"),
  });

  const stepFourSchema = createBookingStepFourSchema({
    mustAgree: formT("validation.mustAgree"),
  });

  const formOne = useForm<z.infer<typeof stepOneSchema>>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: bookingStepOneDefaultValues,
    mode: "onTouched",
  });

  const formTwo = useForm<z.infer<typeof stepTwoSchema>>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: bookingStepTwoDefaultValues,
    mode: "onTouched",
  });

  const formThree = useForm<z.infer<typeof stepThreeSchema>>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: bookingStepThreeDefaultValues,
    mode: "onTouched",
  });

  const formFour = useForm<z.infer<typeof stepFourSchema>>({
    resolver: zodResolver(stepFourSchema),
    defaultValues: bookingStepFourDefaultValues,
    mode: "onTouched",
  });

  const handleStepOneNext = formOne.handleSubmit(() => setStep(1));
  const handleStepTwoNext = formTwo.handleSubmit(() => setStep(2));
  const handleStepThreeNext = formThree.handleSubmit(() => setStep(3));
  const handleSubmit = formFour.handleSubmit(async (stepFourData) => {
    setSubmitError(false);

    const sheetUrl = process.env.NEXT_PUBLIC_BOOKING_SHEET_URL;
    if (!sheetUrl) {
      setSubmitError(true);
      return;
    }

    const s1 = formOne.getValues();
    const s2 = formTwo.getValues();
    const s3 = formThree.getValues();

    try {
      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          type: "contact",
          ...s1,
          pathway: s2.pathway,
          nationality: s2.nationality,
          countryResidency: s2.countryOfResidency,
          dateOfBirth: s2.dateOfBirth
            ? format(s2.dateOfBirth, "dd/MM/yyyy")
            : "",
          currentVisa: s2.currentVisa,
          visaExpiry: s2.visaExpiry ? format(s2.visaExpiry, "dd/MM/yyyy") : "",
          ...s3,
          notes: stepFourData.notes,
        }),
      });
      const params = new URLSearchParams({
        name: formOne.getValues("firstName"),
        email: formOne.getValues("email"),
        pathway: formTwo.getValues("pathway"),
      });
      router.push(`/contact/success?${params.toString()}`);
    } catch {
      setSubmitError(true);
    }
  });

  return (
    <section className="w-full py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col rounded-lg border border-border bg-card px-6 py-8 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-border pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {formT("eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {stepTitles[step] ?? ""}
            </h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {formT("stepOf", { current: step + 1, total: TOTAL_STEPS })}
          </span>
        </div>

        <div className="mt-7">
          {step === 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void handleStepOneNext();
              }}
              noValidate
              className="space-y-8"
            >
              <BookingStepOne form={formOne} />
              <div className="flex justify-end">
                <Button type="submit" size="lg" className="px-8">
                  {formT("buttons.next")}
                </Button>
              </div>
            </form>
          )}

          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void handleStepTwoNext();
              }}
              noValidate
              className="space-y-8"
            >
              <BookingStepTwo form={formTwo} />
              <div className="flex justify-between">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => setStep(0)}
                >
                  {formT("buttons.back")}
                </Button>
                <Button type="submit" size="lg" className="px-8">
                  {formT("buttons.next")}
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void handleStepThreeNext();
              }}
              noValidate
              className="space-y-8"
            >
              <BookingStepThree form={formThree} />
              <div className="flex justify-between">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => setStep(1)}
                >
                  {formT("buttons.back")}
                </Button>
                <Button type="submit" size="lg" className="px-8">
                  {formT("buttons.next")}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void handleSubmit();
              }}
              noValidate
              className="space-y-8"
            >
              <BookingStepFour
                form={formFour}
                consultationSlot={consultationSlot}
                stepOneValues={formOne.getValues()}
                stepTwoValues={formTwo.getValues()}
                stepThreeValues={formThree.getValues()}
              />
              {submitError && (
                <p className="text-center text-sm text-destructive">
                  {formT("validation.submitError")}
                </p>
              )}
              <div className="flex justify-between">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => setStep(2)}
                >
                  {formT("buttons.back")}
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="px-8"
                  disabled={formFour.formState.isSubmitting}
                >
                  {formFour.formState.isSubmitting
                    ? formT("buttons.submitting")
                    : formT("buttons.submit")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
