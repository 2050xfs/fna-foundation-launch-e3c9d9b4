import { type ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField as RHFFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
} from "react-hook-form";

const REQUIRED_INDICATOR = <span className="ml-1 text-destructive">*</span>;

type BaseFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  description?: string;
  required?: boolean;
};

type FormFieldProps<TFieldValues extends FieldValues> = BaseFieldProps<TFieldValues> & {
  children: (field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>) => ReactNode;
  className?: string;
};

export const FormField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  children,
  className,
}: FormFieldProps<TFieldValues>) => (
  <RHFFormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={cn("space-y-2", className)}>
        <FormLabel className="text-sm font-medium text-foreground">
          {label}
          {required ? REQUIRED_INDICATOR : null}
        </FormLabel>
        <FormControl>{children(field)}</FormControl>
        {description ? <FormDescription className="text-sm text-muted-foreground">{description}</FormDescription> : null}
        <FormMessage className="text-sm text-destructive" />
      </FormItem>
    )}
  />
);

type CheckboxFieldProps<TFieldValues extends FieldValues> = BaseFieldProps<TFieldValues> & {
  helperText?: string;
};

export const CheckboxField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  helperText,
}: CheckboxFieldProps<TFieldValues>) => (
  <RHFFormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="space-y-2">
        <div className="flex items-start space-x-3 rounded-xl border border-border bg-muted/40 p-4">
          <FormControl>
            <Checkbox
              checked={Boolean(field.value)}
              onCheckedChange={(checked) => field.onChange(!!checked)}
              className="border-primary text-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
          </FormControl>
          <div className="space-y-1">
            <FormLabel className="text-sm font-medium text-foreground">
              {label}
              {required ? REQUIRED_INDICATOR : null}
            </FormLabel>
            {description ? <FormDescription className="text-sm text-muted-foreground">{description}</FormDescription> : null}
            {helperText ? <p className="text-xs text-muted-foreground">{helperText}</p> : null}
          </div>
        </div>
        <FormMessage className="text-sm text-destructive" />
      </FormItem>
    )}
  />
);
