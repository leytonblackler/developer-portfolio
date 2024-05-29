import Link from "next/link";
import { type FunctionComponent } from "react";
import { cn } from "@/utils/styling/cn";

interface ReCaptchaBadgeLinkProps {
  children: string;
  href: string;
}

export const ReCaptchaBadgeLink: FunctionComponent<ReCaptchaBadgeLinkProps> = ({
  children,
  href,
}) => (
  <Link
    href={href}
    className={cn(
      "text-xs font-light",
      "text-gray-700 dark:text-gray-200",
      "transition-opacity duration-300",
      "opacity-70 hover:opacity-100"
    )}
  >
    {children}
  </Link>
);
