import { type FunctionComponent } from "react";
import { cn } from "@/utils/styling/cn";

interface HeroProps {
  heading: string;
  subHeading: string;
}

export const Hero: FunctionComponent<HeroProps> = ({ heading, subHeading }) => (
  <div
    className={cn(
      "w-full",
      "pb-16",
      "flex flex-col gap-y-4",
      "items-center justify-center text-center"
    )}
  >
    <h1
      className={cn(
        "text-3xl font-semibold md:text-5xl",
        "text-gray-900 dark:text-gray-100"
      )}
    >
      {heading}
    </h1>
    <p
      className={cn(
        "text-xl font-normal md:text-2xl",
        "text-gray-700 dark:text-gray-400",
        "max-w-2xl"
      )}
    >
      {subHeading}
    </p>
  </div>
);
