/* eslint-disable func-names -- TODO */
import { type SimulationNodeDatum, type Force } from "d3-force";

export interface ForceBounds<NodeDatum extends SimulationNodeDatum>
  extends Force<NodeDatum, undefined> {
  padding: (() => number) & ((padding: number) => this);
  minX: (() => number) & ((minX: number) => this);
  maxX: (() => number) & ((maxX: number) => this);
  minY: (() => number) & ((minY: number) => this);
  maxY: (() => number) & ((maxY: number) => this);
  strength: (() => number) & ((strength: number) => this);
}

export const forceBounds = <
  NodeDatum extends SimulationNodeDatum
>(): ForceBounds<NodeDatum> => {
  let nodes: NodeDatum[] = [];
  let strength = 1;
  let padding = 0;
  let minX = -100;
  let maxX = 100;
  let minY = -100;
  let maxY = 100;

  const force: ForceBounds<NodeDatum> = () => {
    nodes.forEach((node) => {
      node.x = Math.max(node.x ?? 0, minX + padding);
      node.x = Math.min(node.x, maxX - padding);
      node.y = Math.max(node.y ?? 0, minY + padding);
      node.y = Math.min(node.y, maxY - padding);
    });
  };

  force.initialize = function (_nodes: NodeDatum[]): void {
    nodes = _nodes;
  };

  force.padding = function (_: number) {
    if (arguments.length) {
      padding = _;
      return force;
    }
    return padding;
  } as ForceBounds<NodeDatum>["padding"];

  force.minX = function (_: number) {
    if (arguments.length) {
      minX = _;
      return force;
    }
    return minX;
  } as ForceBounds<NodeDatum>["minX"];

  force.maxX = function (_: number) {
    if (arguments.length) {
      maxX = _;
      return force;
    }
    return maxX;
  } as ForceBounds<NodeDatum>["maxX"];

  force.minY = function (_: number) {
    if (arguments.length) {
      minY = _;
      return force;
    }
    return minY;
  } as ForceBounds<NodeDatum>["minY"];

  force.maxY = function (_: number) {
    if (arguments.length) {
      maxY = _;
      return force;
    }
    return maxY;
  } as ForceBounds<NodeDatum>["maxY"];

  force.strength = function (_: number) {
    if (arguments.length) {
      strength = _;
      return force;
    }
    return strength;
  } as ForceBounds<NodeDatum>["strength"];

  return force;
};
