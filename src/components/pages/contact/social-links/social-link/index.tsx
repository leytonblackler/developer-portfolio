import Link from "next/link";
import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { cn } from "@/utils/styling/cn";

export interface SocialLinkProps {
  icon: IconType;
  href: string;
  color?: {
    base: string;
    contrast: string;
  };
}

export const SocialLink: FunctionComponent<SocialLinkProps> = ({
  icon: Icon,
  href,
  color,
}) => (
  <Link
    href={href}
    className={cn(
      "flex-1",
      "flex items-center justify-center",
      "rounded-4xl",
      "p-10",
      /**
       * Default color.
       */
      !color &&
        cn("bg-gray-100 dark:bg-gray-900", "text-gray-700 dark:text-gray-200")
    )}
    style={{
      background: color?.base,
      color: color?.contrast,
    }}
  >
    <Icon className="h-6 w-6" />
  </Link>
);
