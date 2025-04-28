import { type FunctionComponent, type ReactNode } from "react";
import { cn } from "@/utils/styling/cn";
import { Button, type ButtonProps } from "@/components/shared/button";

interface ErrorPageLayoutProps {
  children: ReactNode;
  buttons: ButtonProps[];
}

export const ErrorPageLayout: FunctionComponent<ErrorPageLayoutProps> = ({
  children,
  buttons = [],
}) => {
  return (
    <div
      className={cn(
        "h-dvh",
        "mx-auto max-w-6xl",
        "mt-4",
        "px-8 sm:px-10",
        "flex flex-col",
        "gap-y-12",
        "items-center justify-center",
        "mb-14"
      )}
    >
      {children}
      {buttons.length > 0 ? (
        <div
          className={cn(
            "flex flex-row flex-wrap",
            "justify-center-items center",
            "gap-x-6 gap-y-4"
          )}
        >
          {buttons.map((buttonProps) => (
            <Button
              key={buttonProps.label}
              cardStyle="primary"
              {...buttonProps}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
