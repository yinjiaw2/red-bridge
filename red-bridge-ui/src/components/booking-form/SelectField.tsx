"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <label htmlFor={id} className="text-sm font-medium text-foreground">
            {label}
          </label>
          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={id}
              aria-invalid={fieldState.invalid}
              className="h-10 w-full rounded-lg"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
