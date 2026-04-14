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
              className={`w-full h-11 rounded-none border px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brandred/20 ${
                error ? "border-brandred" : "border-gray-300"
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
      {error && <p className="mt-1.5 text-xs text-brandred">{error}</p>}
    </>
  );
}
