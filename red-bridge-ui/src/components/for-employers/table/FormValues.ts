import z from "zod";

export const fieldNames = [
  "companyName",
  "abn",
  "contactName",
  "contactTitle",
  "email",
  "phone",
  "address",
  "isApprovedSponsor",
  "hasPreviouslySponsored",
  "isAccreditedSponsor",
  "canProvideBusinessEvidence",
  "canDemonstrateFinancialCapacity",
  "localOverseasRatio",
  "isOnCSOL",
  "willingToDoLMT",
  "canProvidePositionDescription",
  "willCoverAllFees",
  "awareOfSAFLevy",
  "willCoverRelocation",
  "willProvideFullTimeContract",
  "preparedForCompliance",
  "offersPRPathway",
] as const;

export type FormValues = z.infer<
  ReturnType<typeof createEmployerEnquirySchema>
>;
export type FieldName = (typeof fieldNames)[number];

export const defaultValues = fieldNames.reduce(
  (values, fieldName) => ({
    ...values,
    [fieldName]: "",
  }),
  {} as FormValues,
);

export const createEmployerEnquirySchema = (
  requiredMsg: string,
  emailMsg: string,
) => {
  const requiredString = z.string().trim().min(1, requiredMsg);

  return z.object({
    companyName: requiredString,
    abn: requiredString,
    contactName: requiredString,
    contactTitle: requiredString,
    email: z.string().trim().min(1, requiredMsg).pipe(z.email(emailMsg)),
    phone: requiredString,
    address: requiredString,
    isApprovedSponsor: requiredString,
    hasPreviouslySponsored: requiredString,
    isAccreditedSponsor: requiredString,
    canProvideBusinessEvidence: requiredString,
    canDemonstrateFinancialCapacity: requiredString,
    localOverseasRatio: requiredString,
    isOnCSOL: requiredString,
    willingToDoLMT: requiredString,
    canProvidePositionDescription: requiredString,
    willCoverAllFees: requiredString,
    awareOfSAFLevy: requiredString,
    willCoverRelocation: requiredString,
    willProvideFullTimeContract: requiredString,
    preparedForCompliance: requiredString,
    offersPRPathway: requiredString,
  });
};
