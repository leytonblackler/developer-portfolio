import { type FunctionComponent, type ReactNode } from "react";
import { cn } from "@/utils/styling/cn";
import { type ParsedColorSet } from "@/hygraph/types";
import {
  useColorSetClassNames,
  useSchemedColorSet,
} from "@/hooks/color-scheme/use-schemed-color-set";

interface CardProps {
  children: ReactNode;
  title: string;
  rowSpan?: number;
  contentGap?: boolean;
  contentPadding?: {
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  parsedColorSet?: ParsedColorSet | null;
}

// TODO: Scope cards to individual error boundaries

export const Card: FunctionComponent<CardProps> = ({
  children: content,
  title,
  rowSpan = 1,
  contentGap = true,
  contentPadding = { left: true, bottom: true, right: true },
  parsedColorSet,
}) => {
  console.log("parsedColorSet", parsedColorSet);

  /**
   * If a parsed color set was provided, select the colors to use from this
   * based on the current colour scheme mode.
   */
  // const colors = useColorSchemeModeColors(parsedColorSet);

  // console.log("colors", colors);

  const schemedColorSet = useSchemedColorSet(parsedColorSet);

  console.log("schemedColorSet", schemedColorSet);

  return (
    <div
      className={cn(
        "flex-1",
        "flex flex-col",
        contentGap ? "gap-y-6" : "gap-y-0",
        "rounded-7xl",
        // "card-text-primary",
        "relative",
        schemedColorSet
          ? cn(
              schemedColorSet.classNames.background,
              schemedColorSet.classNames.text
            )
          : cn(
              "bg-gray-100 dark:bg-gray-900",
              "text-gray-700 dark:text-gray-200"
            )
      )}
      style={{
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
        ...(schemedColorSet?.cssVariableDeclarations ?? {}),
      }}
    >
      <div className="bg-lime-500 text-red-500">
        {/* {JSON.stringify(variables)} */}
      </div>
      <div className={cn("px-10 pt-8")}>
        <h2
          className={cn(
            // !colors && "text-gray-600 dark:text-gray-500",
            "text-xl",
            "font-medium",
            "whitespace-nowrap"
          )}
          style={
            {
              // color: colors?.foreground ?? undefined,
            }
          }
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "relative flex-1",
          "flex flex-col",
          contentPadding.left && "pl-10",
          contentPadding.bottom && "pb-10",
          contentPadding.right && "pr-10"
        )}
      >
        {content}
      </div>
    </div>
  );
};
