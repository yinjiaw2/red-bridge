"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type TextFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  type?: "text" | "email" | "tel" | "number";
};

export function TextField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  type = "text",
}: TextFieldProps<TFieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field className="w-full" data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <input
            {...field}
            id={id}
            type={type}
            aria-invalid={fieldState.invalid}
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
