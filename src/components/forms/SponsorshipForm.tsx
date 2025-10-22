import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckboxField, FormField } from "./FormField";
import { FormWrapper } from "./FormWrapper";
import { sponsorshipSchema, type SponsorshipFormValues } from "@/lib/formSchemas";
import { submitFormToWebhook } from "@/lib/webhookHandler";

const sponsorshipLevels: SponsorshipFormValues["sponsorshipLevel"][] = [
  "$500 - Bronze Sponsor",
  "$1,000 - Silver Sponsor",
  "$2,500 - Gold Sponsor",
  "$5,000 - Platinum Sponsor",
  "$10,000+ - Diamond Sponsor",
  "Custom Amount",
];

const eventTypes: SponsorshipFormValues["eventType"][] = [
  "Educational Workshop",
  "STEM/Technology Program",
  "Arts & Culture Event",
  "Sports Activity",
  "Health & Wellness",
  "Restorative Justice Circle",
  "Business/Entrepreneurship",
  "Environmental Activity",
  "Community Meal",
  "Family Event",
  "General Program Support",
];

type SponsorshipFormProps = {
  onSuccess?: () => void;
};

const SponsorshipForm = ({ onSuccess }: SponsorshipFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SponsorshipFormValues>({
    resolver: zodResolver(sponsorshipSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      sponsorshipLevel: undefined,
      eventType: undefined,
      whySponsor: "",
      recognitionPreferences: "",
      logoUrl: "",
      websiteUrl: "",
      publicRecognition: false,
      additionalNotes: "",
    },
  });

  const handleSubmit = async (values: SponsorshipFormValues) => {
    try {
      setIsSubmitting(true);
      await submitFormToWebhook("sponsorship", values);
      toast.success("Thank you for your sponsorship interest! We'll be in touch soon.");
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
      title="Sponsor an Event"
      description="Support our mission by sponsoring programs that empower Oakland's Black youth ages 5-17."
      onSubmit={handleSubmit}
      submitLabel="Submit Sponsorship Inquiry"
      isSubmitting={isSubmitting}
      sourceForm="sponsorship"
    >
      <FormField control={form.control} name="businessName" label="Business or organization name" required>
        {(field) => <Input {...field} value={field.value as string} placeholder="Oakland Tech Solutions" />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="contactName" label="Primary contact" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="Jordan Smith" />}
        </FormField>
        <FormField control={form.control} name="contactEmail" label="Contact email" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="jordan@business.com" />}
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="contactPhone" label="Contact phone" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="(510) 555-1234" />}
        </FormField>
        <FormField control={form.control} name="sponsorshipLevel" label="Sponsorship level" required>
          {(field) => (
            <Select value={field.value as string} onValueChange={field.onChange}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select a sponsorship level" />
              </SelectTrigger>
              <SelectContent>
                {sponsorshipLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </FormField>
      </div>

      <FormField control={form.control} name="eventType" label="Type of event or program to sponsor" required>
        {(field) => (
          <Select value={field.value as string} onValueChange={field.onChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select an event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </FormField>

      <FormField
        control={form.control}
        name="whySponsor"
        label="Why do you want to sponsor our programs?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="We believe in empowering youth through education and community support..." />}
      </FormField>

      <FormField
        control={form.control}
        name="recognitionPreferences"
        label="How would you like to be recognized?"
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={3} placeholder="Social media mentions, website listing, event signage, etc." />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="logoUrl"
          label="Logo URL (optional)"
        >
          {(field) => <Input {...field} value={field.value as string} placeholder="https://drive.google.com/..." />}
        </FormField>
        <FormField
          control={form.control}
          name="websiteUrl"
          label="Website URL (optional)"
        >
          {(field) => <Input {...field} value={field.value as string} placeholder="https://www.yourbusiness.com" />}
        </FormField>
      </div>

      <FormField control={form.control} name="additionalNotes" label="Additional notes or questions">
        {(field) => <Textarea {...field} value={field.value as string} rows={3} placeholder="Any specific requests, questions, or details we should know..." />}
      </FormField>

      <CheckboxField
        control={form.control}
        name="publicRecognition"
        label="We consent to public recognition as a sponsor on FA Foundation materials."
        description="We'll celebrate our sponsors on our website, social media, and at events."
      />
    </FormWrapper>
  );
};

export default SponsorshipForm;
