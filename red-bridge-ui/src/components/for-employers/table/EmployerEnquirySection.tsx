"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormSelectInput from "./FormSelectInput";

interface FormValues {
  companyName: string;
  abn: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  isApprovedSponsor: string;
  hasPreviouslySponsored: string;
  isAccreditedSponsor: string;
  canProvideBusinessEvidence: string;
  canDemonstrateFinancialCapacity: string;
  localOverseasRatio: string;
  isOnCSOL: string;
  willingToDoLMT: string;
  canProvidePositionDescription: string;
  willCoverAllFees: string;
  awareOfSAFLevy: string;
  willCoverRelocation: string;
  willProvideFullTimeContract: string;
  preparedForCompliance: string;
  offersPRPathway: string;
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block text-[13px] font-semibold text-[#1a1209] mb-1.5">
      {text}
      {required && <span className="text-[#A20000] ml-0.5">*</span>}
    </label>
  );
}

function TextInput({
  field,
  type = "text",
  register,
  rules,
  error,
}: {
  field: keyof FormValues;
  type?: string;
  register: ReturnType<typeof useForm<FormValues>>["register"];
  rules: object;
  error?: string;
}) {
  return (
    <>
      <input
        type={type}
        {...register(field, rules)}
        className={`w-full h-10 rounded-lg border px-3 text-[14px] bg-white focus:outline-none focus:ring-2 focus:ring-[#A20000]/20 ${
          error ? "border-[#A20000]" : "border-[#d9cfc6]"
        }`}
      />
      {error && <p className="mt-1 text-[11px] text-[#A20000]">{error}</p>}
    </>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pt-8 mb-6 border-t border-[#e2d9d0]">
      <div className="w-6 h-6 rounded-full bg-[#A20000] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
        {number}
      </div>
      <h3 className="text-[#1a1209] font-bold text-[13px] uppercase tracking-[0.12em]">
        {title}
      </h3>
    </div>
  );
}

export default function EmployerEnquirySection() {
  const t = useTranslations("employerEnquiry");

  const yesNo = t.raw("optionsYesNo") as string[];
  const yesNoUnsure = t.raw("optionsYesNoUnsure") as string[];
  const optionsApprovedSponsor = t.raw("optionsIsApprovedSponsor") as string[];
  const optionsFees = t.raw("optionsWillCoverAllFees") as string[];
  const optionsRelocation = t.raw("optionsRelocation") as string[];
  const placeholder = t("selectPlaceholder");
  const requiredMsg = t("validationRequired");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Employer enquiry submitted:", data);
  };

  const err = (field: keyof FormValues) =>
    errors[field]
      ? (errors[field]?.message as string) || requiredMsg
      : undefined;

  return (
    <section className="bg-[#faf6f0] py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        <p className="text-[#6b5a4e] text-base leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-[#ede7df] p-8 md:p-10">
          {isSubmitSuccessful ? (
            <div className="py-16 text-center">
              <p className="text-[#1a1209] font-semibold text-lg mb-2">
                {t("successTitle")}
              </p>
              <p className="text-[#6b5a4e] text-sm">{t("successMessage")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* ── Contact ── */}
              <h3 className="text-[#1a1209] font-bold text-[13px] uppercase tracking-[0.12em] mb-6">
                {t("contactTitle")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <Label text={t("labelCompanyName")} required />
                  <TextInput
                    field="companyName"
                    register={register}
                    rules={{ required: requiredMsg }}
                    error={err("companyName")}
                  />
                </div>
                <div>
                  <Label text={t("labelAbn")} required />
                  <TextInput
                    field="abn"
                    register={register}
                    rules={{ required: requiredMsg }}
                    error={err("abn")}
                  />
                </div>
                <div>
                  <Label text={t("labelContactName")} required />
                  <TextInput
                    field="contactName"
                    register={register}
                    rules={{ required: requiredMsg }}
                    error={err("contactName")}
                  />
                </div>
                <div>
                  <Label text={t("labelContactTitle")} required />
                  <TextInput
                    field="contactTitle"
                    register={register}
                    rules={{ required: requiredMsg }}
                    error={err("contactTitle")}
                  />
                </div>
                <div>
                  <Label text={t("labelEmail")} required />
                  <TextInput
                    field="email"
                    type="email"
                    register={register}
                    rules={{
                      required: requiredMsg,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("validationEmail"),
                      },
                    }}
                    error={err("email")}
                  />
                </div>
                <div>
                  <Label text={t("labelPhone")} required />
                  <TextInput
                    field="phone"
                    register={register}
                    rules={{ required: requiredMsg }}
                    error={err("phone")}
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label text={t("labelAddress")} required />
                <TextInput
                  field="address"
                  register={register}
                  rules={{ required: requiredMsg }}
                  error={err("address")}
                />
              </div>

              {/* ── Section 1 ── */}
              <SectionHeading
                number={t("section1Number")}
                title={t("section1Title")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <Label text={t("labelIsApprovedSponsor")} required />
                  <FormSelectInput
                    name="isApprovedSponsor"
                    control={control}
                    options={optionsApprovedSponsor}
                    placeholder={placeholder}
                    error={err("isApprovedSponsor")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelHasPreviouslySponsored")} required />
                  <FormSelectInput
                    name="hasPreviouslySponsored"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("hasPreviouslySponsored")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelIsAccreditedSponsor")} required />
                  <FormSelectInput
                    name="isAccreditedSponsor"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("isAccreditedSponsor")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
              </div>

              {/* ── Section 2 ── */}
              <SectionHeading
                number={t("section2Number")}
                title={t("section2Title")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <Label text={t("labelCanProvideBusinessEvidence")} required />
                  <FormSelectInput
                    name="canProvideBusinessEvidence"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("canProvideBusinessEvidence")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label
                    text={t("labelCanDemonstrateFinancialCapacity")}
                    required
                  />
                  <FormSelectInput
                    name="canDemonstrateFinancialCapacity"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("canDemonstrateFinancialCapacity")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Label text={t("labelLocalOverseasRatio")} required />
                <TextInput
                  field="localOverseasRatio"
                  register={register}
                  rules={{ required: requiredMsg }}
                  error={err("localOverseasRatio")}
                />
              </div>

              {/* ── Section 3 ── */}
              <SectionHeading
                number={t("section3Number")}
                title={t("section3Title")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <Label text={t("labelIsOnCSOL")} required />
                  <FormSelectInput
                    name="isOnCSOL"
                    control={control}
                    options={yesNoUnsure}
                    placeholder={placeholder}
                    error={err("isOnCSOL")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelWillingToDoLMT")} required />
                  <FormSelectInput
                    name="willingToDoLMT"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("willingToDoLMT")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label
                    text={t("labelCanProvidePositionDescription")}
                    required
                  />
                  <FormSelectInput
                    name="canProvidePositionDescription"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("canProvidePositionDescription")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
              </div>

              {/* ── Section 4 ── */}
              <SectionHeading
                number={t("section4Number")}
                title={t("section4Title")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <Label text={t("labelWillCoverAllFees")} required />
                  <FormSelectInput
                    name="willCoverAllFees"
                    control={control}
                    options={optionsFees}
                    placeholder={placeholder}
                    error={err("willCoverAllFees")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelAwareOfSAFLevy")} required />
                  <FormSelectInput
                    name="awareOfSAFLevy"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("awareOfSAFLevy")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelWillCoverRelocation")} required />
                  <FormSelectInput
                    name="willCoverRelocation"
                    control={control}
                    options={optionsRelocation}
                    placeholder={placeholder}
                    error={err("willCoverRelocation")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
              </div>

              {/* ── Section 5 ── */}
              <SectionHeading
                number={t("section5Number")}
                title={t("section5Title")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <Label
                    text={t("labelWillProvideFullTimeContract")}
                    required
                  />
                  <FormSelectInput
                    name="willProvideFullTimeContract"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("willProvideFullTimeContract")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelPreparedForCompliance")} required />
                  <FormSelectInput
                    name="preparedForCompliance"
                    control={control}
                    options={yesNo}
                    placeholder={placeholder}
                    error={err("preparedForCompliance")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
                <div>
                  <Label text={t("labelOffersPRPathway")} required />
                  <FormSelectInput
                    name="offersPRPathway"
                    control={control}
                    options={yesNoUnsure}
                    placeholder={placeholder}
                    error={err("offersPRPathway")}
                    rules={{ required: requiredMsg }}
                  />
                </div>
              </div>

              {/* ── Submit ── */}
              <div className="mt-10 pt-8 border-t border-[#e2d9d0]">
                <button
                  type="submit"
                  className="h-12 rounded-lg bg-[#efb64f] px-8 text-[15px] font-semibold text-[#2a1f19] hover:bg-[#e0a43c] transition-colors"
                >
                  {t("submitButton")}
                </button>
                <p className="mt-4 text-[12px] text-[#9a8a80] leading-relaxed max-w-xl">
                  {t("disclaimer")}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
