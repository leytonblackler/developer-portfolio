import { type FunctionComponent, type ReactNode } from "react";
import { ErrorPageButton, type ErrorPageButtonProps } from "./button";
import { cn } from "@/utils/styling/cn";

interface ErrorPageLayoutProps {
  children: ReactNode;
  buttons: ErrorPageButtonProps[];
}

export const ErrorPageLayout: FunctionComponent<ErrorPageLayoutProps> = ({
  children,
  buttons = [],
}) => {
  return (
    <div
      className={cn(
        "h-dvh",
        "mx-auto max-w-7xl",
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
          {buttons.map((props) => (
            <ErrorPageButton key={props.label} {...props} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
