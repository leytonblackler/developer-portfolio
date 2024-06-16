import { type FunctionComponent } from "react";
import Image from "next/image";
import { cn } from "@/utils/styling/cn";

interface HeroProps {
  heading: string;
  logoUrl?: string | null | undefined;
  subHeading: string;
}

export const Hero: FunctionComponent<HeroProps> = ({
  heading,
  logoUrl,
  subHeading,
}) => (
  <div
    className={cn(
      "w-full",
      "flex flex-col gap-y-4",
      "items-center justify-center text-center",
      "pb-16"
    )}
  >
    <h1
      className={cn(
        "text-3xl font-semibold md:text-5xl",
        "text-gray-900 dark:text-gray-100",
        "w-full",
        "relative",
        logoUrl ? "pb-4" : "pb-0"
      )}
    >
      <span
        className={
          logoUrl ? "select-none opacity-0" : "select-auto opacity-100"
        }
      >
        {heading}
      </span>
      {logoUrl ? (
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            fill
            src={logoUrl}
            alt={`${heading} Logo`}
            className="object-contain"
          />
        </div>
      ) : null}
    </h1>
    <p
      className={cn(
        "text-xl font-normal md:text-2xl",
        "max-w-2xl",
        "text-gray-700 dark:text-gray-400"
      )}
    >
      {subHeading}
    </p>
  </div>
);
