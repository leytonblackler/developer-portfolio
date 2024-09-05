"use client";

/**
 * Adapted from generation by: https://github.com/pmndrs/gltfjsx
 */

import React, {
  type PointerEventHandler,
  Suspense,
  useEffect,
  useState,
  useCallback,
  type FunctionComponent,
  useMemo,
} from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionValue,
  motion,
  animate,
  useTransform,
  useSpring,
  type HoverHandlers,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { type ModelState, type ModelComponent } from "./types";
import { cn } from "@/utils/styling/cn";

interface DeviceCardProps {
  model: ModelComponent;
  baseScale: number;
  initial: ModelState<number>;
  idle: ModelState<number>;
  hoverScaleMultiplier: number;
  hoverRotation: {
    x: {
      min: number;
      max: number;
    };
    y: {
      min: number;
      max: number;
    };
  };
}

export const DeviceCard: FunctionComponent<DeviceCardProps> = ({
  model: Model,
  baseScale,
  initial,
  idle,
  hoverScaleMultiplier,
  hoverRotation,
}) => {
  const [containerRef, bounds] = useMeasure({ scroll: false });

  const [isHovering, setIsHovering] = useState(false);

  const [modelReady, setModelReady] = useState(false);

  const [hasMeasured, setHasMeasured] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const onModelReady = useCallback(() => {
    setModelReady(true);
  }, []);

  const scaleMultiplier = useMemo<number>(() => {
    if (!hasMeasured) {
      return 1;
    }

    const breakpoint = 600;

    return bounds.width > breakpoint
      ? 1
      : 0.3 + (0.7 * bounds.width) / breakpoint;
  }, [hasMeasured, bounds.width]);

  const scale = useMemo<number>(() => {
    const adjustedBaseScale = baseScale * scaleMultiplier;
    return hasEntered && isHovering
      ? adjustedBaseScale * hoverScaleMultiplier
      : adjustedBaseScale;
  }, [
    scaleMultiplier,
    hasEntered,
    isHovering,
    baseScale,
    hoverScaleMultiplier,
  ]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const pointerRotateX = useSpring(
    useTransform(
      mouseY,
      [-(bounds.height / 2), bounds.height / 2],
      [hoverRotation.x.min, hoverRotation.x.max]
      // [idle.rotation.x - 0.15, idle.rotation.x + 0.15]
    ),
    { damping: 12, mass: 1, stiffness: 80 }
  );

  const pointerRotateY = useSpring(
    useTransform(
      mouseX,
      [-(bounds.width / 2), bounds.width / 2],
      [hoverRotation.y.min, hoverRotation.y.max]
      // [idle.rotation.y - 0.4, idle.rotation.y + 0.4]
    ),
    { damping: 12, mass: 1, stiffness: 80 }
  );

  const translateY = useMotionValue(initial.position.y);
  const initialRotateX = useMotionValue(initial.rotation.x);
  const initialRotateY = useMotionValue(initial.rotation.y);
  const initialRotateZ = useMotionValue(initial.rotation.z);

  /**
   * Ensure that the model remains centred when the scale changes.
   */
  useEffect(() => {
    if (hasMeasured && hasEntered) {
      translateY.set(scaleMultiplier * idle.position.y);
    }
  }, [hasMeasured, hasEntered, translateY, scaleMultiplier, idle.position.y]);

  const onHoverStart: HoverHandlers["onHoverStart"] = () => {
    setIsHovering(true);
  };

  const onHoverEnd: HoverHandlers["onHoverEnd"] = () => {
    setIsHovering(false);
    mouseX.set(idle.rotation.x);
    mouseY.set(idle.rotation.y);
  };

  const onPointerMove = useCallback<PointerEventHandler<HTMLDivElement>>(
    ({ clientX, clientY }) => {
      if (hasEntered) {
        const x = clientX - bounds.x - bounds.width / 2;
        mouseX.set(x);

        const y = clientY - bounds.y - bounds.height / 2;
        mouseY.set(y);
      }
    },
    [hasEntered, bounds, mouseX, mouseY]
  );

  /**
   * Detect when the container has been measured and update the state to
   * reflect this.
   */
  useEffect(() => {
    if (!hasMeasured && bounds.width && bounds.height) {
      setHasMeasured(true);
    }
  }, [hasMeasured, bounds]);

  const performEntryAnimation = useCallback(async () => {
    await Promise.all([
      animate(initialRotateX, idle.rotation.x, {
        ease: "easeOut",
        duration: 4,
      }),
      animate(initialRotateY, idle.rotation.y, {
        ease: "easeOut",
        duration: 4,
      }),
      animate(initialRotateZ, idle.rotation.z, {
        ease: "easeOut",
        duration: 4,
      }),
      animate(translateY, idle.position.y, {
        ease: "easeOut",
        duration: 4,
      }),
    ]);
    setHasEntered(true);
  }, [idle, initialRotateX, initialRotateY, initialRotateZ, translateY]);

  useEffect(() => {
    if (hasMeasured && modelReady && !hasEntered) {
      void performEntryAnimation();
    }
  }, [hasMeasured, modelReady, hasEntered, performEntryAnimation]);

  return (
    <div
      className={cn(
        "h-[450px]",
        "relative",
        hasEntered ? "overflow-visible" : "overflow-hidden"
      )}
    >
      <div
        className={cn(
          // '-inset-12 px-12',
          "absolute -inset-y-14 inset-x-0",
          "box-border px-8",
          "pointer-events-none [&>div]:!pointer-events-none"
        )}
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{
              fov: 20,
            }}
          >
            <Environment
              background={false}
              environmentIntensity={1}
              environmentRotation={[0, Math.PI / 2, 0]}
              files="/3d/environment.hdr"
            />

            {/* <Bounds fit clip observe margin={boundsMargin} maxDuration={0}> */}
            <Model
              onReady={onModelReady}
              ready={modelReady}
              scale={scale}
              rotation={{
                x: hasEntered ? pointerRotateX : initialRotateX,
                y: hasEntered ? pointerRotateY : initialRotateY,
                z: initialRotateZ,
              }}
              position={{
                y: translateY,
              }}
            />
            {/* </Bounds> */}
          </Canvas>
        </Suspense>
      </div>
      <motion.div
        ref={containerRef}
        className={cn(
          "size-full",
          "rounded-6xl",
          "bg-gray-100 dark:bg-gray-925"
        )}
        onPointerMove={onPointerMove}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      />
    </div>
  );
};
