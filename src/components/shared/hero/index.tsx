import { type FunctionComponent } from "react";
import { AnimatedText } from "./animated-text";
import { cn } from "@/utils/styling/cn";

interface HeroProps {
  heading: string;
  subHeading: string | string[];
  large?: true;
}

export const Hero: FunctionComponent<HeroProps> = ({
  heading,
  subHeading,
  large = false,
}) => (
  <div
    className={cn(
      "w-full",
      "flex flex-col",
      "items-center justify-center text-center",
      "px-4 pb-20",
      large ? "gap-y-7" : "gap-y-4"
    )}
  >
    {/* <h1
      className={cn(
       
      )}
    >
      <span>{heading}</span>
    </h1> */}
    <AnimatedText
      element="h1"
      className={cn(
        large
          ? "text-3xl sm:text-4xl md:text-6xl"
          : "text-2xl sm:text-3xl md:text-5xl",
        "font-bold",
        "text-gray-850 dark:text-gray-100",
        "w-full",
        "relative"
      )}
    >
      {heading}
    </AnimatedText>
    <p
      className={cn(
        large
          ? "text-lg sm:text-xl md:text-2xl"
          : "text-base sm:text-lg md:text-xl",
        "font-light",
        "max-w-2xl",
        "text-gray-700 dark:text-gray-400",
        "opacity-70",
        "flex flex-col gap-y-1"
      )}
    >
      {Array.isArray(subHeading)
        ? subHeading.map((line) => <span key={line}>{line}</span>)
        : subHeading}
    </p>
  </div>
);
