import { concat } from "@apollo/client/link/core/concat.js";
import { authMiddleware } from "./auth-middleware";
import { httpLink } from "./http-link";

/**
 * Export the Apollo link as a concatenation of the HTTP link with the Hygraph
 * auth middleware.
 */
export const link = concat(authMiddleware, httpLink);
