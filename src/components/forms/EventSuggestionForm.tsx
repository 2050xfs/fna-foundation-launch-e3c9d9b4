import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "./FormField";
import { FormWrapper } from "./FormWrapper";
import {
  type EventSuggestionFormValues,
  eventSuggestionSchema,
} from "@/lib/formSchemas";
import { submitFormToWebhook } from "@/lib/webhookHandler";

const eventTypes: EventSuggestionFormValues["eventType"][] = [
  "Wellness",
  "Education",
  "Economic Opportunity",
  "Community Meal",
  "Fundraiser",
  "Other",
];

type EventSuggestionFormProps = {
  onSuccess?: () => void;
};

const EventSuggestionForm = ({ onSuccess }: EventSuggestionFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EventSuggestionFormValues>({
    resolver: zodResolver(eventSuggestionSchema),
    defaultValues: {
      name: "",
      email: "",
      eventTitle: "",
      purpose: "",
      proposedDate: "",
      location: "",
      resourcesNeeded: "",
      missionSupport: "",
      additionalNotes: "",
    },
  });

  const handleSubmit = async (values: EventSuggestionFormValues) => {
    try {
      setIsSubmitting(true);
      await submitFormToWebhook("event_suggestion", values);
      toast.success("Thank you for sharing your idea! Our team will review it soon.");
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
      title="Suggest an Event"
      description="Share your ideas for future gatherings that uplift healing, education, and economic opportunity in Oakland."
      onSubmit={handleSubmit}
      submitLabel="Submit Suggestion"
      isSubmitting={isSubmitting}
      sourceForm="event_suggestion"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField control={form.control} name="name" label="Your name" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="Jordan Williams" />}
        </FormField>
        <FormField control={form.control} name="email" label="Email (optional)">
          {(field) => <Input {...field} value={field.value as string} placeholder="you@example.com" />}
        </FormField>
      </div>

      <FormField control={form.control} name="eventTitle" label="Event title" required>
        {(field) => <Input {...field} value={field.value as string} placeholder="Community Healing Circle" />}
      </FormField>

      <FormField control={form.control} name="eventType" label="Event type" required>
        {(field) => (
          <Select value={field.value as string} onValueChange={field.onChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Choose an event type" />
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
        name="purpose"
        label="Who would this event support and what impact would it have?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="This event would support Black youth ages 13+ by..." />}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="proposedDate"
          label="Proposed date"
          description="If you have a specific date in mind, include it here."
        >
          {(field) => <Input {...field} value={field.value as string} type="date" />}
        </FormField>
        <FormField control={form.control} name="location" label="Proposed location" required>
          {(field) => <Input {...field} value={field.value as string} placeholder="West Oakland Youth Center" />}
        </FormField>
      </div>

      <FormField
        control={form.control}
        name="resourcesNeeded"
        label="What resources or support would be needed?"
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="Volunteers, healing practitioners, meals, funding for..." />}
      </FormField>

      <FormField
        control={form.control}
        name="missionSupport"
        label="How does this idea support FA Foundation's mission?"
        required
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={4} placeholder="This aligns with restorative justice because..." />}
      </FormField>

      <FormField
        control={form.control}
        name="additionalNotes"
        label="Anything else we should know? (optional)"
      >
        {(field) => <Textarea {...field} value={field.value as string} rows={3} placeholder="Share links, collaborators, or timing details." />}
      </FormField>
    </FormWrapper>
  );
};

export default EventSuggestionForm;
