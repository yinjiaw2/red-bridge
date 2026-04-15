"use client";

import { useState } from "react";
import { employerInquirySections } from "./employers-data";

type EmployerFormState = Record<string, string>;

const initialState = employerInquirySections.flatMap((section) => section.fields).reduce<EmployerFormState>((acc, field) => {
  acc[field.key] = "";
  return acc;
}, {});

export function EmployerInquirySection() {
  const [form, setForm] = useState<EmployerFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="employer-inquiry" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            Submit an <span className="italic text-[var(--accent)]">Employer Inquiry</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg leading-8 text-[var(--text-sub)]">
            Complete the form below and our team will review your business profile and contact you within one business
            day.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[860px] rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow-lg)] md:px-8 md:py-8">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="section-eyebrow justify-center">Inquiry Received</p>
              <h3 className="mt-3 text-[2.1rem] leading-tight text-[var(--text-main)]">Thanks for reaching out.</h3>
              <p className="mx-auto mt-4 max-w-[560px] text-base leading-8 text-[var(--text-sub)]">
                Your employer inquiry has been prepared for follow-up. In this migration pass the form is client-side,
                but the content and structure are now in the App Router and ready to be wired to a real endpoint later.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {employerInquirySections.map((section) => (
                <div key={section.title}>
                  <p className="border-b border-[var(--border-soft)] pb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {section.title}
                  </p>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {section.fields.map((field) => (
                      <label
                        key={field.key}
                        className={[
                          "space-y-2 text-sm font-medium text-[var(--text-main)]",
                          field.type === "text" && field.key === "businessAddress" ? "md:col-span-2" : "",
                        ].join(" ")}
                      >
                        {field.label}
                        {field.type === "select" ? (
                          <select
                            required
                            value={form[field.key]}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                          >
                            <option value="">Select</option>
                            {field.options?.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            required
                            type={field.type}
                            value={form[field.key]}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
              >
                Submit Employer Inquiry
              </button>
              <p className="text-sm leading-7 text-[var(--text-dim)]">
                We review all inquiries within one business day. By law, all sponsorship costs must be covered by the
                employer, not the visa holder.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
