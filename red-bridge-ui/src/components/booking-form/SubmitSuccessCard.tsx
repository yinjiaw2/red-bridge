"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

type SubmitSuccessCardProps = {
  name: string;
  email: string;
  pathway: string;
};

export function SubmitSuccessCard({
  name,
  email,
  pathway,
}: SubmitSuccessCardProps) {
  const formT = useTranslations("bookingForm.form");

  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
        <CheckCircle className="size-7 text-primary" aria-hidden="true" />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {formT("submitted.eyebrow")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {formT("submitted.title", { name })}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {formT("submitted.description")}
        </p>
      </div>

      <div className="w-full rounded-lg border border-border bg-background p-4 text-left">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {formT("review.summary")}
        </p>
        <div className="space-y-2 text-sm leading-7">
          <p>
            <span className="font-semibold text-foreground">
              {formT("submitted.fields.name")}
            </span>{" "}
            <span className="text-muted-foreground">{name}</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">
              {formT("submitted.fields.email")}
            </span>{" "}
            <span className="text-muted-foreground">{email}</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">
              {formT("submitted.fields.pathway")}
            </span>{" "}
            <span className="text-muted-foreground">{pathway}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
