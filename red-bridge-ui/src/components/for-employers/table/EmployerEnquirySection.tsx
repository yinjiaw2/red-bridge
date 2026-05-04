"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  FormValues,
  createEmployerEnquirySchema,
  defaultValues,
} from "./FormValues";
import { FormTextInput } from "./FormTextInput";
import { FormSelectInput } from "./FormSelect";
import { SectionHeading } from "./SectionHeading";

export default function EmployerEnquirySection() {
  const t = useTranslations("employerEnquiry");
  const sectionRef = useRef<HTMLElement>(null);

  const yesNo = t.raw("optionsYesNo") as string[];
  const yesNoUnsure = t.raw("optionsYesNoUnsure") as string[];
  const optionsApprovedSponsor = t.raw("optionsIsApprovedSponsor") as string[];
  const optionsFees = t.raw("optionsWillCoverAllFees") as string[];
  const optionsRelocation = t.raw("optionsRelocation") as string[];
  const placeholder = t("selectPlaceholder");
  const requiredMsg = t("validationRequired");

  const form = useForm<FormValues>({
    resolver: zodResolver(
      createEmployerEnquirySchema(requiredMsg, t("validationEmail")),
    ),
    defaultValues,
  });

  useEffect(() => {
    if (!form.formState.isSubmitSuccessful) return;

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    });
  }, [form.formState.isSubmitSuccessful]);

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ ...data, type: "EmployerEnquiry" }),
    });
    if (!res.ok) {
      throw new Error(`Submission failed: ${res.status}`);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="enquiry"
      className="scroll-mt-20 bg-gray-50 py-24 px-[5%] border-b border-gray-200"
    >
      <div className="max-w-300 mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-lg font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-5">
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        <p className="text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        <div className="bg-white rounded-none border border-gray-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brandred" />
          {form.formState.isSubmitSuccessful ? (
            <div className="py-16 text-center">
              <p className="text-naviblue font-bold text-2xl mb-4">
                {t("successTitle")}
              </p>
              <p className="text-gray-600 text-base">{t("successMessage")}</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <h3 className="text-naviblue font-bold text-base uppercase tracking-wider mb-6">
                  {t("contactTitle")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <FormTextInput
                    form={form}
                    name="companyName"
                    label={t("labelCompanyName")}
                  />
                  <FormTextInput form={form} name="abn" label={t("labelAbn")} />
                  <FormTextInput
                    form={form}
                    name="contactName"
                    label={t("labelContactName")}
                  />
                  <FormTextInput
                    form={form}
                    name="contactTitle"
                    label={t("labelContactTitle")}
                  />
                  <FormTextInput
                    form={form}
                    name="email"
                    type="email"
                    label={t("labelEmail")}
                  />
                  <FormTextInput
                    form={form}
                    name="phone"
                    label={t("labelPhone")}
                  />
                </div>

                <div className="mt-6">
                  <FormTextInput
                    form={form}
                    name="address"
                    label={t("labelAddress")}
                  />
                </div>

                <SectionHeading
                  number={t("section1Number")}
                  title={t("section1Title")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <FormSelectInput
                    form={form}
                    name="isApprovedSponsor"
                    label={t("labelIsApprovedSponsor")}
                    options={optionsApprovedSponsor}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="hasPreviouslySponsored"
                    label={t("labelHasPreviouslySponsored")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="isAccreditedSponsor"
                    label={t("labelIsAccreditedSponsor")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                </div>

                <SectionHeading
                  number={t("section2Number")}
                  title={t("section2Title")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <FormSelectInput
                    form={form}
                    name="canProvideBusinessEvidence"
                    label={t("labelCanProvideBusinessEvidence")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="canDemonstrateFinancialCapacity"
                    label={t("labelCanDemonstrateFinancialCapacity")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                </div>
                <div className="mt-6">
                  <FormTextInput
                    form={form}
                    name="localOverseasRatio"
                    label={t("labelLocalOverseasRatio")}
                  />
                </div>

                <SectionHeading
                  number={t("section3Number")}
                  title={t("section3Title")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <FormSelectInput
                    form={form}
                    name="isOnCSOL"
                    label={t("labelIsOnCSOL")}
                    options={yesNoUnsure}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="willingToDoLMT"
                    label={t("labelWillingToDoLMT")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="canProvidePositionDescription"
                    label={t("labelCanProvidePositionDescription")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                </div>

                <SectionHeading
                  number={t("section4Number")}
                  title={t("section4Title")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <FormSelectInput
                    form={form}
                    name="willCoverAllFees"
                    label={t("labelWillCoverAllFees")}
                    options={optionsFees}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="awareOfSAFLevy"
                    label={t("labelAwareOfSAFLevy")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="willCoverRelocation"
                    label={t("labelWillCoverRelocation")}
                    options={optionsRelocation}
                    placeholder={placeholder}
                  />
                </div>

                <SectionHeading
                  number={t("section5Number")}
                  title={t("section5Title")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  <FormSelectInput
                    form={form}
                    name="willProvideFullTimeContract"
                    label={t("labelWillProvideFullTimeContract")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="preparedForCompliance"
                    label={t("labelPreparedForCompliance")}
                    options={yesNo}
                    placeholder={placeholder}
                  />
                  <FormSelectInput
                    form={form}
                    name="offersPRPathway"
                    label={t("labelOffersPRPathway")}
                    options={yesNoUnsure}
                    placeholder={placeholder}
                  />
                </div>

                <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col items-center text-center">
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="h-14 rounded-full bg-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {form.formState.isSubmitting
                      ? t("submittingButton")
                      : t("submitButton")}
                  </Button>
                  <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-xl">
                    {t("disclaimer")}
                  </p>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
