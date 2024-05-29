"use client";

import { type FunctionComponent } from "react";
import { DeviceCard } from "../card";
import { PhoneModel } from "./model";

export const PhoneCard: FunctionComponent = () => {
  return (
    <DeviceCard
      model={PhoneModel}
      baseScale={7.5}
      hoverScaleMultiplier={1.35}
      initial={{
        position: {
          y: -4,
        },
        rotation: {
          x: -Math.PI / 3,
          y: -Math.PI,
          z: -Math.PI / 4,
        },
      }}
      idle={{
        position: {
          y: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
      }}
      hoverRotation={{
        x: {
          min: -Math.PI / 8,
          max: Math.PI / 8,
        },
        y: {
          min: -Math.PI / 6,
          max: Math.PI / 6,
        },
      }}
    />
  );
};
