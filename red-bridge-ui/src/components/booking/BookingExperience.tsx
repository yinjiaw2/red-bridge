"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ConsultationStage, ConsultationTypeOption } from "./booking-data";
import { BookingForm } from "./BookingForm";
import { BookingInfoPanel } from "./BookingInfoPanel";
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

function getDateLocale(locale: string) {
  return locale.startsWith("zh") ? "zh-CN" : "en-AU";
}

function getMelbourneTimeLabel(locale: string) {
  return locale.startsWith("zh") ? "墨尔本时间" : "Melbourne time";
}

function formatClockLabel(date: Date, locale: string, timeZone?: string) {
  return new Intl.DateTimeFormat(getDateLocale(locale), {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    ...(timeZone ? { timeZone } : {}),
  }).format(date);
}

function formatMonthLabel(date: Date, locale: string) {
  return new Intl.DateTimeFormat(getDateLocale(locale), {
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

function formatSelectedDateLabel(dateString: string, locale: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(getDateLocale(locale), {
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
  messages: {
    selectDateTime: string;
    contactDetailsRequired: string;
    pathwayDetailsRequired: string;
    profileDetailsRequired: string;
    consentRequired: string;
  },
  currentStep: number,
  form: BookingFormState,
  selectedDate: string | null,
  selectedTime: string | null,
) {
  if (currentStep === 0) {
    if (!selectedDate || !selectedTime) {
      return messages.selectDateTime;
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
      return messages.contactDetailsRequired;
    }
  }

  if (currentStep === 1) {
    if (!form.pathway || !form.nationality || !form.countryResidency || !form.dateOfBirth) {
      return messages.pathwayDetailsRequired;
    }
  }

  if (currentStep === 2) {
    if (!form.occupation || !form.educationLevel || !form.graduationYear || !form.workExperience || !form.englishTest) {
      return messages.profileDetailsRequired;
    }
  }

  if (currentStep === 3 && !form.consent) {
    return messages.consentRequired;
  }

  return null;
}

const BOOKING_SHEET_URL = process.env.NEXT_PUBLIC_BOOKING_SHEET_URL!;

async function submitBooking(
  form: BookingFormState,
  consultationLabel: string,
  slotLabel: string,
  subjectPrefix: string,
  heading: string,
) {
  const payload = {
    ...form,
    consultationLabel,
    slotLabel,
    subjectPrefix,
    heading,
  };

  const res = await fetch(BOOKING_SHEET_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Submission failed: ${res.status}`);
  }

  const json = await res.json();
  if (json.result !== "success") {
    throw new Error(json.error ?? "Unknown error");
  }
}

export function BookingExperience() {
  const locale = useLocale();
  const dataT = useTranslations("contactPage.data");
  const messageT = useTranslations("contactPage.experience.messages");
  const submittedT = useTranslations("contactPage.experience.submitted");
  const mailT = useTranslations("contactPage.experience.mail");
  const consultationTypes = dataT.raw("consultationTypes") as ConsultationTypeOption[];
  const validationMessages = {
    selectDateTime: messageT("selectDateTime"),
    contactDetailsRequired: messageT("contactDetailsRequired"),
    pathwayDetailsRequired: messageT("pathwayDetailsRequired"),
    profileDetailsRequired: messageT("profileDetailsRequired"),
    consentRequired: messageT("consentRequired"),
  };
  const [form, setForm] = useState<BookingFormState>(initialFormState);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [stageFilter, setStageFilter] = useState<ConsultationStage | null>(null);
  const [selectedConsultationLabel, setSelectedConsultationLabel] = useState(() => consultationTypes[0]?.label ?? "");
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
  const localTimeLabel = useMemo(() => formatClockLabel(new Date(clockTick), locale), [clockTick, locale]);
  const melbourneTimeLabel = useMemo(
    () => formatClockLabel(new Date(clockTick), locale, "Australia/Melbourne"),
    [clockTick, locale],
  );

  const availableConsultationTypes = useMemo(
    () => (stageFilter ? consultationTypes.filter((type) => type.stage === stageFilter) : consultationTypes),
    [consultationTypes, stageFilter],
  );

  const selectedConsultation =
    availableConsultationTypes.find((type) => type.label === selectedConsultationLabel) ??
    consultationTypes.find((type) => type.label === selectedConsultationLabel) ??
    availableConsultationTypes[0] ??
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
        setDraftMessage(messageT("savedDraftLoaded"));
      } catch {
        setDraftMessage(null);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [messageT]);

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
      ? `${formatSelectedDateLabel(selectedDate, locale)} at ${activeSelectedTime} (${getMelbourneTimeLabel(locale)})`
      : messageT("pendingSelection");

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
    setDraftMessage(messageT("progressSaved"));
  };

  const handleChange = <K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (stepError) {
      setStepError(null);
    }
  };

  const handleNext = () => {
    const error = getStepError(validationMessages, currentStep, form, selectedDate, activeSelectedTime);
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

  const handleSubmit = async () => {
    const error = getStepError(validationMessages, currentStep, form, selectedDate, activeSelectedTime);
    if (error) {
      setStepError(error);
      return;
    }

    try {
      await submitBooking(
        form,
        selectedConsultation.label,
        selectedSlotLabel,
        mailT("subjectPrefix"),
        mailT("heading"),
      );
      setSubmitted(true);
      setStepError(null);
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStepError(messageT("submitError"));
    }
  };

  const resetBooking = () => {
    setForm(initialFormState);
    setSelectedDate(null);
    setSelectedTime(null);
    setMonthOffset(0);
    setCurrentStep(0);
    setSubmitted(false);
    setStepError(null);
    setSelectedConsultationLabel(availableConsultationTypes[0]?.label ?? consultationTypes[0]?.label ?? "");
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!selectedConsultation) {
    return null;
  }

  if (submitted) {
    return (
      <section className="w-full bg-[var(--bg)] py-12 md:py-16">
        <div className="home-inner">
          <div className="mx-auto max-w-[780px] rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-7 py-10 text-center shadow-[var(--shadow)] md:px-10">
            <p className="section-eyebrow">{submittedT("eyebrow")}</p>
            <h2 className="mt-3 text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
              {submittedT("title", { name: form.firstName || "there" })}
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-[var(--text-sub)]">
              {submittedT("description", { slotLabel: selectedSlotLabel, email: CONTACT_EMAIL })}
            </p>

            <div className="mt-8 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{submittedT("summary")}</p>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--text-sub)]">
                <p>
                  <span className="font-semibold text-[var(--text-main)]">{submittedT("fields.name")}</span> {form.firstName} {form.lastName}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">{submittedT("fields.email")}</span> {form.email}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">{submittedT("fields.pathway")}</span> {form.pathway}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">{submittedT("fields.consultation")}</span> {selectedConsultation.label}
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-main)]">{submittedT("fields.slot")}</span> {selectedSlotLabel}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetBooking}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
            >
              {submittedT("button")}
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
            monthLabel={formatMonthLabel(monthDate, locale)}
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
