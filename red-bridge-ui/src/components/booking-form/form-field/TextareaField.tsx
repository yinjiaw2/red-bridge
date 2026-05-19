"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type TextareaFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  rows?: number;
};

export function TextareaField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  rows = 4,
}: TextareaFieldProps<TFieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <div className="flex w-full flex-col gap-2">
          <label htmlFor={id} className="text-sm font-medium text-foreground">
            {label}
          </label>
          <textarea
            {...field}
            id={id}
            rows={rows}
            placeholder={placeholder}
            aria-invalid={fieldState.invalid}
            className={cn(
              "flex w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              fieldState.invalid && "border-destructive"
            )}
          />
          {fieldState.invalid && (
            <p className="text-xs text-destructive">{fieldState.error?.message}</p>
          )}
        </div>
      )}
    />
  );
}
