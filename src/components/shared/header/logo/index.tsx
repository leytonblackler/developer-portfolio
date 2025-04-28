import React, { type FunctionComponent, type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/styling/cn";

interface LogoProps {
  className?: HTMLAttributes<HTMLOrSVGElement>["className"];
}

export const Logo: FunctionComponent<LogoProps> = ({ className }) => (
  <motion.svg
    className={cn("fill-current", className)}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <motion.path
        d=" M 197.796 361.102 L 197.82 361.079 L 162.949 326.211 L 162.926 326.234 L 157.319 320.625 L 69.739 233.045 L 69.762 233.022 L 34.892 198.153 L 34.868 198.174 L 0 233.045 L 33.921 266.963 L 122.451 355.493 L 156.483 389.526 L 245.035 478.079 L 278.955 512 L 391.839 399.116 L 376.394 383.67 L 357.919 365.195 L 279.905 443.211 L 197.796 361.102 Z "
        // style={{
        //   fill,
        //   transition: `fill ${
        //     constants.general.sectionTransitionDuration * 0.5
        //   }ms ease 0s`,
        // }}
      />
      <motion.path
        d=" M 388.809 123.191 C 392.472 90.853 381.934 57.205 357.128 32.4 C 313.916 -10.815 243.837 -10.792 200.624 32.423 L 69.761 163.284 L 103.682 197.204 L 234.542 66.341 C 258.989 41.897 298.765 41.873 323.21 66.318 C 347.133 90.243 347.585 128.821 324.656 153.379 C 324.158 153.877 323.594 154.352 323.073 154.872 L 192.347 285.597 L 226.379 319.63 L 357.105 188.904 C 357.627 188.385 358.102 187.863 358.621 187.344 C 383.156 164.436 421.733 164.844 445.682 188.79 C 470.127 213.237 470.103 253.013 445.659 277.458 L 392.812 330.305 L 426.732 364.223 L 479.577 311.376 C 522.792 268.163 522.815 198.084 479.6 154.872 C 454.795 130.066 421.147 119.528 388.809 123.191 Z "
        // style={{
        //   fill,
        //   transition: `fill ${
        //     constants.general.sectionTransitionDuration * 0.5
        //   }ms ease 0s`,
        // }}
      />
    </g>
  </motion.svg>
);
