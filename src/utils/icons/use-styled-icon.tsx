import { cloneElement, useMemo } from "react";
import { cn } from "../styling/cn";
import { type ReactIcon } from "./types";

type UseStyledIcon = (
  icon: ReactIcon | null | undefined,
  className: string
) => ReactIcon | null;

export const useStyledIcon: UseStyledIcon = (icon, className) => {
  if (!icon?.props) {
    console.log("icon", icon);
  }
  return useMemo<ReactIcon | null>(
    () =>
      icon
        ? cloneElement(icon, {
            className: cn(icon.props.className, className),
          })
        : null,
    [icon, className]
  );
};
