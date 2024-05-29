import { type FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { type PageConfig, type PageConfigNavLink } from "@/config/pages";
import { cn } from "@/utils/styling/cn";

interface LinkItemProps extends PageConfigNavLink {
  active: boolean;
  pageConfig: PageConfig | null;
}

export const LinkItem: FunctionComponent<LinkItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
  pageConfig,
}) => {
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
        "py-4 sm:py-5",
        "px-6 sm:px-8",
        active
          ? cn(!pageConfig?.colors && "text-gray-200 dark:text-gray-900")
          : cn("text-gray-900 dark:text-gray-300")
      )}
      style={
        active && pageConfig?.colors
          ? {
              color: pageConfig.colors.text,
            }
          : undefined
      }
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
          <span className="pl-1 sm:pl-2">{label}</span>
        </span>
      </span>
    </Link>
  );
};
