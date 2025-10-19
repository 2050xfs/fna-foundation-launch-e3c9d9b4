export const LEADCONNECTOR_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/xiUC7S7xDd71mbS5tT0A/webhook-trigger/041ddaef-0209-4ea1-8b4e-b2549aa6404e";

export type SourceForm =
  | "event_feedback"
  | "event_suggestion"
  | "partnership"
  | "board_application"
  | "fa_application"
  | "fa_volunteer";

export type WebhookSubmission<TData extends Record<string, unknown>> = {
  source_form: SourceForm;
  submitted_at: string;
} & TData;

export const submitFormToWebhook = async <TData extends Record<string, unknown>>(
  sourceForm: SourceForm,
  data: TData,
) => {
  const payload: WebhookSubmission<TData> = {
    source_form: sourceForm,
    submitted_at: new Date().toISOString(),
    ...data,
  };

  const response = await fetch(LEADCONNECTOR_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorMessage = await response
      .text()
      .then((message) => message.trim())
      .catch(() => "");

    const detail = errorMessage ? `: ${errorMessage}` : "";

    throw new Error(
      `Webhook submission failed (${response.status} ${response.statusText})${detail}`,
    );
  }

  return response;
};
