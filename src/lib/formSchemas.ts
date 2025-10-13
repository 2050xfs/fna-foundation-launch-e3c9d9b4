import { z } from "zod";

const phoneRegex = /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/;

const optionalUrl = z
  .string()
  .trim()
  .url({ message: "Please enter a valid URL." })
  .max(300, "URLs must be 300 characters or less.")
  .optional()
  .or(z.literal(""));

const optionalEmail = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address." })
  .max(160, "Emails must be 160 characters or less.")
  .optional()
  .or(z.literal(""));

export const eventFeedbackSchema = z.object({
  eventName: z.string().trim().min(1, "Please enter the event name.").max(100, "Event name is too long."),
  eventDate: z.string().trim().min(1, "Please share when the event took place.").max(60, "Date is too long."),
  rating: z.enum(["1", "2", "3", "4", "5"], { message: "Please select a rating." }),
  enjoyed: z
    .string()
    .trim()
    .min(1, "Let us know what you enjoyed.")
    .max(1000, "Please keep your response under 1000 characters."),
  improvements: z
    .string()
    .trim()
    .max(1000, "Please keep your response under 1000 characters.")
    .optional()
    .or(z.literal("")),
  missionAlignment: z
    .string()
    .trim()
    .min(1, "Tell us how this event aligned with our mission.")
    .max(1000, "Please keep your response under 1000 characters."),
  wouldAttendAgain: z.enum(["yes", "no"], { message: "Please let us know if you would attend again." }),
  testimonial: z
    .string()
    .trim()
    .max(600, "Testimonials must be 600 characters or less.")
    .optional()
    .or(z.literal("")),
  testimonialConsent: z.boolean().default(false),
  email: optionalEmail,
});

export type EventFeedbackFormValues = z.infer<typeof eventFeedbackSchema>;

export const eventSuggestionSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120, "Name is too long."),
  email: optionalEmail,
  eventTitle: z.string().trim().min(1, "Please share a title for your event idea.").max(120, "Title is too long."),
  eventType: z.enum(
    ["Wellness", "Education", "Economic Opportunity", "Community Meal", "Fundraiser", "Other"],
    { message: "Please select an event type." },
  ),
  purpose: z
    .string()
    .trim()
    .min(1, "Please describe the purpose or beneficiaries.")
    .max(1000, "Please keep your response under 1000 characters."),
  proposedDate: z
    .string()
    .trim()
    .max(40, "Date is too long.")
    .optional()
    .or(z.literal("")),
  location: z
    .string()
    .trim()
    .min(1, "Let us know where this event could take place.")
    .max(200, "Location is too long."),
  resourcesNeeded: z
    .string()
    .trim()
    .max(1000, "Please keep your response under 1000 characters.")
    .optional()
    .or(z.literal("")),
  missionSupport: z
    .string()
    .trim()
    .min(1, "Tell us how this idea supports our mission.")
    .max(1000, "Please keep your response under 1000 characters."),
  additionalNotes: z
    .string()
    .trim()
    .max(1000, "Please keep your response under 1000 characters.")
    .optional()
    .or(z.literal("")),
});

export type EventSuggestionFormValues = z.infer<typeof eventSuggestionSchema>;

export const partnershipSchema = z.object({
  organizationName: z
    .string()
    .trim()
    .min(1, "Please enter your organization name.")
    .max(150, "Organization name is too long."),
  contactName: z.string().trim().min(1, "Please enter a contact name.").max(120, "Contact name is too long."),
  contactEmail: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(160, "Email is too long."),
  contactPhone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number.")
    .max(40, "Phone number is too long."),
  partnershipType: z.enum(
    ["Event Sponsor", "Program Partner", "In-Kind Donor", "Media Partner", "Educational Institution"],
    { message: "Please select a partnership type." },
  ),
  missionAlignment: z
    .string()
    .trim()
    .min(1, "Tell us how this partnership aligns with our mission.")
    .max(1000, "Please keep your response under 1000 characters."),
  resourcesExpertise: z
    .string()
    .trim()
    .min(1, "Share what resources or expertise you can offer.")
    .max(1000, "Please keep your response under 1000 characters."),
  logoUrl: optionalUrl,
  proposalUrl: optionalUrl,
  featureConsent: z.boolean().default(false),
  additionalNotes: z
    .string()
    .trim()
    .max(1000, "Please keep your response under 1000 characters.")
    .optional()
    .or(z.literal("")),
});

export type PartnershipFormValues = z.infer<typeof partnershipSchema>;

export const volunteerApplicationSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name.").max(80, "First name is too long."),
  lastName: z.string().trim().min(1, "Please enter your last name.").max(80, "Last name is too long."),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(160, "Email is too long."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number.")
    .max(40, "Phone number is too long."),
  cityState: z
    .string()
    .trim()
    .min(1, "Please share your city and state.")
    .max(120, "Location is too long."),
  inspiration: z
    .string()
    .trim()
    .min(1, "Tell us what inspires you to volunteer.")
    .max(1000, "Please keep your response under 1000 characters."),
  passionArea: z.enum(
    [
      "Restorative Justice & Healing",
      "Financial Literacy & Economic Opportunity",
      "Health & Wellness",
      "Event Planning",
      "Youth Mentorship",
      "Admin Support",
    ],
    { message: "Please select the area you're most passionate about." },
  ),
  skills: z
    .string()
    .trim()
    .min(1, "Share the skills or experience you'd bring.")
    .max(1000, "Please keep your response under 1000 characters."),
  hoursPerWeek: z
    .string()
    .trim()
    .min(1, "Please share the hours you can commit.")
    .max(40, "Please keep this under 40 characters."),
  preferredContact: z.enum(["Email", "Phone", "Text"], { message: "Please select a contact method." }),
  emergencyContactName: z
    .string()
    .trim()
    .min(1, "Please provide an emergency contact name.")
    .max(120, "Name is too long."),
  emergencyContactRelationship: z
    .string()
    .trim()
    .min(1, "Please share your emergency contact's relationship to you.")
    .max(120, "Relationship is too long."),
  emergencyContactPhone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number.")
    .max(40, "Phone number is too long."),
  mediaConsent: z.boolean().default(false),
  additionalNotes: z
    .string()
    .trim()
    .max(1000, "Please keep your response under 1000 characters.")
    .optional()
    .or(z.literal("")),
});

export type VolunteerApplicationFormValues = z.infer<typeof volunteerApplicationSchema>;
