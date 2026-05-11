"use client";

import type { FieldPath, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import type { BookingStepOneValues } from "./types";

type BookingStepOneProps = {
  form: UseFormReturn<BookingStepOneValues>;
};

type TextFieldProps = {
  form: UseFormReturn<BookingStepOneValues>;
  name: FieldPath<BookingStepOneValues>;
  label: string;
  type?: "text" | "email" | "tel";
};

type SelectFieldProps = {
  form: UseFormReturn<BookingStepOneValues>;
  name: FieldPath<BookingStepOneValues>;
  label: string;
  placeholder: string;
  options: readonly string[];
};

function TextField({ form, name, label, type = "text" }: TextFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <input
              {...field}
              type={type}
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectField({
  form,
  name,
  label,
  placeholder,
  options,
}: SelectFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-foreground">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="h-10 w-full rounded-lg">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent
              position="popper"
              align="start"
              sideOffset={4}
              className="w-(--radix-select-trigger-width)"
            >
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function BookingStepOne({ form }: BookingStepOneProps) {
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const contactMethods = dataT.raw("contactMethods") as string[];
  const languages = dataT.raw("languages") as string[];
  const sources = dataT.raw("sources") as string[];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <TextField
        form={form}
        name="firstName"
        label={formT("fields.firstName")}
      />
      <TextField
        form={form}
        name="lastName"
        label={formT("fields.lastName")}
      />
      <TextField
        form={form}
        name="email"
        type="email"
        label={formT("fields.email")}
      />
      <TextField
        form={form}
        name="mobile"
        type="tel"
        label={formT("fields.mobile")}
      />
      <SelectField
        form={form}
        name="preferredContact"
        label={formT("fields.preferredContact")}
        placeholder={formT("placeholders.select")}
        options={contactMethods}
      />
      <SelectField
        form={form}
        name="preferredLanguage"
        label={formT("fields.preferredLanguage")}
        placeholder={formT("placeholders.select")}
        options={languages}
      />
      <div className="md:col-span-2">
        <SelectField
          form={form}
          name="source"
          label={formT("fields.source")}
          placeholder={formT("placeholders.select")}
          options={sources}
        />
      </div>
    </div>
  );
}
