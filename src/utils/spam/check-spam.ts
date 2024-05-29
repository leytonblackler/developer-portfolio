import { type Comment } from "akismet-api";
import { akismet } from "./akismet";

type TestKeys = "is_test" | "isTest";

type CheckSpamFunction = (args: Exclude<Comment, TestKeys>) => Promise<boolean>;

/**
 * Checks if submitted content is spam using the Akismet API.
 * Note that this is a best-effort function, and if an error occurs
 * within this function, it will return false to avoid blocking.
 */
export const checkSpam: CheckSpamFunction = async (comment) => {
  /**
   * Verify the API key.
   */
  try {
    if (!(await akismet.verifyKey())) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("Akismet API key verification failed");
  }

  /**
   * Check if the content is spam.
   */
  try {
    return await akismet.checkSpam({
      isTest: process.env.VERCEL_ENV !== "production",
      ...comment,
    });
  } catch (error) {
    throw new Error("Spam check with Akismet failed");
  }
};
