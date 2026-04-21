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
import { FieldName, FormValues } from "./FormValues";
import { UseFormReturn } from "react-hook-form";
import { RequiredMark } from "./RequiredMark";

export function FormSelectInput({
  form,
  name,
  label,
  options,
  placeholder,
}: {
  form: UseFormReturn<FormValues>;
  name: FieldName;
  label: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold text-naviblue">
            {label}
            <RequiredMark />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger
                className={`w-full h-11 rounded-none border px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brandred/20 ${
                  fieldState.error ? "border-brandred" : "border-gray-300"
                }`}
              >
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
          <FormMessage className="mt-1.5" />
        </FormItem>
      )}
    />
  );
}
