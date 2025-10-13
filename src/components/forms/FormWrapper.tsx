import { type ReactNode } from "react";
import { type FieldValues, type UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { type SourceForm } from "@/lib/webhookHandler";

interface FormWrapperProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  title: string;
  description?: string;
  onSubmit: (values: TFieldValues) => Promise<void> | void;
  submitLabel?: string;
  isSubmitting?: boolean;
  sourceForm: SourceForm;
  className?: string;
  children: ReactNode;
}

export const FormWrapper = <TFieldValues extends FieldValues>({
  form,
  title,
  description,
  onSubmit,
  submitLabel,
  isSubmitting,
  sourceForm,
  className,
  children,
}: FormWrapperProps<TFieldValues>) => {
  return (
    <Card className={cn("bg-card border border-border shadow-elevated rounded-2xl", className)}>
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <input type="hidden" name="source_form" value={sourceForm} />
            <div className="grid gap-6">{children}</div>
            <p className="text-sm text-muted-foreground">
              By submitting this form, you agree to our privacy policy. We will only use your information to process your
              application or inquiry.
            </p>
            <Button type="submit" variant="cta" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : submitLabel ?? "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormWrapper;
