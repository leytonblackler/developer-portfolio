import { type TextareaHTMLAttributes, forwardRef } from "react";
import * as Label from "@radix-ui/react-label";
import { cn } from "@/utils/styling/cn";

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  /**
   * Prevent ID from being set manually - use the name prop as the ID.
   */
  | "id"
  | "name"
  /**
   * Prevent overriding styles.
   */
  | "className"
> & {
  /**
   * Force the name prop to be required.
   */
  name: string;
  /**
   * The label for the field.
   */
  label?: string;
  /**
   * Whether the field should be invisible.
   */
  hidden?: boolean;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label = undefined, hidden = false, ...props }, ref) => (
    <div className={cn("relative", "flex w-full", hidden && "hidden")}>
      {label ? (
        <Label.Root
          htmlFor={name}
          className={cn(
            "pointer-events-none",
            "absolute",
            "left-10 top-10",
            "card-text-primary",
            "font-medium"
          )}
        >
          {label}
        </Label.Root>
      ) : null}
      <textarea
        ref={ref}
        id={name}
        className={cn(
          "w-full",
          "min-h-[200px]",
          "rounded-5xl",
          "p-10",
          "card-bg-primary",
          "card-border-primary",
          "card-text-primary",
          "outline-none",
          "resize-none"
        )}
        {...props}
      />
    </div>
  )
);

TextArea.displayName = "TextArea";

export { TextArea };
