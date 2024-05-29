// https://hygraph.com/docs/api-reference/basics/errors

import { ApolloError } from "@apollo/client/errors/index.js";

export interface HygraphError {
  message: string;
}

export interface HygraphErrorResult {
  errors: HygraphError[];
  data: null;
  extensions: {
    requestId: string;
  };
}

export interface HygraphServerError {
  statusCode: number;
  result: HygraphErrorResult;
}

export const isHygraphServerError = (
  error: unknown
): error is HygraphServerError =>
  error !== null &&
  typeof error === "object" &&
  "statusCode" in error &&
  typeof error.statusCode === "number" &&
  "result" in error &&
  error.result !== null &&
  typeof error.result === "object" &&
  "errors" in error.result &&
  error.result.errors !== null &&
  Array.isArray(error.result.errors) &&
  error.result.errors.every(
    (resultError: unknown) =>
      resultError !== null &&
      typeof resultError === "object" &&
      "message" in resultError &&
      typeof resultError.message === "string"
  );

export const parseHygraphServerError = (error: HygraphServerError): string => {
  const totalErrors = error.result.errors.length;
  let combined = `Received ${totalErrors} ${
    totalErrors > 1 ? "errors" : "error from Hygraph:"
  }`;
  combined += error.result.errors
    .map(({ message }) => `\n- ${message}`)
    .join("");
  return combined;
};

export const catchErrors = async <T>(
  performRequest: () => Promise<T>
): Promise<T> => {
  try {
    return await performRequest();
  } catch (error) {
    if (error instanceof ApolloError) {
      if (isHygraphServerError(error.networkError)) {
        throw new Error(parseHygraphServerError(error.networkError));
      } else {
        throw error;
      }
    } else {
      throw new Error(
        "Unknown error when attempting to perform request to Hygraph"
      );
    }
  }
};
