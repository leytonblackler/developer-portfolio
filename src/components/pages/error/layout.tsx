import { type FunctionComponent, type ReactNode } from "react";
import { cn } from "@/utils/styling/cn";

interface ErrorPageLayoutProps {
  children: ReactNode;
}

export const ErrorPageLayout: FunctionComponent<ErrorPageLayoutProps> = ({
  children,
}) => {
  return (
    <div
      className={cn(
        "flex-1",
        "flex flex-col",
        "items-center justify-center",
        "mb-16"
      )}
    >
      {children}
    </div>
  );
};
