import { StatusCodes } from "http-status-codes";
import { type NextRequest, NextResponse } from "next/server";
import { lastFm } from "@/utils/lastfm";

type LastfmAuthCallbackEndpoint = (
  request: NextRequest
) => Promise<NextResponse>;

export const GET: LastfmAuthCallbackEndpoint = async (request) => {
  /**
   * Get the authentication token returned by Last.fm (valid for
   * 60 minutes after issue).
   */
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  /**
   * Handle no authentication token present.
   */
  if (!token) {
    return NextResponse.json(
      {
        error: `Authentication token not present as 'token' query parameter.`,
      },
      { status: StatusCodes.BAD_REQUEST }
    );
  }

  /**
   * Attempt to create a web service session with the token to obtain
   * a session key (session keys have an infinite lifetime by default).
   */
  let sessionKey: string;
  try {
    sessionKey = await lastFm.createSession(token);
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error creating web service session with provided authentication token.`,
      },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }

  return NextResponse.json(
    {
      sessionKey,
    },
    { status: StatusCodes.OK }
  );
};
