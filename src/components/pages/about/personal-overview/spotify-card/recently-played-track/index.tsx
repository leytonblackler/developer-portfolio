import { type FunctionComponent } from "react";
import { HiMusicNote } from "react-icons/hi";
import { type v1 } from "@statsfm/statsfm.js";
import { getSpotifyId } from "../utils/get-spotify-id";
import { ArtistLink } from "./artist-link";
import { cn } from "@/utils/styling/cn";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export const RecentlyPlayedTrack: FunctionComponent<v1.Track> = ({
  name,
  artists,
  albums,
  // spotifyPreview: coverImage, // mp3
  externalIds,
}) => {
  // first
  const [mostRelevantAlbum] = albums;

  const coverImage = mostRelevantAlbum.image;

  const spotifyTrackId = getSpotifyId(externalIds);

  const spotifyTrackUrl: string | null = spotifyTrackId
    ? `https://open.spotify.com/track/${spotifyTrackId}`
    : null;

  // TODO: Scope cards to individual error boundaries

  return (
    <div className="flex flex-col">
      <h3
        // TODO: Reuse from card component
        className={cn(
          "text-gray-700 dark:text-gray-400",
          "text-sm opacity-70",
          "font-semibold",
          "whitespace-nowrap",
          "mb-4"
        )}
      >
        Last Played
      </h3>
      <div className="flex flex-row items-center gap-x-6">
        {/* TODO: Play preview on click */}
        <ImageWithFallback
          fallbackIcon={HiMusicNote}
          containerClassName="w-20 h-20 rounded-2xl"
          src={coverImage}
          alt={`${name} Artwork`}
          width={80}
          height={80}
        />
        <div className="flex flex-col gap-y-1">
          <span className="card-text-primary text-2xl">
            {/* TODO: Hover effect */}
            {spotifyTrackUrl ? (
              <a
                href={spotifyTrackUrl}
                className={cn(
                  "transition-colors duration-300",
                  "hover:text-gray-900 dark:hover:text-gray-50"
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
