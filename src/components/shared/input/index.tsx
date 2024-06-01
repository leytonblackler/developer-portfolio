import { type InputHTMLAttributes, forwardRef } from "react";
import * as Label from "@radix-ui/react-label";
import { cn } from "@/utils/styling/cn";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
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

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label = undefined, hidden = false, ...props }, ref) => (
    <div className={cn("relative", "flex w-full", hidden && "hidden")}>
      {label ? (
        <Label.Root
          htmlFor={name}
          className={cn(
            "pointer-events-none",
            "absolute",
            "left-10 top-10",
            "text-gray-700 dark:text-gray-200",
            "font-medium"
          )}
        >
          {label}
        </Label.Root>
      ) : null}
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full",
          "rounded-7xl",
          "p-10",
          "bg-gray-100 dark:bg-gray-900",
          "text-gray-700 dark:text-gray-200",
          "outline-none"
        )}
        {...props}
      />
    </div>
  )
);

Input.displayName = "Input";

export { Input };
