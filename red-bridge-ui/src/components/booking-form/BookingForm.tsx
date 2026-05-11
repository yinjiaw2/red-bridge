"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BookingStepOne } from "./BookingStepOne";
import { createBookingStepOneSchema } from "./schema";
import {
  bookingStepOneDefaultValues,
  type BookingStepOneValues,
} from "./types";

const TOTAL_STEPS = 4;
const INITIAL_STEP_INDEX = 0;

type BookingFormProps = {
  onStepOneSubmit?: (values: BookingStepOneValues) => void;
};

export function BookingForm({ onStepOneSubmit }: BookingFormProps) {
  const formT = useTranslations("bookingForm.form");
  const [step, setStep] = useState(INITIAL_STEP_INDEX);
  const [formData, setFormData] = useState<BookingStepOneValues>(
    bookingStepOneDefaultValues,
  );

  const stepTitles = formT.raw("steps") as string[];
  const currentStepTitle = stepTitles[step] ?? "";
  const schema = createBookingStepOneSchema({
    required: formT("validation.required"),
    invalidEmail: formT("validation.invalidEmail"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: bookingStepOneDefaultValues,
    mode: "onTouched",
  });

  const onNext = form.handleSubmit((data) => {
    const nextFormData = { ...formData, ...data };

    setFormData(nextFormData);
    onStepOneSubmit?.(nextFormData);
    setStep((currentStep) => Math.min(currentStep + 1, TOTAL_STEPS - 1));
    form.reset(nextFormData);
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void onNext();
  };

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-3xl flex flex-col rounded-lg border border-border bg-card px-6 py-8 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-border pb-6 ">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {formT("eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {currentStepTitle}
            </h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {formT("stepOf", {
              current: step + 1,
              total: TOTAL_STEPS,
            })}
          </span>
        </div>

        <Form {...form}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-7 space-y-8 w-full"
          >
            <BookingStepOne form={form} />

            <div className="flex w-full justify-end">
              <Button type="button" size="lg" className="px-8" onClick={onNext}>
                {formT("buttons.next")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
