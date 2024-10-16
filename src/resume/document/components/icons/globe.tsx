import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { type ReactPDFIcon } from "./types";

/**
 * "HiOutlineGlobe" in react-icons.
 * SVG sourced from: https://v1.heroicons.com
 */
export const HiOutlineGlobeReactPDF: ReactPDFIcon = ({
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
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </Svg>
);
