import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { type ReactPDFIcon } from "./types";

/**
 * "HiOutlineMail" in react-icons.
 * SVG sourced from: https://v1.heroicons.com
 */
export const HiOutlineMailReactPDF: ReactPDFIcon = ({
  width,
  height,
  color,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </Svg>
);
