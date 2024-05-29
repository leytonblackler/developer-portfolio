import { type NormalizedCacheObject } from "@apollo/client/cache/inmemory/types.js";
import { ApolloClient } from "@apollo/client/core/ApolloClient.js";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache.js";
import { link } from "./link";

/**
 * Initialises and returns the function fo obtaining a new Apollo client
 * instance for use by server-side build scripts.
 */
export const getGeneralApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
