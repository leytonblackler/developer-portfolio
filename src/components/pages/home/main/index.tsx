import { type FunctionComponent } from "react";
import { WaveEmoji } from "./wave";
import { Hero } from "@/components/shared/hero";
import { RotatingTextCircle } from "@/components/shared/rotating-text-circle";
import { cn } from "@/utils/styling/cn";
import { SafeArea } from "@/components/shared/safe-area";

export const HomePageMainSection: FunctionComponent = () => {
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
            <Hero
              large
              heading="Hi there, I'm Leyton."
              subHeading={[
                "I'm a full-stack software engineer.",
                "I develop digital experiences that delight and deliver.",
              ]}
            />
          </div>
          <RotatingTextCircle text="SCROLL DOWN" />
        </div>
      </SafeArea>
    </div>
  );
};
