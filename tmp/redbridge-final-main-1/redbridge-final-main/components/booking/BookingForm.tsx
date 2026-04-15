"use client";

import type { BookingFormProps } from "./types";
import {
  contactMethods,
  educationLevels,
  englishTests,
  languages,
  pathwayOptions,
  sources,
  workExperienceBands,
} from "./booking-data";

const stepTitles = [
  "Contact Details",
  "Pathway Snapshot",
  "Profile Details",
  "Review & Confirm",
] as const;

export function BookingForm({
  form,
  currentStep,
  totalSteps,
  onChange,
  onNext,
  onBack,
  onSubmit,
  stepError,
  selectedSlotLabel,
}: BookingFormProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <section className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-8 shadow-[var(--shadow)] md:px-8 md:py-9">
      <div className="flex flex-col gap-4 border-b border-[var(--border-soft)] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-eyebrow">Client Profile</p>
          <h2 className="mt-3 text-[2.1rem] leading-[0.98] text-[var(--text-main)] md:text-[2.6rem]">
            {stepTitles[currentStep]}
          </h2>
        </div>
        <span className="inline-flex w-fit rounded-full bg-[var(--bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>

      <div className="mt-5 h-2 rounded-full bg-[var(--bg)]">
        <div
          className="h-full rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-5 rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
        <span className="font-semibold text-[var(--text-main)]">Selected consultation:</span> {selectedSlotLabel}
      </div>

      <div className="mt-7 space-y-8">
        {currentStep === 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              First Name*
              <input
                required
                value={form.firstName}
                onChange={(event) => onChange("firstName", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Last Name*
              <input
                required
                value={form.lastName}
                onChange={(event) => onChange("lastName", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Email*
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => onChange("email", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Mobile Number*
              <input
                required
                type="tel"
                value={form.mobile}
                onChange={(event) => onChange("mobile", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Preferred Contact*
              <select
                required
                value={form.preferredContact}
                onChange={(event) => onChange("preferredContact", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {contactMethods.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Preferred Language*
              <select
                required
                value={form.preferredLanguage}
                onChange={(event) => onChange("preferredLanguage", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {languages.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)] md:col-span-2">
              How Did You Hear About Us?*
              <select
                required
                value={form.source}
                onChange={(event) => onChange("source", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {sources.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {currentStep === 1 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Pathway / Consultation Focus*
              <select
                required
                value={form.pathway}
                onChange={(event) => onChange("pathway", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {pathwayOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Nationality*
              <input
                required
                value={form.nationality}
                onChange={(event) => onChange("nationality", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Country of Residency*
              <input
                required
                value={form.countryResidency}
                onChange={(event) => onChange("countryResidency", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Date of Birth*
              <input
                required
                type="date"
                value={form.dateOfBirth}
                onChange={(event) => onChange("dateOfBirth", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Current Visa
              <input
                value={form.currentVisa}
                onChange={(event) => onChange("currentVisa", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                placeholder="e.g. 485, 500, 482"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Visa Expiry
              <input
                type="date"
                value={form.visaExpiry}
                onChange={(event) => onChange("visaExpiry", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              />
            </label>
          </div>
        ) : null}

        {currentStep === 2 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)] md:col-span-2">
              Occupation / Target Occupation*
              <input
                required
                value={form.occupation}
                onChange={(event) => onChange("occupation", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                placeholder="e.g. Business Analyst, Accountant, Nurse"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Highest Level of Education*
              <select
                required
                value={form.educationLevel}
                onChange={(event) => onChange("educationLevel", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {educationLevels.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Year of Graduation*
              <input
                required
                type="number"
                value={form.graduationYear}
                onChange={(event) => onChange("graduationYear", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                placeholder="YYYY"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Australian Work Experience*
              <select
                required
                value={form.workExperience}
                onChange={(event) => onChange("workExperience", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {workExperienceBands.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Latest English Test*
              <select
                required
                value={form.englishTest}
                onChange={(event) => onChange("englishTest", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
              >
                <option value="">Select</option>
                {englishTests.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {currentStep === 3 ? (
          <div className="space-y-6">
            <label className="space-y-2 text-sm font-medium text-[var(--text-main)]">
              Briefly Describe Your Situation
              <textarea
                rows={5}
                value={form.notes}
                onChange={(event) => onChange("notes", event.target.value)}
                className="w-full rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-base outline-none"
                placeholder="e.g. I'm on a 485 expiring in 6 months, working in ICT in Melbourne, and aiming for PR..."
              />
            </label>

            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Review Summary</p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-sub)] md:grid-cols-2">
                <p><span className="font-semibold text-[var(--text-main)]">Name:</span> {form.firstName} {form.lastName}</p>
                <p><span className="font-semibold text-[var(--text-main)]">Email:</span> {form.email}</p>
                <p><span className="font-semibold text-[var(--text-main)]">Mobile:</span> {form.mobile}</p>
                <p><span className="font-semibold text-[var(--text-main)]">Pathway:</span> {form.pathway}</p>
                <p className="md:col-span-2"><span className="font-semibold text-[var(--text-main)]">Selected slot:</span> {selectedSlotLabel}</p>
              </div>
            </div>

            <label className="flex items-start gap-3 rounded-[18px] bg-[var(--bg)] px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => onChange("consent", event.target.checked)}
                className="mt-1 h-4 w-4 accent-[var(--accent)]"
              />
              I agree to be contacted by RedBridge about this booking request and understand that submitting this form
              does not confirm the appointment until the team replies.
            </label>
          </div>
        ) : null}
      </div>

      {stepError ? (
        <p className="mt-6 rounded-[16px] border border-[rgba(168,32,48,0.18)] bg-[rgba(168,32,48,0.05)] px-4 py-3 text-sm leading-7 text-[var(--accent)]">
          {stepError}
        </p>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={currentStep === 0}
          className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-3 text-sm font-semibold text-[var(--text-main)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          Back
        </button>

        {currentStep === totalSteps - 1 ? (
          <button
            type="button"
            onClick={onSubmit}
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
          >
            Submit Booking Request
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
          >
            Next Step
          </button>
        )}
      </div>
    </section>
  );
}
