"use client";

import { type ExtendedDateStats } from "@statsfm/statsfm.js";
import { type FunctionComponent, useMemo } from "react";
import { IoMusicalNotes, IoPerson, IoPlay, IoTime } from "react-icons/io5";
import { StatItem, type StatItemProps } from "./stat-item";
import { cn } from "@/utils/styling/cn";

export const Stats: FunctionComponent<
  ExtendedDateStats & { title: string }
> = ({
  title,
  durationMs,
  count: totalStreams,
  cardinality: { tracks: uniqueTracks, artists: uniqueArtists },
}) => {
  const totalMinutes = useMemo(
    () => Math.floor(durationMs / 60000),
    [durationMs]
  );

  const statItems = useMemo<StatItemProps[]>(
    () => [
      { label: "Total Streams", value: totalStreams, icon: <IoPlay /> },
      { label: "Total Minutes", value: totalMinutes, icon: <IoTime /> },
      {
        label: "Unique Tracks",
        value: uniqueTracks,
        icon: <IoMusicalNotes />,
      },
      { label: "Unique Artists", value: uniqueArtists, icon: <IoPerson /> },
    ],
    [totalStreams, totalMinutes, uniqueTracks, uniqueArtists]
  );

  return (
    <div className={cn("flex-1 shrink-0", "flex flex-col justify-evenly")}>
      <h3
        // TODO: Reuse from card component
        className={cn(
          "text-gray-700 dark:text-gray-400",
          "text-sm opacity-70",
          "font-semibold",
          "whitespace-nowrap",
          "mb-6"
        )}
      >
        {title}
      </h3>
      <div className={cn("grid flex-1 grid-cols-2 gap-8")}>
        {statItems.map((props) => (
          <StatItem key={props.label} {...props} />
        ))}
      </div>
    </div>
  );
};
