import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { RequiredMark } from "./RequiredMark";
import { FieldName, FormValues } from "./FormValues";

export function FormTextInput({
  form,
  name,
  label,
  type = "text",
}: {
  form: UseFormReturn<FormValues>;
  name: FieldName;
  label: string;
  type?: string;
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
          <FormControl>
            <input
              type={type}
              className={`w-full h-11 rounded-none border px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brandred/20 ${
                fieldState.error ? "border-brandred" : "border-gray-300"
              }`}
              {...field}
            />
          </FormControl>
          <FormMessage className="mt-1.5" />
        </FormItem>
      )}
    />
  );
}
