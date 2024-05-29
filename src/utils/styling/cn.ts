import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditionally join Tailwind classes together without conflicts.
 */
export const cn = (...args: ClassValue[]): string => twMerge(clsx(args));
