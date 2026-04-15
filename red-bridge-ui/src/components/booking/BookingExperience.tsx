"use client";

import { useEffect, useMemo, useState } from "react";
import { BookingForm } from "./BookingForm";
import { BookingInfoPanel } from "./BookingInfoPanel";
import { consultationTypes, type ConsultationStage, type ConsultationTypeOption } from "./booking-data";
import type { BookingDraft, BookingFormState, CalendarDay, TimeSlot } from "./types";

const STORAGE_KEY = "redbridge_booking_draft";
const TOTAL_STEPS = 4;
const CONTACT_EMAIL = "info@red-bridge.com.au";

const initialFormState: BookingFormState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  preferredContact: "",
  preferredLanguage: "",
  source: "",
  pathway: "",
  nationality: "",
  countryResidency: "",
  dateOfBirth: "",
  currentVisa: "",
  visaExpiry: "",
  occupation: "",
  educationLevel: "",
  graduationYear: "",
  workExperience: "",
  englishTest: "",
  notes: "",
  consent: false,
};

function getMelbourneNow(now = new Date()) {
  return new Date(now.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
}

function formatClockLabel(date: Date, timeZone?: string) {
  return new Intl.DateTimeFormat("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    ...(timeZone ? { timeZone } : {}),
  }).format(date);
}

function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatSelectedDateLabel(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function parseStageFromWindow(): ConsultationStage | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stage = new URLSearchParams(window.location.search).get("stage");
  return stage === "1" || stage === "2" || stage === "3" || stage === "4" ? stage : null;
}

function buildCalendarDays(monthDate: Date, selectedDate: string | null, melbourneNow: Date): CalendarDay[] {
  const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
  const todayString = formatDateString(melbourneNow);
  const maxDate = new Date(melbourneNow);
  maxDate.setMonth(maxDate.getMonth() + 1);
  const maxDateString = formatDateString(maxDate);
  const result: CalendarDay[] = [];

  for (let i = 0; i < firstDay; i += 1) {
    result.push({
      date: `empty-${monthDate.getMonth()}-${i}`,
      dayNumber: 0,
      disabled: true,
      isSelected: false,
      isToday: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    const dateString = formatDateString(date);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPast = dateString < todayString;
    const isTooFar = dateString > maxDateString;

    result.push({
      date: dateString,
      dayNumber: day,
      disabled: isWeekend || isPast || isTooFar,
      isSelected: selectedDate === dateString,
      isToday: dateString === todayString,
    });
  }

  return result;
}

function buildTimeSlots(
  selectedDate: string | null,
  selectedTime: string | null,
  consultation: ConsultationTypeOption,
  melbourneNow: Date,
): TimeSlot[] {
  if (!selectedDate) {
    return [];
  }

  const [year, month, day] = selectedDate.split("-").map(Number);
  const selected = new Date(year, month - 1, day);
  const weekday = selected.getDay();
  const endTime = weekday === 5 ? 16.5 : 17.5;
  const step = consultation.durationMinutes === 60 ? 1.25 : 0.5;
  const todayString = formatDateString(melbourneNow);
  const currentHourDecimal = melbourneNow.getHours() + melbourneNow.getMinutes() / 60;
  const isToday = selectedDate === todayString;
  const slots: TimeSlot[] = [];

  for (let timeValue = 12.0; timeValue <= endTime + 0.001; timeValue += step) {
    const hour24 = Math.floor(timeValue);
    const minutes = Math.round((timeValue % 1) * 60);
    let displayHour = hour24 > 12 ? hour24 - 12 : hour24;
    if (displayHour === 0) {
      displayHour = 12;
    }

    const label = `${displayHour}:${String(minutes).padStart(2, "0")} PM`;
    const disabled = isToday && timeValue <= currentHourDecimal;

    slots.push({
      label,
      disabled,
      isSelected: selectedTime === label && !disabled,
    });
  }

  return slots;
}

function getStepError(
  currentStep: number,
  form: BookingFormState,
  selectedDate: string | null,
  selectedTime: string | null,
) {
  if (currentStep === 0) {
    if (!selectedDate || !selectedTime) {
      return "Please select a consultation date and time before continuing.";
    }

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.mobile ||
      !form.preferredContact ||
      !form.preferredLanguage ||
      !form.source
    ) {
      return "Please complete all required contact details.";
    }
  }

  if (currentStep === 1) {
    if (!form.pathway || !form.nationality || !form.countryResidency || !form.dateOfBirth) {
      return "Please complete the pathway and residency details before moving on.";
    }
  }

  if (currentStep === 2) {
    if (!form.occupation || !form.educationLevel || !form.graduationYear || !form.workExperience || !form.englishTest) {
      return "Please complete the profile details before moving on.";
    }
  }

  if (currentStep === 3 && !form.consent) {
    return "Please confirm consent before submitting your booking request.";
  }

  return null;
}

function buildMailtoLink(
  form: BookingFormState,
  consultationLabel: string,
  slotLabel: string,
) {
  const subject = `Consultation Request - ${form.firstName} ${form.lastName}`.trim();
  const body = [
    "New consultation request",
    "",
    `Name: ${form.firstName} ${form.lastName}`.trim(),
    `Email: ${form.email}`,
    `Mobile: ${form.mobile}`,
    `Preferred contact: ${form.preferredContact}`,
    `Preferred language: ${form.preferredLanguage}`,
    `Source: ${form.source}`,
    "",
    `Consultation type: ${consultationLabel}`,
    `Selected slot: ${slotLabel}`,
    `Pathway focus: ${form.pathway}`,
    "",
    `Nationality: ${form.nationality}`,
    `Country of residency: ${form.countryResidency}`,
    `Date of birth: ${form.dateOfBirth}`,
    `Current visa: ${form.currentVisa || "-"}`,
    `Visa expiry: ${form.visaExpiry || "-"}`,
    "",
    `Occupation: ${form.occupation}`,
    `Education level: ${form.educationLevel}`,
    `Graduation year: ${form.graduationYear}`,
    `Australian work experience: ${form.workExperience}`,
    `English test: ${form.englishTest}`,
    "",
    "Notes:",
    form.notes || "-",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function BookingExperience() {
  const [form, setForm] = useState<BookingFormState>(initialFormState);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [stageFilter, setStageFilter] = useState<ConsultationStage | null>(null);
  const [selectedConsultationLabel, setSelectedConsultationLabel] = useState(consultationTypes[0].label);
  const [draftMessage, setDraftMessage] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [clockTick, setClockTick] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStageFilter(parseStageFromWindow());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setClockTick(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const melbourneNow = useMemo(() => getMelbourneNow(new Date(clockTick)), [clockTick]);
  const localTimeLabel = useMemo(() => formatClockLabel(new Date(clockTick)), [clockTick]);
  const melbourneTimeLabel = useMemo(() => formatClockLabel(new Date(clockTick), "Australia/Melbourne"), [clockTick]);

  const availableConsultationTypes = useMemo(
    () => (stageFilter ? consultationTypes.filter((type) => type.stage === stageFilter) : consultationTypes),
    [stageFilter],
  );

  const selectedConsultation =
    availableConsultationTypes.find((type) => type.label === selectedConsultationLabel) ??
    consultationTypes.find((type) => type.label === selectedConsultationLabel) ??
    consultationTypes[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          return;
        }

        const draft = JSON.parse(raw) as Partial<BookingDraft>;
        if (draft.form) {
          setForm((current) => ({ ...current, ...draft.form }));
        }
        if (draft.selectedDate) {
          setSelectedDate(draft.selectedDate);
        }
        if (draft.selectedTime) {
          setSelectedTime(draft.selectedTime);
        }
        if (typeof draft.currentStep === "number") {
          setCurrentStep(Math.min(Math.max(draft.currentStep, 0), TOTAL_STEPS - 1));
        }
        if (typeof draft.monthOffset === "number") {
          setMonthOffset(Math.min(Math.max(draft.monthOffset, 0), 1));
        }
        if (draft.selectedConsultationLabel) {
          setSelectedConsultationLabel(draft.selectedConsultationLabel);
        }
        setDraftMessage("Saved draft loaded.");
      } catch {
        setDraftMessage(null);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!draftMessage) {
      return;
    }

    const timer = window.setTimeout(() => setDraftMessage(null), 2800);
    return () => window.clearTimeout(timer);
  }, [draftMessage]);

  const monthDate = useMemo(() => {
    const baseMonth = new Date(melbourneNow.getFullYear(), melbourneNow.getMonth(), 1);
    return new Date(baseMonth.getFullYear(), baseMonth.getMonth() + monthOffset, 1);
  }, [melbourneNow, monthOffset]);
  const calendarDays = useMemo(
    () => buildCalendarDays(monthDate, selectedDate, melbourneNow),
    [monthDate, selectedDate, melbourneNow],
  );
  const timeSlots = useMemo(
    () => buildTimeSlots(selectedDate, selectedTime, selectedConsultation, melbourneNow),
    [selectedDate, selectedTime, selectedConsultation, melbourneNow],
  );
  const activeSelectedTime = timeSlots.find((slot) => slot.isSelected)?.label ?? null;

  const selectedSlotLabel =
    selectedDate && activeSelectedTime
      ? `${formatSelectedDateLabel(selectedDate)} at ${activeSelectedTime} (Melbourne time)`
      : "Pending selection - choose a weekday date and time.";

  const saveDraft = () => {
    const draft: BookingDraft = {
      form,
      selectedDate,
      selectedTime,
      currentStep,
      monthOffset,
      selectedConsultationLabel,
      stage: stageFilter,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setDraftMessage("Progress saved on this device.");
  };

  const handleChange = <K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (stepError) {
      setStepError(null);
    }
  };

  const handleNext = () => {
    const error = getStepError(currentStep, form, selectedDate, activeSelectedTime);
    if (error) {
      setStepError(error);
      return;
    }

    setStepError(null);
    setCurrentStep((step) => Math.min(step + 1, TOTAL_STEPS - 1));
  };

  const handleBack = () => {
    setStepError(null);
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const handleSubmit = () => {
    const error = getStepError(currentStep, form, selectedDate, activeSelectedTime);
    if (error) {
      setStepError(error);
      return;
    }

    const mailtoLink = buildMailtoLink(
      form,
      selectedConsultation.label,
      selectedSlotLabel,
    );

    setSubmitted(true);
    setStepError(null);
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = mailtoLink;
  };

  const resetBooking = () => {
    setForm(initialFormState);
    setSelectedDate(null);
    setSelectedTime(null);
    setMonthOffset(0);
    setCurrentStep(0);
    setSubmitted(false);
    setStepError(null);
    setSelectedConsultationLabel(availableConsultationTypes[0]?.label ?? consultationTypes[0].label);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (submitted) {
    return (
      <section className="w-full bg-[var(--bg)] py-12 md:py-16">
        <div className="home-inner">
          <div className="mx-auto max-w-[780px] rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-7 py-10 text-center shadow-[var(--shadow)] md:px-10">
            <p className="section-eyebrow">Booking Confirmed</p>
            <h2 className="mt-3 text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
              Thanks, {form.firstName || "there"}.
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-[var(--text-sub)]">
              Your consultation request has been prepared for {selectedSlotLabel}. Your email app should now open a
              draft addressed to {CONTACT_EMAIL} with all your details filled in.
            </p>

            <div className="mt-8 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Summary</p>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--text-sub)]">
                <p>
                  <span className="font-semibold text-[var(--text-main)]">Name:</span> {form.firstName} {form.lastName}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">Email:</span> {form.email}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">Pathway:</span> {form.pathway}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">Consultation:</span> {selectedConsultation.label}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">Slot:</span> {selectedSlotLabel}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetBooking}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
            >
              Book another consultation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[var(--bg)] py-12 md:py-16">
      <div className="home-inner">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <BookingInfoPanel
            availableConsultationTypes={availableConsultationTypes}
            selectedConsultation={selectedConsultation}
            onConsultationChange={(label) => {
              setSelectedConsultationLabel(label);
              setSelectedTime(null);
              setStepError(null);
            }}
            localTimeLabel={localTimeLabel}
            melbourneTimeLabel={melbourneTimeLabel}
            monthLabel={formatMonthLabel(monthDate)}
            canGoPrev={monthOffset > 0}
            canGoNext={monthOffset < 1}
            onMonthChange={(direction) => {
              setMonthOffset((current) => Math.min(Math.max(current + direction, 0), 1));
              setStepError(null);
            }}
            calendarDays={calendarDays}
            selectedDate={selectedDate}
            onDateSelect={(date) => {
              setSelectedDate(date);
              setSelectedTime(null);
              setStepError(null);
            }}
            timeSlots={timeSlots}
            onTimeSelect={(time) => {
              setSelectedTime(time);
              setStepError(null);
            }}
            selectedSlotLabel={selectedSlotLabel}
            onSaveDraft={saveDraft}
            draftMessage={draftMessage}
          />

          <BookingForm
            form={form}
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
            stepError={stepError}
            selectedSlotLabel={selectedSlotLabel}
          />
        </div>
      </div>
    </section>
  );
}


