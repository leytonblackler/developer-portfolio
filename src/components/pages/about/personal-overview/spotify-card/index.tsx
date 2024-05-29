import { type FunctionComponent } from "react";
import { RecentlyPlayedTrack } from "./recently-played-track";
import { Stats } from "./stats";
import { Card } from "@/components/shared/card";
import { statsFm } from "@/utils/statsfm";

export const SpotifyCard: FunctionComponent = async () => {
  const statsForPastSixMonths = await statsFm.getStatsForPastSixMonths();
  const mostRecentlyPlayedTrack = await statsFm.getMostRecentlyPlayedTrack();

  return (
    <Card title="Recent listening">
      <div className="flex flex-col gap-y-6">
        <RecentlyPlayedTrack {...mostRecentlyPlayedTrack} />
        <Stats title="Past 6 Months" {...statsForPastSixMonths} />
      </div>
    </Card>
  );
};
