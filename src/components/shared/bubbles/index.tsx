"use client";

import React, {
  type FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  Fragment,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useAnimate } from "framer-motion";
import { clamp, pick } from "lodash";
import { useEventListener, useInterval } from "usehooks-ts";
import useMeasure from "react-use-measure";
import { mergeRefs } from "react-merge-refs";
import { useScrollMotionValues } from "../smooth-scroller/use-scroll-motion-values";
import { useIsCardAnimating } from "../card/use-is-card-animating";
import {
  IDLE_SPACING,
  ACTIVE_SPACING,
  BOUNDS_PADDING,
  HOVER_SCALE,
} from "./constants";
import { type BubbleNode, type BubbleData } from "./types";
import { createNodes } from "./utils/create-nodes";
import { evaluateRadius } from "./utils/evaluate-radius";
import { BubbleTooltip } from "./components/tooltip";
import { d3 } from "@/utils/d3";
import { forceBounds } from "@/utils/d3/force-bounds";
import { cn } from "@/utils/styling/cn";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";
import { useIsPageAnimating } from "@/components/page-animation/use-is-page-animating";

interface BubblesProps {
  activate: boolean;
  data: BubbleData[];
}

// TODO: Fade other bubbles on hover, but not when dragging
// TODO: Hide tooltip when dragging

/**
 * Displays the provided data set as interactive bubbles.
 */
export const Bubbles: FunctionComponent<BubblesProps> = ({
  activate,
  data,
}) => {
  /**
   * Create a general ref for the container element.
   */
  const containerRef = useRef<HTMLDivElement>();

  /**
   * Measure the bounding client rect of the container element.
   */
  const [measureContainerRef, containerRect, measureContainer] = useMeasure();

  /**
   * If either the width or height of the container is 0, it is assumed that
   * the bounding client rect of the container has not yet been measured.
   */
  const containerMeasured = useMemo<boolean>(
    () => containerRect.width !== 0 && containerRect.height !== 0,
    [containerRect.width, containerRect.height]
  );

  /**
   * Access whether the page is currently animating.
   */
  const pageIsAnimating = useIsPageAnimating();

  /**
   * Access whether the card is currently animating.
   */
  const cardIsAnimating = useIsCardAnimating();

  /**
   * Re-measure the container every 50 milliseconds while the page or card that
   * the bubbles are contained within are animating.
   */
  useInterval(measureContainer, pageIsAnimating || cardIsAnimating ? 50 : null);

  /**
   * Re-measure the container once both the page and the card that the bubbles
   * are contained within have completed their animations, to ensure any
   * trailing difference is accounted for since the last interval invocation.
   */
  useEffect(() => {
    if (pageIsAnimating && !cardIsAnimating) {
      measureContainer();
    }
  }, [pageIsAnimating, cardIsAnimating, measureContainer]);

  /**
   * Re-measure the container when the page is scrolled.
   */
  useScrollMotionValues(ScrollInstanceId.Main, {
    onChangeY: () => {
      measureContainer();
    },
  });

  /**
   * Access the imperative animation function for Framer Motion.
   */
  const [_, animate] = useAnimate();

  /**
   * Determine the total number of bubbles to render based on the length of the
   * provided data.
   */
  const totalBubbles = useMemo<number>(() => data.length, [data]);

  /**
   * Determine the maximum possible importance value from the provided data
   * (most important).
   */
  const minImportance = useMemo<number>(
    () => Math.min(...data.map(({ importance }) => importance)),
    [data]
  );

  /**
   * Determine the maximum possible importance value from the provided data
   * (least important).
   */
  const maxImportance = useMemo<number>(
    () => Math.max(...data.map(({ importance }) => importance)),
    [data]
  );

  /**
   * The maximum radius that a bubble may be in an idle state.
   */
  const maxIdleBubbleRadius = useMemo<number | null>(() => {
    /**
     * Return as null if the container element has not yet been measured.
     */
    if (!containerMeasured) {
      return null;
    }

    /**
     * Calculate the maximum size based on the current surface area of the
     * container and the number of bubbles to render.
     */
    const max =
      (Math.min(containerRect.width, containerRect.height) * 0.25) / 2;
    const surfaceArea = containerRect.width * containerRect.height;
    const maxArea = surfaceArea / totalBubbles;
    const maxRadius = (Math.sqrt(maxArea) / 2 - IDLE_SPACING * 2) * 0.75;
    return Math.min(max, maxRadius);
  }, [
    containerMeasured,
    containerRect.width,
    containerRect.height,
    totalBubbles,
  ]);

  /**
   * The maximum radius that a bubble may be in at any given time.
   */
  const maxBubbleRadius = useMemo<number | null>(() => {
    /**
     * Return as null if the maximum idle bubble radius has not yet been
     * calculated.
     */
    if (!maxIdleBubbleRadius) {
      return null;
    }

    /**
     * Calculate the maximum bubble radius as the size of the maximum idle
     * radius when hovered on.
     */
    return maxIdleBubbleRadius * HOVER_SCALE;
  }, [maxIdleBubbleRadius]);

  /**
   * References to the nodes in the simulation.
   */
  const [nodes, setNodes] = useState<BubbleNode[] | null>(null);

  /**
   * References to the current state of the nodes in the simulation that are to
   * be rendered.
   */
  const [renderedNodes, setRenderedNodes] = useState<BubbleNode[]>([]);

  /**
   * Whether the simulation is currently active.
   */
  const [simulationActive, setSimulationActive] = useState<boolean>(false);

  /**
   * Handle invoking the simulation.
   */
  const startSimulation = useCallback(() => {
    setSimulationActive(true);
  }, []);

  /**
   * Start the simulation when the activation prop becomes true, and the
   * simulation is not already active.
   */
  useEffect(() => {
    if (activate && !simulationActive) {
      startSimulation();
    }
  }, [activate, simulationActive, startSimulation]);

  /**
   * Create the nodes from the data once the container has been measured.
   */
  useEffect(() => {
    if (containerMeasured && nodes === null) {
      setNodes(
        createNodes({
          data,
          containerWidth: containerRect.width,
          containerHeight: containerRect.height,
        })
      );
    }
  }, [
    containerMeasured,
    containerRect.width,
    containerRect.height,
    nodes,
    data,
  ]);

  /**
   * Start and update the simulation as required.
   */
  useEffect(() => {
    if (
      !simulationActive ||
      !containerRef.current ||
      containerRect.width === 0 ||
      containerRect.height === 0 ||
      nodes === null ||
      !maxIdleBubbleRadius ||
      !maxBubbleRadius
    ) {
      return;
    }

    /**
     * Determine if the container is in a vertical orientation.
     */
    const isVertical = containerRect.width < containerRect.height;

    /**
     * Create a force along the x axis to push the nodes towards the horizontal
     * center of the container.
     */
    const horizontalForce = d3
      .forceX()
      .strength(isVertical ? 0.1 : 0.05)
      .x(containerRect.width / 2);

    /**
     * Create a force along the y axis to push the nodes towards the vertical
     * center of the container.
     */
    const verticalForce = d3
      .forceY()
      .strength(isVertical ? 0.05 : 0.1)
      .y(containerRect.height / 2);

    /**
     * Create a collision force between nodes to prevent the nodes from
     * overlapping.
     */
    const forceCollide = d3
      .forceCollide<BubbleNode>()
      .strength(0.5)
      .radius(
        ({ radius, collisionSpacing }) => radius.get() + collisionSpacing.get()
      )
      .iterations(5);

    /**
     * Creating a bounding force for the container to prevent the nodes from
     * moving outside the container.
     */
    const boundingForce = forceBounds()
      .minX(maxBubbleRadius)
      .maxX(containerRect.width - maxBubbleRadius)
      .minY(maxBubbleRadius)
      .maxY(containerRect.height - maxBubbleRadius)
      .padding(BOUNDS_PADDING)
      .strength(1);

    /**
     * Create the force simulation.
     */
    const simulation = d3
      .forceSimulation<BubbleNode>(nodes)
      .alphaTarget(0.3)
      .velocityDecay(0.3)

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
          maxIdleBubbleRadius,
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
      .each((node) => {
        if (!node.radius.isAnimating()) {
          node.radius.set(
            evaluateRadius({
              importance: node.importance,
              minImportance,
              maxImportance,
              maxIdleBubbleRadius,
            })
          );
        }
      });

    /**
     * Stop the simulation when the component is unmounted.
     */
    return () => {
      simulation.stop();
    };
  }, [
    simulationActive,
    containerRef,
    nodes,
    containerRect.width,
    containerRect.height,
    maxImportance,
    minImportance,
    maxIdleBubbleRadius,
    maxBubbleRadius,
    animate,
  ]);

  /**
   * A reference to a node that is being dragged.
   */
  const [draggingNode, setDraggingNode] = useState<BubbleNode | null>(null);

  /**
   * The node currently being hovered on, if there is one.
   */
  const hoveringNode = useMemo<BubbleNode | null>(
    () => renderedNodes.find(({ isHovering }) => isHovering) ?? null,
    [renderedNodes]
  );

  /**
   * Animates a node to its hovering radius.
   */
  const animateToHoverRadius = useCallback(
    (node: BubbleNode) => {
      /**
       * Ignore if the maximum bubble radius has not yet been calculated.
       */
      if (!maxIdleBubbleRadius) {
        return;
      }

      /**
       * Calculate the hovering radius for the node and perform the animation to
       * this value.
       */
      void animate(
        node.radius,
        evaluateRadius({
          importance: node.importance,
          minImportance,
          maxImportance,
          maxIdleBubbleRadius,
        }) * HOVER_SCALE,
        {
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }
      );
    },
    [animate, minImportance, maxImportance, maxIdleBubbleRadius]
  );

  /**
   * Animates a node to its idle radius.
   */
  const animateToIdleRadius = useCallback(
    (node: BubbleNode) => {
      /**
       * Ignore if the maximum bubble radius has not yet been calculated.
       */
      if (!maxIdleBubbleRadius) {
        return;
      }

      /**
       * Calculate the idle radius for the node and perform the animation to
       * this value.
       */
      void animate(
        node.radius,
        evaluateRadius({
          importance: node.importance,
          minImportance,
          maxImportance,
          maxIdleBubbleRadius,
        }),
        {
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }
      );
    },
    [animate, minImportance, maxImportance, maxIdleBubbleRadius]
  );

  /**
   * Animates a node to its active collision spacing (when being pressed or
   * dragged).
   */
  const animateToActiveSpacing = useCallback(
    (node: BubbleNode) => {
      void animate(node.collisionSpacing, ACTIVE_SPACING, {
        type: "spring",
        bounce: 0,
        duration: 1.2,
      });
    },
    [animate]
  );

  /**
   * Animates a node to its idle collision spacing.
   */
  const animateToIdleSpacing = useCallback(
    (node: BubbleNode) => {
      void animate(node.collisionSpacing, IDLE_SPACING, {
        type: "spring",
        bounce: 0,
        duration: 1.2,
      });
    },
    [animate]
  );

  /**
   * Resets the state of the node that is currently being dragged.
   */
  const resetDraggingNode = useCallback(() => {
    if (draggingNode) {
      /**
       * Clear the cursor styling on the root element.
       */
      document.documentElement.style.cursor = "auto";

      /**
       * Set that the node is no longer being pressed or dragged.
       */
      draggingNode.isPressed = false;
      draggingNode.isDragging = false;

      /**
       * Clear the fixed positioning of the node.
       */
      draggingNode.fx = null;
      draggingNode.fy = null;

      /**
       * Clear the dragging origin of the node.
       */
      draggingNode.dragOrigin = null;

      /**
       * Animate the node's radius back to its idle size, unless the cursor is
       * still on the node after dragging.
       */
      if (!draggingNode.isHovering) {
        animateToIdleRadius(draggingNode);
      }

      /**
       * Animate the node's collision spacing to its idle size.
       */
      animateToIdleSpacing(draggingNode);

      /**
       * Clear the reference to the node being dragged from state.
       */
      setDraggingNode(null);
    }
  }, [draggingNode, animateToIdleRadius, animateToIdleSpacing]);

  /**
   * Handle clicking on a node.
   * Note that this will also be invoked if releasing the cursor after dragging
   * a node, and the cursor is still on the node.
   */
  const onClickNode = useCallback(
    (node: BubbleNode) => {
      if (node.isDragging) {
        /**
         * Reset the currently dragged node if the node is being dragged.
         */
        resetDraggingNode();
      } else {
        /**
         * If the click event was invoked without the node being dragged, open
         * a new tab with the node's applicable URL.
         */
        window.open(node.href, "_blank")?.focus();
      }
    },
    [resetDraggingNode]
  );

  /**
   * Handle the cursor entering the node.
   */
  const onMouseEnterNode = useCallback(
    (node: BubbleNode) => {
      /**
       * Ignore if there is a node already being dragged that is not the
       * current node.
       */
      if (draggingNode && draggingNode.id !== node.id) {
        return;
      }

      /**
       * Set that the node is being hovered on.
       */
      node.isHovering = true;

      /**
       * Animate the node to its hovering radius, unless it is already being
       * dragged.
       */
      if (!node.isDragging) {
        animateToHoverRadius(node);
      }
    },
    [draggingNode, animateToHoverRadius]
  );

  /**
   * Handle the cursor leaving the node.
   */
  const onMouseLeaveNode = useCallback(
    (node: BubbleNode) => {
      /**
       * Set that the node is no longer being hovered on or pressed.
       */
      node.isHovering = false;

      /**
       * Ignore if the node is currently being dragged.
       */
      if (node.isDragging) {
        return;
      }

      /**
       * If the node was pressed, reset the pressed state and any fixed
       * positioning.
       */
      if (node.isPressed) {
        node.isPressed = false;
        node.fx = null;
        node.fy = null;
      }

      /**
       * Animate the radius of the node back to its idle size.
       */
      animateToIdleRadius(node);

      /**
       * Animate the node's collision spacing to its idle size.
       */
      animateToIdleSpacing(node);
    },
    [animateToIdleRadius, animateToIdleSpacing]
  );

  /**
   * Handle the cursor being pressed on a node.
   */
  const onMouseDownNode = useCallback(
    (node: BubbleNode, event: ReactMouseEvent<SVGCircleElement>) => {
      /**
       * Prevent the default behavior to avoid text selection across the page
       * while nodes are being dragged.
       */
      event.preventDefault();

      /**
       * Set that the node is being pressed.
       */
      node.isPressed = true;

      /**
       * Fix the node to its current position to avoid it moving as the radius
       * decreases.
       */
      node.fx = node.x;
      node.fy = node.y;

      /**
       * Animate the node radius to its idle size.
       */
      animateToIdleRadius(node);

      /**
       * Animate the node's collision spacing to its active size.
       */
      animateToActiveSpacing(node);
    },
    [animateToIdleRadius, animateToActiveSpacing]
  );

  /**
   * Handle the cursor being released on a node.
   */
  const onMouseUpNode = useCallback(
    (node: BubbleNode) => {
      /**
       * Set that the node is no longer being pressed.
       */
      node.isPressed = false;

      if (node.isHovering) {
        /**
         * If the node is still being hovered on when the cursor is released,
         * animate the node to its hovering radius.
         */
        animateToHoverRadius(node);
      } else {
        /**
         * Otherwise, animate the node to its idle radius.
         */
        animateToIdleRadius(node);
      }

      /**
       * Animate the node's collision spacing to its idle size.
       */
      animateToIdleSpacing(node);
    },
    [animateToIdleSpacing, animateToHoverRadius, animateToIdleRadius]
  );

  /**
   * Handle the cursor moving over a node.
   */
  const onMouseMoveNode = useCallback(
    (node: BubbleNode, event: ReactMouseEvent<SVGCircleElement>) => {
      if (node.isPressed && !node.isDragging) {
        /**
         * Ignore if the container has not yet been measured.
         */
        if (!containerMeasured) {
          return;
        }

        /**
         * Set the global cursor style to grabbing.
         */
        document.documentElement.style.cursor = "grabbing";

        /**
         * Calculate the position of the cursor relative to the container.
         */
        const relativeX = event.clientX - containerRect.left;
        const relativeY = event.clientY - containerRect.top;

        /**
         * Calculate the offset of the cursor from the current position of the
         * node, and set it as the dragging origin on the node.
         */
        node.dragOrigin = {
          x: relativeX - (node.x ?? 0),
          y: relativeY - (node.y ?? 0),
        };

        /**
         * Set that the node is being dragged.
         */
        node.isDragging = true;

        /**
         * Set a reference to the node being dragged in state.
         */
        setDraggingNode(node);
      }
    },
    [containerMeasured, containerRect]
  );

  /**
   * Handle mouse movements anywhere on the page.
   * This is used to allow movements to be detected when dragging bubbles and
   * the cursor moves outside of the container element).
   */
  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      /**
       * Ignore if there is not currently a node being dragged, the node being
       * dragged does not have an origin set, or the container has not yet been
       * initialised.
       */
      if (
        !draggingNode?.dragOrigin ||
        !containerRef.current ||
        containerRect.width === 0 ||
        containerRect.height === 0
      ) {
        return;
      }

      /**
       * Calculate the position of the mouse relative to the container element.
       */
      const mouseX = event.clientX - containerRect.left;
      const mouseY = event.clientY - containerRect.top;

      /**
       * Calculate the threshold from the edge of the bounding box where the
       * cursor must be to move the node.
       */
      const threshold = draggingNode.radius.get() + BOUNDS_PADDING;

      /**
       * Define the limits for the x and y coordinates that the node can be
       * dragged to within the container.
       */
      const limits = {
        min: {
          x: threshold,
          y: threshold,
        },
        max: {
          x: containerRect.width - threshold,
          y: containerRect.height - threshold,
        },
      };

      /**
       * Update the fixed node position to the mouse position offset by the
       * dragging origin of the node, clamping the value to the range of the
       * limits.
       */
      draggingNode.fx = clamp(
        mouseX - draggingNode.dragOrigin.x,
        limits.min.x,
        limits.max.x
      );
      draggingNode.fy = clamp(
        mouseY - draggingNode.dragOrigin.y,
        limits.min.y,
        limits.max.y
      );
    },
    [
      draggingNode,
      containerRef,
      containerRect.left,
      containerRect.top,
      containerRect.width,
      containerRect.height,
    ]
  );

  /**
   * Handle a click occurring anywhere on the page.
   */
  const onClickDocument = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      /**
       * Ignore if the container has not yet been measured.
       */
      if (!containerMeasured) {
        return;
      }

      /**
       * Determine if the click event occurred within the bounds of the
       * container element.
       */
      const isWithinBounds =
        clientX >= containerRect.left &&
        clientX <= containerRect.right &&
        clientY >= containerRect.top &&
        clientY <= containerRect.bottom;

      /**
       * Reset the dragging node only if the click event occurred outside the
       * SVG container, or the node is no longer being hovered on.
       */
      if (!isWithinBounds || (draggingNode && !draggingNode.isHovering)) {
        resetDraggingNode();
      }
    },
    [
      containerMeasured,
      containerRect.left,
      containerRect.right,
      containerRect.top,
      containerRect.bottom,
      draggingNode,
      resetDraggingNode,
    ]
  );

  /**
   * Add event listeners to the root element.
   */
  const documentElementRef = useRef<Element>(document.documentElement);
  useEventListener("mousemove", onMouseMove, documentElementRef);
  useEventListener("mouseleave", resetDraggingNode, documentElementRef);
  useEventListener("click", onClickDocument, documentElementRef);

  return (
    <div
      className="relative size-full"
      ref={mergeRefs([containerRef, measureContainerRef])}
    >
      {renderedNodes.length ? (
        <svg className="size-full" style={{ width: "100%", height: "100%" }}>
          {renderedNodes.map((node) => {
            const {
              id,
              x,
              y,
              label,
              radius,
              iconUrl,
              iconIsCircle,
              parsedColorSet,
            } = node;
            const iconSize = (iconIsCircle ? 2 : 1.1) * radius.get();
            return (
              <Fragment key={id}>
                <BubbleTooltip
                  node={node}
                  containerPosition={pick(containerRect, ["x", "y"])}
                >
                  {label}
                </BubbleTooltip>
                <circle
                  cx={x}
                  cy={y}
                  r={radius.get()}
                  fill={parsedColorSet.dark.background.hex}
                  className={cn(
                    !draggingNode && "cursor-pointer",
                    "transition-[opacity,filter] duration-500",
                    hoveringNode !== null &&
                      draggingNode === null &&
                      !node.isHovering
                      ? "opacity-30 saturate-0"
                      : "opacity-100 saturate-100"
                  )}
                  onClick={() => {
                    onClickNode(node);
                  }}
                  onMouseEnter={() => {
                    onMouseEnterNode(node);
                  }}
                  onMouseLeave={() => {
                    onMouseLeaveNode(node);
                  }}
                  onMouseDown={(event) => {
                    onMouseDownNode(node, event);
                  }}
                  onMouseUp={() => {
                    onMouseUpNode(node);
                  }}
                  onMouseMove={(event) => {
                    onMouseMoveNode(node, event);
                  }}
                />
                <image
                  x={(x ?? 0) - iconSize / 2}
                  y={(y ?? 0) - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  xlinkHref={iconUrl}
                  className={cn(
                    "pointer-events-none",
                    "transition-[opacity,filter] duration-500",
                    hoveringNode !== null &&
                      draggingNode === null &&
                      !node.isHovering
                      ? "opacity-30 saturate-0"
                      : "opacity-100 saturate-100"
                  )}
                />
              </Fragment>
            );
          })}
        </svg>
      ) : null}
    </div>
  );
};
