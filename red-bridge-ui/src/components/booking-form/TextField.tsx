import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type TextFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  type?: "text" | "email" | "tel";
};

export function TextField<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  type = "text",
}: TextFieldProps<TFieldValues>) {
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
