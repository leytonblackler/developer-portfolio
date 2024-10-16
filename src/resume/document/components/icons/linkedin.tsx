import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { type ReactPDFIcon } from "./types";

/**
 * "TbBrandLinkedin" in react-icons.
 * SVG sourced from: https://tabler.io/icons
 */
export const TbBrandLinkedinReactPDF: ReactPDFIcon = ({
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
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M8 11l0 5" />
    <Path d="M8 8l0 .01" />
    <Path d="M12 16l0 -5" />
    <Path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </Svg>
);
