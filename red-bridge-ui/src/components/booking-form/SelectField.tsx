"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { Field, FieldTitle, FieldError } from "@/components/ui/field";
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
  const labelId = useId();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field className="w-full" data-invalid={fieldState.invalid}>
          <FieldTitle id={labelId}>{label}</FieldTitle>
          <Select
            name={field.name}
            value={field.value || undefined}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              ref={field.ref}
              aria-labelledby={labelId}
              aria-invalid={fieldState.invalid}
              className="h-10 w-full rounded-lg"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="popper" align="start" sideOffset={4}>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
