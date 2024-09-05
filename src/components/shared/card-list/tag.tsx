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
}) => (
  <div
    className={cn(
      "text-xs font-semibold leading-none",

      type === "primary" &&
        cn(
          "rounded-full px-3 py-2",
          schemedColorSet
            ? cn(
                schemedColorSet.classNames.inverted.background,
                schemedColorSet.classNames.inverted.text
              )
            : cn(
                "bg-gray-200/50 dark:bg-gray-800/50",
                "text-gray-700 dark:text-gray-200"
              )
        ),

      type === "secondary" &&
        cn(
          "rounded-full px-3 py-2",
          schemedColorSet
            ? schemedColorSet.classNames.text
            : "text-gray-700 dark:text-gray-400"
        )
    )}
    style={schemedColorSet?.cssVariableDeclarations ?? {}}
  >
    {children}
  </div>
);
