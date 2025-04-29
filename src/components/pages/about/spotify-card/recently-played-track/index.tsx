import { type FunctionComponent } from "react";
import { HiMusicNote } from "react-icons/hi";
import { getSpotifyId } from "../utils/get-spotify-id";
import { ArtistLink } from "./artist-link";
import { cn } from "@/utils/styling/cn";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { type MostRecentlyPlayedTrackData } from "@/utils/statsfm/methods/get-most-recent-track";
import { dayjs } from "@/utils/date/instance";

const FALLBACK_DATA: MostRecentlyPlayedTrackData = {
  track: {
    id: -1,
    name: "N/A",
    artists: [
      {
        id: -1,
        name: "N/A",
      },
    ],
    albums: [
      {
        id: -1,
        name: "N/A",
        image: "",
      },
    ],
    durationMs: 1,
    spotifyPopularity: -1,
    explicit: false,
    externalIds: {},
  },
  endTime: new Date(),
};

export const RecentlyPlayedTrack: FunctionComponent<{
  data: MostRecentlyPlayedTrackData | null;
}> = ({ data }) => {
  /**
   * If the most recently played track data is null, use placeholder data
   * instead.
   */
  const { track, endTime } = data ?? FALLBACK_DATA;

  const { name, artists, albums, externalIds } = track;

  const [mostRelevantAlbum] = albums;

  const coverImage = mostRelevantAlbum.image;

  const spotifyTrackId: number | null = data ? getSpotifyId(externalIds) : null;

  const spotifyTrackUrl: string | null = spotifyTrackId
    ? `https://open.spotify.com/track/${spotifyTrackId}`
    : null;

  /**
   * Construct a Day.js instance for the time the track was played.
   */
  const playedAtLabel = dayjs(endTime).from(dayjs());

  // TODO: Scope cards to individual error boundaries

  console.log("track", track);

  return (
    <div className={cn("flex flex-col", "flex-none @xl/spotify-card:flex-1")}>
      <div
        className={cn(
          "flex flex-row items-center justify-start",
          "gap-x-2",
          "card-text-secondary",
          "text-sm",
          "mb-4"
        )}
      >
        <h3
          // TODO: Reuse from card component
          className={cn("font-semibold", "whitespace-nowrap", "opacity-70")}
        >
          Last played
        </h3>
        <span className="opacity-50">({playedAtLabel})</span>
      </div>
      <div className="flex flex-row items-center gap-x-6">
        {/* TODO: Play preview on click */}
        <ImageWithFallback
          fallbackIcon={<HiMusicNote />}
          containerClassName="w-20 h-20 rounded-2xl"
          src={coverImage}
          alt={`${name} Artwork`}
          width={80}
          height={80}
        />
        <div className="flex flex-col gap-y-1">
          <span className="card-text-primary text-2xl font-semibold">
            {/* TODO: Hover effect */}
            {spotifyTrackUrl ? (
              <a
                href={spotifyTrackUrl}
                className={cn(
                  "transition-colors duration-300",
                  "hover:text-gray-925 dark:hover:text-gray-50"
                )}
              >
                {name}
              </a>
            ) : (
              name
            )}
          </span>
          <span className="card-text-secondary">
            {artists.map((artist, index) => (
              <>
                <ArtistLink key={artist.id} {...artist} />
                {artists.length > 2 && index < artists.length - 2 && (
                  <>,&nbsp;</>
                )}
                {index === artists.length - 2 && <>&nbsp;and&nbsp;</>}
              </>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
