import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CheckboxField, FormField } from "./FormField";
import { FormWrapper } from "./FormWrapper";
import {
  type VolunteerApplicationFormValues,
  volunteerApplicationSchema,
} from "@/lib/formSchemas";
import { submitFormToWebhook } from "@/lib/webhookHandler";
import { cn } from "@/lib/utils";

const passionAreas: VolunteerApplicationFormValues["passionArea"][] = [
  "Restorative Justice & Healing",
  "Financial Literacy & Economic Opportunity",
  "Health & Wellness",
  "Event Planning",
  "Youth Mentorship",
  "Admin Support",
];

const contactMethods: VolunteerApplicationFormValues["preferredContact"][] = [
  "Email",
  "Phone",
  "Text",
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

type VolunteerApplicationFormProps = {
  onSuccess?: () => void;
};

const VolunteerApplicationForm = ({ onSuccess }: VolunteerApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<VolunteerApplicationFormValues>({
    resolver: zodResolver(volunteerApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cityState: "",
      inspiration: "",
      skills: "",
      hoursPerWeek: "",
      emergencyContactName: "",
      emergencyContactRelationship: "",
      emergencyContactPhone: "",
      mediaConsent: false,
      additionalNotes: "",
    },
  });

  const handleSubmit = async (values: VolunteerApplicationFormValues) => {
    try {
      setIsSubmitting(true);
      await submitFormToWebhook("fa_volunteer", values);
      toast.success("Thank you for raising your hand to serve! We'll connect with you soon.");
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper
      form={form}
      title="Volunteer & Internship Application"
      description="Share how you want to serve alongside the FA Foundation. We'll review your submission and follow up with next steps."
      onSubmit={handleSubmit}
      submitLabel="Submit Application"
      isSubmitting={isSubmitting}
      sourceForm="fa_volunteer"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="firstName" label="First name" required>
          {(field) => <Input {...field} placeholder="Taylor" />}
        </FormField>
        <FormField control={form.control} name="lastName" label="Last name" required>
          {(field) => <Input {...field} placeholder="Morgan" />}
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="email" label="Email" required>
          {(field) => <Input {...field} placeholder="taylor@email.com" />}
        </FormField>
        <FormField control={form.control} name="phone" label="Phone" required>
          {(field) => <Input {...field} placeholder="(510) 555-6789" />}
        </FormField>
      </div>

      <FormField control={form.control} name="cityState" label="City & State" required>
        {(field) => <Input {...field} placeholder="Oakland, CA" />}
      </FormField>

      <FormField
        control={form.control}
        name="inspiration"
        label="What inspires you to volunteer with FA Foundation?"
        required
      >
        {(field) => <Textarea {...field} rows={4} placeholder="I'm passionate about restorative justice because..." />}
      </FormField>

      <FormField control={form.control} name="passionArea" label="Where would you like to plug in?" required>
        {(field) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="grid gap-3 md:grid-cols-2"
          >
            {passionAreas.map((area) => {
              const optionId = `passion-${slugify(area)}`;
              const isSelected = field.value === area;
              return (
                <Label
                  key={area}
                  htmlFor={optionId}
                  className={cn(
                    "flex cursor-pointer flex-col rounded-xl border bg-muted/40 p-4 text-left transition-colors",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border hover:border-primary focus-within:border-primary",
                  )}
                >
                  <RadioGroupItem
                    id={optionId}
                    value={area}
                    className="sr-only"
                  />
                <span className="text-base font-medium text-foreground">{area}</span>
              </Label>
              );
            })}
          </RadioGroup>
        )}
      </FormField>

      <FormField
        control={form.control}
        name="skills"
        label="What skills or experience would you bring?"
        required
      >
        {(field) => <Textarea {...field} rows={4} placeholder="Event planning, facilitation, fundraising, etc." />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="hoursPerWeek"
          label="Hours per week you can commit"
          required
        >
          {(field) => <Input {...field} placeholder="8 hours" />}
        </FormField>
        <FormField control={form.control} name="preferredContact" label="Preferred way to connect" required>
          {(field) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex flex-wrap gap-3"
            >
              {contactMethods.map((method) => {
                const optionId = `contact-${slugify(method)}`;
                const isSelected = field.value === method;
                return (
                  <Label
                    key={method}
                    htmlFor={optionId}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl border bg-muted/40 px-4 py-3 transition-colors",
                      isSelected
                        ? "border-primary bg-primary/10 shadow-soft"
                        : "border-border hover:border-primary focus-within:border-primary",
                    )}
                  >
                    <span className="text-base font-medium text-foreground">{method}</span>
                    <RadioGroupItem
                      id={optionId}
                    value={method}
                    className="h-4 w-4 border-primary text-primary data-[state=checked]:bg-primary"
                  />
                </Label>
                );
              })}
            </RadioGroup>
          )}
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          control={form.control}
          name="emergencyContactName"
          label="Emergency contact"
          required
        >
          {(field) => <Input {...field} placeholder="Casey Morgan" />}
        </FormField>
        <FormField
          control={form.control}
          name="emergencyContactRelationship"
          label="Relationship"
          required
        >
          {(field) => <Input {...field} placeholder="Sibling" />}
        </FormField>
        <FormField
          control={form.control}
          name="emergencyContactPhone"
          label="Phone"
          required
        >
          {(field) => <Input {...field} placeholder="(510) 555-4321" />}
        </FormField>
      </div>

      <FormField control={form.control} name="additionalNotes" label="Anything else you'd like us to know?">
        {(field) => <Textarea {...field} rows={3} placeholder="Scheduling notes, language preferences, or accessibility needs." />}
      </FormField>

      <CheckboxField
        control={form.control}
        name="mediaConsent"
        label="I consent to be photographed or recorded during FA Foundation activities."
        description="We'll always let you know before capturing media and you can opt out at any time."
      />
    </FormWrapper>
  );
};

export default VolunteerApplicationForm;
