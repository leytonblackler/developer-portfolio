import { FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PageNavLinkConfig } from "@/constants/pages";

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
        "block text-sky-100",
        "py-4 sm:py-5",
        "px-6 sm:px-8",
        "flex flex-row",
        "items-center justify-center"
      )}
    >
      <Icon
        className={clsx(
          "w-4 sm:w-5",
          "h-4 sm:h-5",
          "transition-opacity",
          "duration-300",
          active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
        )}
      />
      <span
        className={clsx(
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
            "pl-2 sm:pl-4",
            "text-xs sm:text-base"
          )}
        >
          {label}
        </span>
      </span>
    </Link>
  );
};

export default LinkItem;
