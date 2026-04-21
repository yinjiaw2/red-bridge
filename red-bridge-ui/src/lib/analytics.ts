export const AnalyticsEvent = {
  FAQ_QUESTION_OPENED: "faq_question_opened",
} as const;

export function trackEvent(
  eventName: (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent],
  params?: Record<string, string | number | boolean>,
) {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, params);
  }
}
