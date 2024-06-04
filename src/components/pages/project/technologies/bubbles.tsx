"use client";

import React, {
  type FunctionComponent,
  useEffect,
  useState,
  useCallback,
  Fragment,
  useMemo,
} from "react";
import { type SimulationNodeDatum } from "d3-force";
import { useResizeDetector } from "react-resize-detector";
import { d3 } from "@/utils/d3";
import { forceBounds } from "@/utils/d3/force-bounds";

const SPACING = 5;

export interface BubbleData {
  id: string;
  label: string;
  iconUrl: string;
  iconIsCircle: boolean;
  importance: number;
  backgroundColor: string;
}

interface BubbleNode extends SimulationNodeDatum, BubbleData {
  radius: number;
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
  return data.map(
    ({ id, label, iconUrl, iconIsCircle, importance, backgroundColor }) => ({
      id,
      label,
      iconUrl,
      iconIsCircle,
      importance,
      backgroundColor,
      radius: 0,
      x: Math.random() * containerWidth,
      y: Math.random() * (maxY - minY) + minY,
    })
  );
};
// return Array.from({ length: 10 }, (_) => ({
//   radius: 0,
//   x: Math.random() * containerWidth,
//   y: Math.random() * containerHeight,
// }));

interface BubblesProps {
  data: BubbleData[];
}

const evaluateRadius = ({
  importance,
  minImportance,
  maxImportance,
  bubbleMaxRadius,
}: {
  importance: number;
  minImportance: number;
  maxImportance: number;
  bubbleMaxRadius: number;
}): number => {
  return Math.min(bubbleMaxRadius, bubbleMaxRadius * (1 / importance) * 1.5);
};

export const Bubbles: FunctionComponent<BubblesProps> = ({ data }) => {
  const {
    ref: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useResizeDetector<HTMLDivElement>();

  const totalBubbles = useMemo<number>(() => data.length, [data]);

  const minImportance = useMemo<number>(
    () => Math.min(...data.map(({ importance }) => importance)),
    [data]
  );

  const maxImportance = useMemo<number>(
    () => Math.max(...data.map(({ importance }) => importance)),
    [data]
  );

  const bubbleMaxRadius = useMemo<number | null>(() => {
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

  const [hoveredNodeId, setHoveredNodeId] = useState<BubbleNode["id"] | null>(
    null
  );

  useEffect(() => {
    console.log("hoveredNodeId", hoveredNodeId);
  }, [hoveredNodeId]);

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
      !bubbleMaxRadius
    ) {
      return;
    }

    const simulation = d3
      .forceSimulation<BubbleNode>(nodes)
      .alphaTarget(0.3) // stay hot
      .velocityDecay(0.1) // low friction
      .force(
        "x",
        d3
          .forceX()
          .strength(0.01)
          .x(containerWidth / 2)
      )
      .force(
        "y",
        d3
          .forceY()
          .strength(0.02)
          .y(containerHeight / 2)
      )
      .force(
        "collide",
        d3
          .forceCollide<BubbleNode>()
          .strength(0.5)
          .radius(
            ({ importance }) =>
              evaluateRadius({
                importance,
                minImportance,
                maxImportance,
                bubbleMaxRadius,
              }) + SPACING
          )
          .iterations(5)
      )
      .force(
        "bounds",
        forceBounds()
          .minX(bubbleMaxRadius)
          .maxX(containerWidth - bubbleMaxRadius)
          .minY(bubbleMaxRadius)
          .maxY(containerHeight - bubbleMaxRadius)
          .padding(SPACING * 2)
          .strength(1)
      )
      .on("tick", () => {
        setRenderedNodes([...nodes]);
      });

    /**
     * Select all nodes.
     */
    const nodesSelection = d3
      .select(containerRef.current)
      .selectAll("circle")
      .data(nodes);

    /**
     * Transition nodes from a radius of 0 on entry.
     */
    nodesSelection
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x ?? 0)
      .attr("cy", (d) => d.y ?? 0)
      .transition()
      .delay(Math.random() * 500)
      .duration(750)
      .attrTween("r", (d) => {
        const interpolation = d3.interpolate(
          0,
          evaluateRadius({
            importance: d.importance,
            minImportance,
            maxImportance,
            bubbleMaxRadius,
          })
        );
        return (t) => {
          d.radius = interpolation(t);
          return d.radius;
        };
      });

    /**
     * Transition nodes to their new radius when the maximum bubble size
     * changes.
     */
    nodesSelection
      .append("circle")
      .transition()
      .duration(250)
      .attrTween("r", (d) => {
        const interpolation = d3.interpolate(
          d.radius,
          (hoveredNodeId === d.id ? 1.5 : 1) *
            evaluateRadius({
              importance: d.importance,
              minImportance,
              maxImportance,
              bubbleMaxRadius,
            })
        );
        return (t) => {
          d.radius = interpolation(t);
          return d.radius;
        };
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
    bubbleMaxRadius,
    hoveredNodeId,
  ]);

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      {renderedNodes.length ? (
        <svg
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        >
          {renderedNodes.map(
            ({ id, x, y, radius, iconUrl, iconIsCircle, backgroundColor }) => {
              const iconSize = (iconIsCircle ? 2 : 1.1) * radius;
              return (
                <Fragment key={id}>
                  <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={backgroundColor}
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredNodeId(id);
                    }}
                    onMouseLeave={() => {
                      setHoveredNodeId(null);
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
                </Fragment>
              );
            }
          )}
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
