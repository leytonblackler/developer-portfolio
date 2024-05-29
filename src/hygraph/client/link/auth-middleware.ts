import { ApolloLink } from "@apollo/client/link/core/ApolloLink.js";

/**
 * The Apollo middleware for adding the Hygraph permanent auth token to the
 * request headers.
 */
export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
    },
  }));
  return forward(operation);
});
