"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type CheckboxFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
};

export function CheckboxField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
}: CheckboxFieldProps<TFieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id={id}
              checked={field.value as boolean}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              aria-invalid={fieldState.invalid}
              className="mt-0.5 size-4 shrink-0 cursor-pointer accent-primary"
            />
            <label
              htmlFor={id}
              className={cn(
                "cursor-pointer text-sm leading-relaxed text-muted-foreground",
                fieldState.invalid && "text-destructive",
              )}
            >
              {label}
            </label>
          </div>
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
