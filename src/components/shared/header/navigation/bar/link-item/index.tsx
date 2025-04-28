import { type FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { type NavigationLinkItemProps } from "../../types";
import { cn } from "@/utils/styling/cn";

export const NavigationBarLinkItem: FunctionComponent<
  NavigationLinkItemProps
> = ({ label, icon: Icon, href, active }) => {
  const labelRef = useRef<HTMLSpanElement>(null);

  const [labelWidth, setLabelWidth] = useState<number | undefined>();

  useEffect(() => {
    setLabelWidth(labelRef.current?.getBoundingClientRect().width);
  }, []);

  return (
    <Link
      href={href}
      className={cn(
        "group",
        "flex flex-row",
        "items-center justify-center",
        "py-5",
        "px-8",
        "transition-all duration-300",
        active
          ? cn(
              "pointer-events-none select-none",
              "text-gray-850 dark:text-gray-100",
              "opacity-100"
            )
          : cn(
              "pointer-events-auto select-auto",
              "text-gray-850 dark:text-gray-300",
              "opacity-50 hover:opacity-100"
            )
      )}
    >
      <Icon className={cn("w-5", "h-5", "transition-colors duration-300")} />
      <span
        className={cn(
          "font-medium",
          "overflow-hidden",
          "transition-all",
          "duration-500"
        )}
        style={{ width: active ? labelWidth ?? "auto" : 0 }}
      >
        <span
          ref={labelRef}
          className={cn(
            "whitespace-nowrap",
            "leading-none",
            "overflow-visible",
            "text-sm",
            active ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="pl-2">{label}</span>
        </span>
      </span>
    </Link>
  );
};
