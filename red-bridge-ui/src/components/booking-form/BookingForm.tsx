"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
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

  const stepTitles = formT.raw("steps") as string[];
  const currentStepTitle = stepTitles[INITIAL_STEP_INDEX] ?? "";
  const schema = createBookingStepOneSchema({
    required: formT("validation.required"),
    invalidEmail: formT("validation.invalidEmail"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: bookingStepOneDefaultValues,
    mode: "onTouched",
  });

  const handleSubmit = (values: BookingStepOneValues) => {
    onStepOneSubmit?.(values);
  };

  return (
    <section className="mx-auto flex w-full flex-col rounded-lg border border-border bg-card px-6 py-8 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
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
            current: INITIAL_STEP_INDEX + 1,
            total: TOTAL_STEPS,
          })}
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          noValidate
          className="mt-7 space-y-8"
        >
          <BookingStepOne form={form} />

          <div className="flex justify-end">
            <Button type="submit" size="lg" className="px-8">
              {formT("buttons.next")}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
