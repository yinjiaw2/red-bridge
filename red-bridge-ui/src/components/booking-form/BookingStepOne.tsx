"use client";

import type { UseFormReturn } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { BookingStepOneValues } from "./types";
import { TextField } from "./form-field/TextField";
import { SelectField } from "./form-field/SelectField";

type BookingStepOneProps = {
  form: UseFormReturn<BookingStepOneValues>;
};

const WECHAT_VALUES = ["WeChat", "微信"];
const WHATSAPP_VALUES = ["WhatsApp"];

export function BookingStepOne({ form }: BookingStepOneProps) {
  const formT = useTranslations("bookingForm.form");
  const dataT = useTranslations("bookingForm.data");

  const contactMethods = dataT.raw("contactMethods") as string[];
  const languages = dataT.raw("languages") as string[];
  const sources = dataT.raw("sources") as string[];

  const preferredContact = form.watch("preferredContact");
  const isWeChat = WECHAT_VALUES.includes(preferredContact);
  const isWhatsApp = WHATSAPP_VALUES.includes(preferredContact);
  const showContactHandle = isWeChat || isWhatsApp;
  const contactHandleLabel = isWeChat
    ? formT("fields.wechatId")
    : formT("fields.whatsappNumber");

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-row w-full gap-6">
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
      </div>
      <div className="w-full flex flex-row  gap-6">
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
      </div>
      <div className="w-full flex flex-row gap-6">
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
      </div>
      {showContactHandle && (
        <div className="w-full">
          <TextField
            form={form}
            name="contactHandle"
            label={contactHandleLabel}
          />
        </div>
      )}
      <div className="w-full">
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
