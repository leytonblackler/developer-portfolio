export interface Artist {
  id: number;
  name: string;
  href: string;
}

export interface Track {
  id: number;
  name: string;
  href: string;
  artists: Artist[];
  thumbnail: string;
}

export const isLastfmTrack = (track: unknown): track is Track => {
  console.log();
  return true;
};

export interface LastfmSummaryStats {
  minutesListened: number;
  uniqueTracks: number;
  uniqueArtists: number;
}

export interface LastfmSummary {
  mostRecentTrack: Track | null;
  stats: LastfmSummaryStats;
}

export interface LastfmGetRecentTracksResponseData {
  recenttracks: {
    track: unknown[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      total: string;
      perPage: string;
    };
  };
}
