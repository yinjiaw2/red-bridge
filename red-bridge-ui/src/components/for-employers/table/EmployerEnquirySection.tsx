"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormSelectInput from "./FormSelectInput";
import { Button } from "@/components/ui/button";

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
    <label className="block text-sm font-bold text-naviblue mb-2">
      {text}
      {required && <span className="text-brandred ml-1">*</span>}
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
        className={`w-full h-11 rounded-none border px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brandred/20 ${
          error ? "border-brandred" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-brandred">{error}</p>}
    </>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 pt-10 mb-8 border-t border-gray-200">
      <div className="w-8 h-8 rounded-none bg-brandred flex items-center justify-center text-white text-sm font-bold shrink-0">
        {number}
      </div>
      <h3 className="text-naviblue font-bold text-base uppercase tracking-wider">
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
    <section id="enquiry" className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-5"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        <p className="text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        {/* Form card */}
        <div className="bg-white rounded-none border border-gray-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brandred" />
          {isSubmitSuccessful ? (
            <div className="py-16 text-center">
              <p className="text-naviblue font-bold text-2xl mb-4">
                {t("successTitle")}
              </p>
              <p className="text-gray-600 text-base">{t("successMessage")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* ── Contact ── */}
              <h3 className="text-naviblue font-bold text-base uppercase tracking-wider mb-6">
                {t("contactTitle")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
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

              <div className="mt-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
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
              <div className="mt-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
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
              <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col items-center text-center">
                <Button
                  type="submit"
                  className="h-14 rounded-none bg-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md"
                >
                  {t("submitButton")}
                </Button>
                <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-xl">
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
