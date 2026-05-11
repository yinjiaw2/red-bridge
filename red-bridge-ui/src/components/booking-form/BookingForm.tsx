"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { BookingStepOne } from "./BookingStepOne";
import { BookingStepTwo } from "./BookingStepTwo";
import { BookingStepThree } from "./BookingStepThree";
import {
  createBookingStepOneSchema,
  createBookingStepTwoSchema,
  createBookingStepThreeSchema,
} from "./schema";
import {
  bookingStepOneDefaultValues,
  bookingStepTwoDefaultValues,
  bookingStepThreeDefaultValues,
} from "./types";

const TOTAL_STEPS = 4;

export function BookingForm() {
  const formT = useTranslations("bookingForm.form");
  const [step, setStep] = useState(0);

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

  const handleStepOneNext = formOne.handleSubmit(() => setStep(1));
  const handleStepTwoNext = formTwo.handleSubmit(() => setStep(2));
  const handleStepThreeNext = formThree.handleSubmit(() => setStep(3));

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
        </div>
      </div>
    </section>
  );
}
