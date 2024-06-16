import { type ReactNode, type FunctionComponent } from "react";
import { cn } from "@/utils/styling/cn";
import { type SchemedColorSet } from "@/hooks/color-scheme/use-schemed-color-set";

interface CardListItemTagProps {
  children: ReactNode;
  type: "primary" | "secondary";
  schemedColorSet: SchemedColorSet | null;
}

export const CardListItemTag: FunctionComponent<CardListItemTagProps> = ({
  children,
  type,
  schemedColorSet,
}) => {
  /**
   * Determine the inline CSS styles to apply based on the tag type.
   */
  // const containerStyle: HTMLAttributes<HTMLDivElement>["style"] =
  //   type === "primary"
  //     ? {
  //         color: colors?.background ?? undefined,
  //         backgroundColor: colors?.foreground ?? undefined,
  //       }
  //     : {
  //         color: colors?.foreground ?? undefined,
  //       };

  // TODO: Fix set colors from schemedColorSet

  return (
    <div
      className={cn(
        "text-xs font-semibold leading-none",
        "text-gray-700 dark:text-gray-400",
        type === "primary" &&
          cn("rounded-full px-3 py-2", "bg-gray-200/50 dark:bg-gray-800/50")
      )}
      style={schemedColorSet?.cssVariableDeclarations ?? {}}
    >
      {children}
    </div>
  );
};
