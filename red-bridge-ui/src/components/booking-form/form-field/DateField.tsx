"use client";

import { useId, useState } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import type { Matcher } from "react-day-picker";
import { format } from "date-fns";
import { zhCN, enUS } from "date-fns/locale";
import { useLocale } from "next-intl";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DateFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder: string;
  disabled?: Matcher | Matcher[];
  fromYear?: number;
  toYear?: number;
};

export function DateField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  disabled,
  fromYear = 1900,
  toYear = new Date().getFullYear(),
}: DateFieldProps<TFieldValues>) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  const calendarLocale = locale === "zh" ? zhCN : enUS;
  const dateFormat = locale === "zh" ? "yyyy年MM月dd日" : "dd/MM/yyyy";

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <div className="flex w-full flex-col gap-2">
          <label htmlFor={id} className="text-sm font-medium text-foreground">
            {label}
          </label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                id={id}
                type="button"
                aria-invalid={fieldState.invalid}
                className={cn(
                  "flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                  !field.value && "text-muted-foreground",
                  fieldState.invalid && "border-destructive",
                )}
              >
                <span>
                  {field.value
                    ? format(field.value as Date, dateFormat, {
                        locale: calendarLocale,
                      })
                    : placeholder}
                </span>
                <CalendarIcon
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value as Date | undefined}
                onSelect={(date) => {
                  field.onChange(date);
                  setOpen(false);
                }}
                disabled={disabled}
                locale={calendarLocale}
                captionLayout="dropdown"
                startMonth={new Date(fromYear, 0)}
                endMonth={new Date(toYear, 11)}
              />
            </PopoverContent>
          </Popover>
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
