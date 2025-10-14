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
  type EventFeedbackFormValues,
  eventFeedbackSchema,
} from "@/lib/formSchemas";
import { submitFormToWebhook } from "@/lib/webhookHandler";
import { cn } from "@/lib/utils";

const ratingLabels: Record<EventFeedbackFormValues["rating"], string> = {
  "1": "1 - Needs improvement",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5 - Outstanding",
};

const EventFeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EventFeedbackFormValues>({
    resolver: zodResolver(eventFeedbackSchema),
    defaultValues: {
      eventName: "",
      eventDate: "",
      enjoyed: "",
      improvements: "",
      missionAlignment: "",
      testimonial: "",
      testimonialConsent: false,
      email: "",
    },
  });

  const handleSubmit = async (values: EventFeedbackFormValues) => {
    try {
      setIsSubmitting(true);
      await submitFormToWebhook("event_feedback", values);
      toast.success("Thank you! Your feedback has been received.");
      form.reset();
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
      title="Share Your Feedback"
      description="Tell us about your experience so we can keep designing meaningful events for Black youth and families."
      onSubmit={handleSubmit}
      submitLabel="Submit Feedback"
      isSubmitting={isSubmitting}
      sourceForm="event_feedback"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="eventName" label="Event name" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="Holiday Family Event" />}
        </FormField>
        <FormField
          control={form.control}
          name="eventDate"
          label="When did this event take place?"
          required
        >
          {(field) => <Input {...field} value={field.value as string} placeholder="December 15, 2025" />}
        </FormField>
      </div>

      <FormField control={form.control} name="rating" label="How would you rate the event?" required>
        {(field) => (
          <RadioGroup
            value={field.value as string}
            onValueChange={field.onChange}
            className="grid gap-3 md:grid-cols-5"
          >
            {(Object.keys(ratingLabels) as Array<EventFeedbackFormValues["rating"]>).map((value) => {
              const isSelected = field.value === value;
              return (
                <Label
                  key={value}
                  htmlFor={`event-rating-${value}`}
                  className={cn(
                    "flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-muted/40 p-4 text-center transition-colors",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border hover:border-primary focus-within:border-primary",
                  )}
                >
                  <RadioGroupItem id={`event-rating-${value}`} value={value} className="sr-only" />
                  <span className="text-lg font-semibold text-foreground">{value}</span>
                  <span className="text-xs text-muted-foreground">{ratingLabels[value]}</span>
                </Label>
              );
            })}
          </RadioGroup>
        )}
      </FormField>

      <FormField
        control={form.control}
        name="enjoyed"
        label="What did you enjoy most about this event?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="The restorative justice circle was powerful because..." />}
      </FormField>

      <FormField control={form.control} name="improvements" label="How can we improve future events?">
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="We'd love to see..." />}
      </FormField>

      <FormField
        control={form.control}
        name="missionAlignment"
        label="How did this event align with the FA Foundation mission?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="This event supported healing and economic opportunity by..." />}
      </FormField>

      <FormField
        control={form.control}
        name="wouldAttendAgain"
        label="Would you attend another FA Foundation event?"
        required
      >
        {(field) => (
          <RadioGroup
            value={field.value as string}
            onValueChange={field.onChange}
            className="grid gap-4 md:grid-cols-2"
          >
            {[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }].map((option) => {
              const isSelected = field.value === option.value;
              return (
                <Label
                  key={option.value}
                  htmlFor={`attend-again-${option.value}`}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-xl border bg-muted/40 p-4 transition-colors",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border hover:border-primary focus-within:border-primary",
                  )}
                >
                  <span className="text-base font-medium text-foreground">{option.label}</span>
                  <RadioGroupItem
                    id={`attend-again-${option.value}`}
                    value={option.value}
                    className="h-4 w-4 border-primary text-primary data-[state=checked]:bg-primary"
                  />
                </Label>
              );
            })}
          </RadioGroup>
        )}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="testimonial" label="Share a testimonial (optional)">
          {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="FA Foundation created space for..." />}
        </FormField>
        <FormField control={form.control} name="email" label="Your email (optional)">
          {(field) => <Input {...field} value={field.value as string} placeholder="you@example.com" />}
        </FormField>
      </div>

      <CheckboxField
        control={form.control}
        name="testimonialConsent"
        label="I give FA Foundation permission to feature my testimonial in future storytelling."
        description="You can withdraw your consent at any time by contacting us."
      />
    </FormWrapper>
  );
};

export default EventFeedbackForm;
