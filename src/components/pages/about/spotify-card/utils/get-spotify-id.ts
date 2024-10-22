type GetSpotifyId = (externalIds: Record<string, unknown>) => number | null;

export const getSpotifyId: GetSpotifyId = (externalIds) => {
  if (
    "spotify" in externalIds &&
    Array.isArray(externalIds.spotify) &&
    externalIds.spotify.length
  ) {
    const id: unknown = externalIds.spotify[0];
    return typeof id === "number" ? id : null;
  }
  return null;
};
