import { type FunctionComponent } from "react";
import { WaveEmoji } from "./wave";
import { Hero } from "@/components/shared/hero";
import { RotatingTextCircle } from "@/components/shared/rotating-text-circle";
import { cn } from "@/utils/styling/cn";
import { SafeArea } from "@/components/shared/safe-area";

interface HomePageMainSectionProps {
  heading: string;
  subHeading: string;
}

export const HomePageMainSection: FunctionComponent<
  HomePageMainSectionProps
> = ({ heading, subHeading }) => {
  console.log("heading", heading, "subheading", subHeading);

  /**
   * Split the subheading into an array of separate lines.
   */
  const subHeadingLines = subHeading.split("\n");

  return (
    <div className={cn("w-dvh h-dvh", "flex flex-col")}>
      <SafeArea>
        <div
          className={cn(
            "flex-1",
            "flex flex-col",
            "items-center justify-center",
            "bounded-page-content-x"
          )}
        >
          <div
            className={cn(
              "flex-1",
              "flex flex-col",
              "items-center justify-center"
            )}
          >
            <WaveEmoji />
            <Hero large heading={heading} subHeading={subHeadingLines} />
          </div>
          <RotatingTextCircle text="SCROLL DOWN" />
        </div>
      </SafeArea>
    </div>
  );
};
