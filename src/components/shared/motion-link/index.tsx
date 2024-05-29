"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * A wrapped version of the Next.js link component to enable Framer Motion
 * support.
 */
export const MotionLink = motion(Link);
