import { type v1 } from "@statsfm/statsfm.js";
import { type FunctionComponent } from "react";
import { getSpotifyId } from "../../utils/get-spotify-id";
import { statsFm } from "@/utils/statsfm";
import { cn } from "@/utils/styling/cn";

export const ArtistLink: FunctionComponent<v1.ArtistSimple> = async ({
  id,
  name,
}) => {
  const { externalIds } = await statsFm.getArtist(id);

  const spotifyArtistId = getSpotifyId(externalIds);

  const spotifyArtistUrl: string | null = spotifyArtistId
    ? `https://open.spotify.com/artist/${spotifyArtistId}`
    : null;

  // TODO: Hover effect
  return spotifyArtistUrl ? (
    <a
      href={spotifyArtistUrl}
      className={cn(
        "transition-colors duration-300",
        "card-text-secondary",
        "hover:text-gray-500 dark:hover:text-gray-300"
      )}
    >
      {name}
    </a>
  ) : (
    name
  );
};
