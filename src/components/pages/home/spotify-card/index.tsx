import { type FunctionComponent } from "react";
import { RecentlyPlayedTrack } from "./recently-played-track";
import { Stats } from "./stats";
import { Card } from "@/components/shared/card";
import { statsFm } from "@/utils/statsfm";
import { cn } from "@/utils/styling/cn";

export const SpotifyCard: FunctionComponent = async () => {
  const statsForPastSixMonths = await statsFm.getStatsForPastSixMonths();
  const mostRecentlyPlayedTrackData =
    await statsFm.getMostRecentlyPlayedTrack();

  return (
    <Card title="Recent listening">
      <div className={cn("@container/spotify-card", "flex-1", "flex flex-col")}>
        <div
          className={cn(
            "flex flex-1 gap-6",
            "flex-col @xl/spotify-card:flex-row",
            "flex-wrap"
          )}
        >
          <RecentlyPlayedTrack {...mostRecentlyPlayedTrackData} />
          <Stats title="Past 6 Months" {...statsForPastSixMonths} />
        </div>
      </div>
    </Card>
  );
};
