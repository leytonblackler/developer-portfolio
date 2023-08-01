import { FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PageNavLinkConfig } from "@/config/pages";

interface LinkItemProps extends PageNavLinkConfig {
  active: boolean;
}

const LinkItem: FunctionComponent<LinkItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
}) => {
  const labelRef = useRef<HTMLSpanElement>(null);

  const [labelWidth, setLabelWidth] = useState<number | undefined>();

  useEffect(() => {
    setLabelWidth(labelRef.current?.getBoundingClientRect().width);
  }, [labelRef.current]);

  return (
    <Link
      href={href}
      className={clsx(
        "group",
        "block",
        "flex flex-row",
        "items-center justify-center",
        "py-4 sm:py-5",
        "px-6 sm:px-8",
        "transition-all duration-200",
        active
          ? "text-gray-500 dark:text-gray-950"
          : "text-gray-500 dark:text-gray-50"
      )}
    >
      <Icon
        className={clsx(
          "w-5",
          "h-5",
          "transition-opacity",
          "duration-300",
          active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
        )}
      />
      <span
        className={clsx(
          "font-medium",
          "overflow-hidden",
          "transition-all",
          "duration-500",
          active ? "opacity-100" : "opacity-0"
        )}
        style={{ width: active ? labelWidth ?? "auto" : 0 }}
      >
        <span
          ref={labelRef}
          className={clsx(
            "whitespace-nowrap",
            "leading-none",
            "pl-1 sm:pl-3",
            "text-sm"
          )}
        >
          {label}
        </span>
      </span>
    </Link>
  );
};

export default LinkItem;
