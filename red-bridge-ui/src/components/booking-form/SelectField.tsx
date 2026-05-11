"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

type SelectFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder: string;
  options: readonly string[];
};

export function SelectField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  options,
}: SelectFieldProps<TFieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor={id}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
          <select
            {...field}
            id={id}
            aria-invalid={fieldState.invalid}
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldState.invalid && (
            <p className="text-xs text-destructive">
              {fieldState.error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
