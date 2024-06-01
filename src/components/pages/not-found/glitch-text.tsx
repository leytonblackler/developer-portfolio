import { type HTMLAttributes, type FunctionComponent } from "react";
import colors from "tailwindcss/colors";
import { cn } from "@/utils/styling/cn";

/**
 * Adapted from: https://codepen.io/fabiowallner/pen/ozZoYo
 */

const Text: FunctionComponent<{
  children: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  shadowColor?: string;
}> = ({ className, shadowColor }) => (
  <div
    className={cn(
      "text-[150px] font-bold",
      "text-gray-50",
      "leading-none",
      className
    )}
    style={
      shadowColor
        ? {
            textShadow: `-3px 0 ${shadowColor}`,
          }
        : undefined
    }
  >
    404
  </div>
);

interface GlitchTextProps {
  children: string;
}

export const GlitchText: FunctionComponent<GlitchTextProps> = ({
  children,
}) => (
  <div className={cn("relative", "flex items-center justify-center")}>
    <Text
      className={cn(
        "z-20",
        "bg-gray-50 dark:bg-gray-950",
        "absolute",
        "h-full w-full",
        "flex items-center justify-center",
        "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "ml-1",
        "animate-glitch-1"
      )}
      shadowColor={colors.sky[400]}
    >
      {children}
    </Text>
    <Text className="relative">{children}</Text>
    <Text
      className={cn(
        "z-20",
        "bg-gray-50 dark:bg-gray-950",
        "absolute",
        "h-full w-full",
        "flex items-center justify-center",
        "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "ml-1",
        "animate-glitch-2"
      )}
      shadowColor={colors.red[400]}
    >
      {children}
    </Text>
  </div>
);
