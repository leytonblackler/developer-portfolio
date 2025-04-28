"use client";

import { motion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import { type ComponentProps } from "react";

/**
 * A wrapped version of the Next.js link component to enable Framer Motion
 * support.
 */
export const MotionLink = motion<LinkProps & ComponentProps<typeof Link>>(Link);
