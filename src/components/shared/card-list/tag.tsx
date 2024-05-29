import {
  type ReactNode,
  type FunctionComponent,
  type HTMLAttributes,
} from "react";
import { cn } from "@/utils/styling/cn";
import { type ParsedColorSet } from "@/hygraph/types";

interface CardListItemTagProps {
  children: ReactNode;
  type: "primary" | "secondary";
  colors: ParsedColorSet | null;
}

export const CardListItemTag: FunctionComponent<CardListItemTagProps> = ({
  children,
  type,
  colors,
}) => {
  /**
   * Determine the inline CSS styles to apply based on the tag type.
   */
  const containerStyle: HTMLAttributes<HTMLDivElement>["style"] =
    type === "primary"
      ? {
          color: colors?.background ?? undefined,
          backgroundColor: colors?.text ?? undefined,
        }
      : {
          color: colors?.text ?? undefined,
        };

  return (
    <div
      className={cn(
        "text-xs font-semibold leading-none",
        type === "primary" && "rounded-full px-3 py-2"
      )}
      style={containerStyle}
    >
      {children}
    </div>
  );
};
