"use client";

import { Control, Controller, Path, FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormSelectInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: string[];
  placeholder: string;
  error?: string;
  rules?: object;
}

export default function FormSelectInput<T extends FieldValues>({
  name,
  control,
  options,
  placeholder,
  error,
  rules,
}: FormSelectInputProps<T>) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              className={`w-full h-10 rounded-lg border px-3 text-[14px] bg-white focus:outline-none focus:ring-2 focus:ring-[#A20000]/20 ${
                error ? "border-[#A20000]" : "border-[#d9cfc6]"
              }`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="mt-1 text-[11px] text-[#A20000]">{error}</p>}
    </>
  );
}
