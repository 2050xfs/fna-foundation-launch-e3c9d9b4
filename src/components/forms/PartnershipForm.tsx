import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckboxField, FormField } from "./FormField";
import { FormWrapper } from "./FormWrapper";
import { partnershipSchema, type PartnershipFormValues } from "@/lib/formSchemas";
import { submitFormToWebhook } from "@/lib/webhookHandler";

const partnershipTypes: PartnershipFormValues["partnershipType"][] = [
  "Event Sponsor",
  "Program Partner",
  "In-Kind Donor",
  "Media Partner",
  "Educational Institution",
];

type PartnershipFormProps = {
  onSuccess?: () => void;
};

const PartnershipForm = ({ onSuccess }: PartnershipFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      organizationName: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      missionAlignment: "",
      resourcesExpertise: "",
      logoUrl: "",
      proposalUrl: "",
      featureConsent: false,
      additionalNotes: "",
    },
  });

  const handleSubmit = async (values: PartnershipFormValues) => {
    try {
      setIsSubmitting(true);
      await submitFormToWebhook("partnership", values);
      toast.success("Thank you! Our partnerships team will be in touch shortly.");
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again or email us at info@thefalegacy.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper
      form={form}
      title="Become a Partner"
      description="Collaborate with the FA Foundation to expand healing, education, and economic opportunity across Oakland."
      onSubmit={handleSubmit}
      submitLabel="Submit Partnership Inquiry"
      isSubmitting={isSubmitting}
      sourceForm="partnership"
    >
      <FormField control={form.control} name="organizationName" label="Organization name" required>
        {(field) => <Input {...field} value={field.value as string} placeholder="Community Impact Collective" />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="contactName" label="Primary contact" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="Avery Johnson" />}
        </FormField>
        <FormField control={form.control} name="contactEmail" label="Contact email" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="avery@organization.org" />}
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="contactPhone" label="Contact phone" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="(510) 555-1234" />}
        </FormField>
        <FormField control={form.control} name="partnershipType" label="Type of partnership" required>
          {(field) => (
            <Select value={field.value as string} onValueChange={field.onChange}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select a partnership type" />
              </SelectTrigger>
              <SelectContent>
                {partnershipTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </FormField>
      </div>

      <FormField
        control={form.control}
        name="missionAlignment"
        label="How does this partnership align with our mission?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="Our organization advances restorative justice by..." />}
      </FormField>

      <FormField
        control={form.control}
        name="resourcesExpertise"
        label="What resources or expertise can you share?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="We can provide facilitators, funding, and program space..." />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="logoUrl"
          label="Logo or brand assets URL (optional)"
        >
          {(field) => <Input {...field} value={field.value as string} placeholder="https://drive.google.com/..." />}
        </FormField>
        <FormField
          control={form.control}
          name="proposalUrl"
          label="Proposal or deck URL (optional)"
        >
          {(field) => <Input {...field} value={field.value as string} placeholder="https://docs.google.com/..." />}
        </FormField>
      </div>

      <FormField control={form.control} name="additionalNotes" label="Anything else we should know?">
        {(field) => <Textarea {...field} value={field.value as string} rows={3} placeholder="Share campaign timelines, sponsorship tiers, or other ideas." />}
      </FormField>

      <CheckboxField
        control={form.control}
        name="featureConsent"
        label="You may feature our organization in FA Foundation campaigns and storytelling."
        description="We'll celebrate our partners publicly and confirm final copy with you before sharing."
      />
    </FormWrapper>
  );
};

export default PartnershipForm;
