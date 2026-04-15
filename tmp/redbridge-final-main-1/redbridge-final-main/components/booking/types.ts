import type { ConsultationStage, ConsultationTypeOption } from "./booking-data";

export type BookingFormState = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  preferredContact: string;
  preferredLanguage: string;
  source: string;
  pathway: string;
  nationality: string;
  countryResidency: string;
  dateOfBirth: string;
  currentVisa: string;
  visaExpiry: string;
  occupation: string;
  educationLevel: string;
  graduationYear: string;
  workExperience: string;
  englishTest: string;
  notes: string;
  consent: boolean;
};

export type BookingDraft = {
  form: BookingFormState;
  selectedDate: string | null;
  selectedTime: string | null;
  currentStep: number;
  monthOffset: number;
  selectedConsultationLabel: string;
  stage: ConsultationStage | null;
};

export type CalendarDay = {
  date: string;
  dayNumber: number;
  disabled: boolean;
  isSelected: boolean;
  isToday: boolean;
};

export type TimeSlot = {
  label: string;
  disabled: boolean;
  isSelected: boolean;
};

export type BookingInfoPanelProps = {
  availableConsultationTypes: readonly ConsultationTypeOption[];
  selectedConsultation: ConsultationTypeOption;
  onConsultationChange: (label: string) => void;
  localTimeLabel: string;
  melbourneTimeLabel: string;
  monthLabel: string;
  canGoPrev: boolean;
  canGoNext: boolean;
  onMonthChange: (direction: -1 | 1) => void;
  calendarDays: readonly CalendarDay[];
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
  timeSlots: readonly TimeSlot[];
  onTimeSelect: (time: string) => void;
  selectedSlotLabel: string;
  onSaveDraft: () => void;
  draftMessage: string | null;
};

export type BookingFormProps = {
  form: BookingFormState;
  currentStep: number;
  totalSteps: number;
  onChange: <K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  stepError: string | null;
  selectedSlotLabel: string;
};
