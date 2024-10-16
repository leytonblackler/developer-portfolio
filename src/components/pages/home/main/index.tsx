"use client";

import { useState, type FunctionComponent } from "react";
import { WaveEmoji } from "./wave";
import { ScrollDown } from "./scroll-down";
import { Hero } from "@/components/shared/hero";
import { cn } from "@/utils/styling/cn";
import { SafeArea } from "@/components/shared/safe-area";
import { useHeroEntryContext } from "@/components/shared/hero/entry-provider/use-hero-context";

interface HomePageMainSectionProps {
  heading: string;
  subHeading: string;
}

export const HomePageMainSection: FunctionComponent<
  HomePageMainSectionProps
> = ({ heading, subHeading }) => {
  /**
   * Access the hero entry context.
   */
  const { heroHasEntered } = useHeroEntryContext();

  /**
   * Whether the waving emoji has been animated in.
   */
  const [waveHasEntered, setWaveHasEntered] = useState<boolean>(false);

  return (
    <div className={cn("w-dvh h-dvh", "flex flex-col")}>
      <SafeArea>
        <div
          className={cn(
            "flex-1",
            "flex flex-col",
            "items-center justify-center",
            "bounded-page-content-x",
            "relative"
          )}
        >
          <div
            className={cn(
              "w-full",
              "flex-1",
              "flex flex-col",
              "items-center justify-center"
            )}
          >
            <WaveEmoji
              show={heroHasEntered}
              onAnimationComplete={() => {
                setWaveHasEntered(true);
              }}
            />
            <Hero large heading={heading} subHeading={subHeading} />
          </div>
          <ScrollDown show={waveHasEntered} />
        </div>
      </SafeArea>
    </div>
  );
};
