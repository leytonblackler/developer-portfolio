"use client";

import { type FunctionComponent } from "react";
import { DeviceCard } from "../card";
import { LaptopModel } from "./model";

export const LaptopCard: FunctionComponent = () => {
  return (
    <DeviceCard
      model={LaptopModel}
      baseScale={0.04}
      hoverScaleMultiplier={1.25}
      initial={{
        position: {
          y: -2.2,
        },
        rotation: {
          x: Math.PI + 1.5,
          y: Math.PI - 1,
          z: Math.PI,
        },
      }}
      idle={{
        position: {
          y: -0.375,
        },
        rotation: {
          x: Math.PI + 0.2,
          y: Math.PI,
          z: Math.PI,
        },
      }}
      hoverRotation={{
        x: {
          min: Math.PI - 0.05,
          max: Math.PI + 0.5,
        },
        y: {
          min: Math.PI + 0.25,
          max: Math.PI - 0.25,
        },
      }}
    />
  );
};
