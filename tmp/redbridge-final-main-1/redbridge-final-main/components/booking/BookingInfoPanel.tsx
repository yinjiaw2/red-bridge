"use client";

import type { BookingInfoPanelProps } from "./types";

export function BookingInfoPanel({
  availableConsultationTypes,
  selectedConsultation,
  onConsultationChange,
  localTimeLabel,
  melbourneTimeLabel,
  monthLabel,
  canGoPrev,
  canGoNext,
  onMonthChange,
  calendarDays,
  selectedDate,
  onDateSelect,
  timeSlots,
  onTimeSelect,
  selectedSlotLabel,
  onSaveDraft,
  draftMessage,
}: BookingInfoPanelProps) {
  return (
    <div className="space-y-5 lg:sticky lg:top-28">
      <section className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-eyebrow">Date & Time</p>
            <h2 className="mt-3 text-[2rem] leading-[0.98] text-[var(--text-main)]">Choose Your Session</h2>
          </div>
          <button
            type="button"
            onClick={onSaveDraft}
            className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-sub)]"
          >
            Save for later
          </button>
        </div>

        <p className="mt-4 text-base leading-8 text-[var(--text-sub)]">
          Select the consultation type, choose an available weekday slot, and complete the profile on the right so our
          team can prepare before the call.
        </p>

        <div className="mt-6 grid gap-3">
          {availableConsultationTypes.map((type) => (
            <button
              key={type.label}
              type="button"
              onClick={() => onConsultationChange(type.label)}
              className={[
                "rounded-[18px] border px-4 py-4 text-left",
                selectedConsultation.label === type.label
                  ? "border-transparent bg-[var(--accent)] text-white shadow-[0_12px_24px_rgba(168,32,48,0.18)]"
                  : "border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-main)]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{type.label}</p>
                  <p className={["mt-1 text-sm leading-6", selectedConsultation.label === type.label ? "text-white/78" : "text-[var(--text-sub)]"].join(" ")}>
                    {type.description}
                  </p>
                </div>
                <span
                  className={[
                    "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
                    selectedConsultation.label === type.label
                      ? "bg-white/14 text-white"
                      : "bg-[rgba(138,21,35,0.07)] text-[var(--accent)]",
                  ].join(" ")}
                >
                  {type.durationMinutes === 60 ? "1 hr" : "30 min"}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[18px] border border-[rgba(138,21,35,0.14)] bg-[rgba(138,21,35,0.04)] px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
          <p>
            <span className="font-semibold text-[var(--text-main)]">Your local time:</span> {localTimeLabel}
          </p>
          <p className="mt-1">
            <span className="font-semibold text-[var(--accent)]">Melbourne time:</span> {melbourneTimeLabel}
          </p>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onMonthChange(-1)}
              disabled={!canGoPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-main)] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous month"
            >
              ←
            </button>
            <h3 className="text-[1.35rem] leading-tight text-[var(--accent)]">{monthLabel}</h3>
            <button
              type="button"
              onClick={() => onMonthChange(1)}
              disabled={!canGoNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-main)] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next month"
            >
              →
            </button>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span key={day} className="py-2">
                {day}
              </span>
            ))}
            {calendarDays.map((day) =>
              day.dayNumber === 0 ? (
                <span key={day.date} className="aspect-square" aria-hidden="true" />
              ) : (
                <button
                  key={day.date}
                  type="button"
                  disabled={day.disabled}
                  onClick={() => onDateSelect(day.date)}
                  className={[
                    "aspect-square rounded-[14px] border text-sm font-semibold",
                    day.isSelected
                      ? "border-transparent bg-[var(--accent)] text-white shadow-[0_10px_20px_rgba(168,32,48,0.18)]"
                      : day.disabled
                        ? "border-transparent bg-transparent text-[var(--text-dim)] opacity-35"
                        : "border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-main)] hover:border-[rgba(138,21,35,0.24)]",
                    day.isToday && !day.isSelected ? "border-[rgba(138,21,35,0.2)]" : "",
                  ].join(" ")}
                >
                  {day.dayNumber}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">Available Times</h4>
            <span className="text-xs font-medium text-[var(--accent)]">Melbourne time</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {selectedDate ? (
              timeSlots.length > 0 ? (
                timeSlots.map((slot) => (
                  <button
                    key={slot.label}
                    type="button"
                    disabled={slot.disabled}
                    onClick={() => onTimeSelect(slot.label)}
                    className={[
                      "rounded-[16px] border px-4 py-3 text-sm font-semibold",
                      slot.isSelected
                        ? "border-transparent bg-[var(--accent)] text-white"
                        : slot.disabled
                          ? "border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-dim)] opacity-45"
                          : "border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-main)]",
                    ].join(" ")}
                  >
                    {slot.label}
                  </button>
                ))
              ) : (
                <div className="rounded-[16px] border border-dashed border-[var(--border-soft)] bg-[var(--bg)] px-4 py-5 text-sm leading-7 text-[var(--text-sub)] sm:col-span-2">
                  No slots remain for that date. Please choose another weekday.
                </div>
              )
            ) : (
              <div className="rounded-[16px] border border-dashed border-[var(--border-soft)] bg-[var(--bg)] px-4 py-5 text-sm leading-7 text-[var(--text-sub)] sm:col-span-2">
                Please select a date first.
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 rounded-[18px] border border-[rgba(138,21,35,0.18)] bg-[rgba(138,21,35,0.04)] px-4 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">Selected Slot</p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-main)]">{selectedSlotLabel}</p>
        </div>

        {draftMessage ? <p className="mt-4 text-sm font-medium text-[var(--sage)]">{draftMessage}</p> : null}
        {timeSlots.some((slot) => slot.isSelected) ? (
          <p className="mt-2 text-xs leading-6 text-[var(--text-dim)]">
            Availability refreshes automatically based on current Melbourne time.
          </p>
        ) : null}
      </section>
    </div>
  );
}
