import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: { classGroups: { "font-size": ["text-xxs"] } },
});

/**
 * Conditionally join Tailwind classes together without conflicts.
 */
export const cn = (...args: ClassValue[]): string => twMerge(clsx(args));
