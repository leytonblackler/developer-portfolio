import { type FunctionComponent, type ReactNode } from "react";
import { ErrorPageButton, type ErrorPageButtonProps } from "./button";
import { cn } from "@/utils/styling/cn";

interface ErrorPageLayoutProps {
  children: ReactNode;
  button: ErrorPageButtonProps;
}

export const ErrorPageLayout: FunctionComponent<ErrorPageLayoutProps> = ({
  children,
  button,
}) => {
  return (
    <div
      className={cn(
        "flex-1",
        "mx-auto max-w-7xl",
        "px-8 sm:px-10",
        "flex flex-col",
        "gap-y-12",
        "items-center justify-center",
        "mb-14"
      )}
    >
      {children}
      <ErrorPageButton {...button} />
    </div>
  );
};
