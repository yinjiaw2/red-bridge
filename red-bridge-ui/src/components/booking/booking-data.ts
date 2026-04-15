export type ConsultationStage = "1" | "2" | "3" | "4";

export type ConsultationTypeOption = {
  label: string;
  durationMinutes: 30 | 60;
  stage: ConsultationStage;
  description: string;
};

export const consultationTypes: readonly ConsultationTypeOption[] = [
  {
    label: "Free Initial Consultation (30 min)",
    durationMinutes: 30,
    stage: "1",
    description: "Best for first-time enquiries and honest pathway screening.",
  },
  {
    label: "Extra Discovery Call (30 min)",
    durationMinutes: 30,
    stage: "2",
    description: "Used when a follow-up discovery call is needed before strategy work.",
  },
  {
    label: "Strategy Session (1 hr)",
    durationMinutes: 60,
    stage: "3",
    description: "For deeper pathway review, points strategy, and evidence planning.",
  },
  {
    label: "Action Plan & Proposal (1 hr)",
    durationMinutes: 60,
    stage: "4",
    description: "For confirmed next steps, timelines, and proposal walkthroughs.",
  },
] as const;

export const contactMethods = ["Mobile", "Email", "WeChat", "WhatsApp"] as const;

export const languages = ["English", "Chinese"] as const;

export const sources = [
  "Instagram Search",
  "Instagram Story Ad",
  "Instagram Feed Ad",
  "Organic Instagram Post",
  "Facebook Ad",
  "TikTok",
  "RedNote / XiaoHongShu",
  "Web Search",
  "Word of Mouth",
  "Referral",
  "Other",
] as const;

export const pathwayOptions = [
  "Career Launch",
  "189 Skilled Independent",
  "190 State Nominated",
  "491 Regional",
  "482/186 Employer Sponsored",
  "Other",
  "Unsure - help me figure it out",
] as const;

export const englishTests = [
  "IELTS Academic",
  "IELTS General Training",
  "PTE Academic",
  "TOEFL iBT",
  "OET",
  "Cambridge C1 Advanced",
  "No recent test yet",
] as const;

export const educationLevels = [
  "High School",
  "Certificate I-IV",
  "Diploma",
  "Bachelor's",
  "Master's",
  "Doctorate",
] as const;

export const workExperienceBands = ["Less than 1 year", "1-3 years", "3+ years"] as const;

export const consultationPromises = [
  "A realistic pathway assessment based on your current profile",
  "Clear advice on whether sponsorship, points, or work experience is the right next step",
  "A summary of what documents or evidence you should prepare next",
] as const;

export const prepChecklist = [
  "Current visa details and expiry date",
  "Your latest resume or LinkedIn profile",
  "English test results if you already have them",
  "Any previous visa refusals, cancellations, or skills assessments",
] as const;
