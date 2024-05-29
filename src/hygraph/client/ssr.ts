import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  ApolloClient as NextSSRApolloClient,
  InMemoryCache as NextSSRInMemoryCache,
} from "@apollo/client-react-streaming";
import { link } from "./link";

/**
 * Initialises and returns the function fo obtaining a new Apollo client
 * instance for use in Next.js SSR.
 */
export const { getClient: getSSRApolloClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      link,
      cache: new NextSSRInMemoryCache(),
    })
);
