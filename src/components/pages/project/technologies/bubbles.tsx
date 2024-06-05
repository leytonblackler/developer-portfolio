"use client";

import React, {
  type FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { type SimulationNodeDatum } from "d3-force";
import { useResizeDetector } from "react-resize-detector";
import { MotionValue, useAnimate } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { d3 } from "@/utils/d3";
import { forceBounds } from "@/utils/d3/force-bounds";

const SPACING = 5;
const HOVER_SCALE = 1.3;

export interface BubbleData {
  id: string;
  label: string;
  href: string;
  iconUrl: string;
  iconIsCircle: boolean;
  importance: number;
  backgroundColor: string;
}

interface BubbleNode extends SimulationNodeDatum, BubbleData {
  radius: MotionValue<number>;
}

const createNodes = ({
  data,
  containerWidth,
  containerHeight,
}: {
  data: BubbleData[];
  containerWidth: number;
  containerHeight: number;
}): BubbleNode[] => {
  const minY = containerHeight * 0.25;
  const maxY = containerHeight * 0.75;
  return data.map((nodeData) => ({
    ...nodeData,
    radius: (() => {
      const radius = new MotionValue();
      radius.set(0);
      return radius;
    })(),
    x: Math.random() * containerWidth,
    y: Math.random() * (maxY - minY) + minY,
  }));
};

interface BubblesProps {
  data: BubbleData[];
}

const evaluateRadius = ({
  importance,
  minImportance,
  maxImportance,
  maxBubbleRadius,
}: {
  importance: number;
  minImportance: number;
  maxImportance: number;
  maxBubbleRadius: number;
}): number => {
  // TODO: Normalize importance value
  return Math.min(maxBubbleRadius, maxBubbleRadius * (1 / importance) * 1.5);
};

export const Bubbles: FunctionComponent<BubblesProps> = ({ data }) => {
  const {
    ref: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useResizeDetector<HTMLDivElement>();

  const [_, animate] = useAnimate();

  const totalBubbles = useMemo<number>(() => data.length, [data]);

  const minImportance = useMemo<number>(
    () => Math.min(...data.map(({ importance }) => importance)),
    [data]
  );

  const maxImportance = useMemo<number>(
    () => Math.max(...data.map(({ importance }) => importance)),
    [data]
  );

  const maxBubbleRadius = useMemo<number | null>(() => {
    if (!containerWidth || !containerHeight) {
      return null;
    }
    const max = (Math.min(containerWidth, containerHeight) * 0.25) / 2;

    const surfaceArea = containerWidth * containerHeight;

    const maxArea = surfaceArea / totalBubbles;

    const maxRadius = (Math.sqrt(maxArea) / 2 - SPACING * 2) * 0.75;

    return Math.min(max, maxRadius);
  }, [containerWidth, containerHeight, totalBubbles]);

  const [nodes, setNodes] = useState<BubbleNode[] | null>(null);

  /**
   * Animates a node to an increased size when hovering on the node begins.
   */
  const onMouseEnterNode = useCallback(
    (node: BubbleNode) => {
      void animate(node.radius, node.radius.get() * HOVER_SCALE, {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      });
    },
    [animate]
  );

  /**
   * Animates a node back to its idle size when no longer hovering on the node.
   */
  const onMouseLeaveNode = useCallback(
    (node: BubbleNode) => {
      /**
       * Ignore if the maximum bubble radius has not yet been calculated.
       */
      if (!maxBubbleRadius) {
        return;
      }

      /**
       * Animate the radius of the node back to its idle size.
       */
      void animate(
        node.radius,
        evaluateRadius({
          importance: node.importance,
          minImportance,
          maxImportance,
          maxBubbleRadius,
        }),
        {
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }
      );
    },
    [animate, minImportance, maxImportance, maxBubbleRadius]
  );

  const [renderedNodes, setRenderedNodes] = useState<BubbleNode[]>([]);

  const [simulationActive, setSimulationActive] = useState<boolean>(false);

  const startSimulation = useCallback(() => {
    setSimulationActive(true);
  }, []);

  useEffect(() => {
    if (
      containerWidth !== undefined &&
      containerHeight !== undefined &&
      nodes === null
    ) {
      setNodes(
        createNodes({
          data,
          containerWidth,
          containerHeight,
        })
      );
    }
  }, [containerWidth, containerHeight, nodes, data]);

  useEffect(() => {
    if (
      !simulationActive ||
      !containerRef.current ||
      containerWidth === undefined ||
      containerHeight === undefined ||
      nodes === null ||
      !maxBubbleRadius
    ) {
      return;
    }

    /**
     * Create a force along the x axis to push the nodes towards the horizontal
     * center of the container.
     *
     * TODO: Increase horizontal force when width of container exceeds height.
     */
    const horizontalForce = d3
      .forceX()
      .strength(0.01)
      .x(containerWidth / 2);

    /**
     * Create a force along the y axis to push the nodes towards the vertical
     * center of the container.
     *
     * TODO: Increase vertical force when height of container exceeds width.
     */
    const verticalForce = d3
      .forceY()
      .strength(0.01)
      .y(containerHeight / 2);

    /**
     * Create a collision force between nodes to prevent the nodes from
     * overlapping.
     */
    const forceCollide = d3
      .forceCollide<BubbleNode>()
      .strength(0.5)
      .radius(({ radius }) => radius.get() + SPACING)
      .iterations(5);

    /**
     * Creating a bounding force for the container to prevent the nodes from
     * moving outside the container.
     */
    const boundingForce = forceBounds()
      .minX(maxBubbleRadius)
      .maxX(containerWidth - maxBubbleRadius)
      .minY(maxBubbleRadius)
      .maxY(containerHeight - maxBubbleRadius)
      .padding(SPACING * 2)
      .strength(1);

    const simulation = d3
      .forceSimulation<BubbleNode>(nodes)
      .alphaTarget(0.3) // stay hot
      .velocityDecay(0.1) // low friction

      /**
       * Apply the horizontal force to the simulation.
       */
      .force("x", horizontalForce)

      /**
       * Apply the vertical force to the simulation.
       */
      .force("y", verticalForce)

      /**
       * Apply the collision force to the simulation.
       */
      .force("collide", forceCollide)

      /**
       * Apply the bounding force to the simulation.
       */
      .force("bounds", boundingForce)

      /**
       * Perform the necessary updates on each tick of the simulation.
       */
      .on("tick", () => {
        /**
         * Re-initialise the collision force to ensure that the current node
         * radii are used in the calculations.
         */
        forceCollide.initialize(simulation.nodes(), () => 0);

        /**
         * Update the nodes to render with the current nodes in the simulation.
         */
        setRenderedNodes([...nodes]);
      });

    /**
     * Animate the radius of each node from the initial value of 0 to its idle
     * size upon entering.
     */
    d3.select(containerRef.current)
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .each((node) => {
        /**
         * Calculate the idle radius of the node.
         */
        const idleRadius = evaluateRadius({
          importance: node.importance,
          minImportance,
          maxImportance,
          maxBubbleRadius,
        });

        /**
         * Perform the animation.
         */
        void animate(node.radius, idleRadius, {
          type: "spring",
          bounce: 0.5,
          duration: 2,
          /**
           * Randomly offset the start of the animation (between 0 and 500ms)
           * to prevent all nodes animating in at the same time.
           */
          delay: Math.random() / 2,
        });
      });

    /**
     * Update the radius of the nodes when the maximum bubble size changes (due
     * to the container element resizing).
     */
    d3.select(containerRef.current)
      .selectAll("circle")
      .data(nodes)
      .append("circle")
      .each((node) => {
        if (!node.radius.isAnimating()) {
          node.radius.set(
            evaluateRadius({
              importance: node.importance,
              minImportance,
              maxImportance,
              maxBubbleRadius,
            })
          );
        }
      });

    return () => {
      simulation.stop();
    };
  }, [
    simulationActive,
    containerRef,
    nodes,
    containerWidth,
    containerHeight,
    maxImportance,
    minImportance,
    maxBubbleRadius,
    animate,
  ]);

  const onClickNode = useCallback((node: BubbleNode) => {
    window.open(node.href, "_blank")?.focus();
  }, []);

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      {renderedNodes.length ? (
        <svg
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        >
          {renderedNodes.map((node) => {
            const {
              id,
              x,
              y,
              radius,
              href,
              iconUrl,
              iconIsCircle,
              backgroundColor,
            } = node;
            const iconSize = (iconIsCircle ? 2 : 1.1) * radius.get();
            return (
              <Link
                key={id}
                href={href}
                onClick={(event) => {
                  /**
                   * The default link behaviour must be prevent, since the high
                   * re-render rate can cause the event to be fired multiple
                   * times, causing multiple tabs to open.
                   */
                  event.preventDefault();
                  onClickNode(node);
                }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={radius.get()}
                  fill={backgroundColor}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    onMouseEnterNode(node);
                  }}
                  onMouseLeave={() => {
                    onMouseLeaveNode(node);
                  }}
                />
                <image
                  x={(x ?? 0) - iconSize / 2}
                  y={(y ?? 0) - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  xlinkHref={iconUrl}
                  className="pointer-events-none"
                />
              </Link>
            );
          })}
        </svg>
      ) : null}
      <button
        type="button"
        onClick={startSimulation}
        className="absolute left-0 top-0 z-50 bg-violet-500 p-4 text-white"
      >
        Start
      </button>
    </div>
  );
};