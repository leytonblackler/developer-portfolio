/* eslint-disable react/no-unknown-property -- Required to all three.js props */
import { type ReactNode } from "react";
import { type Mesh as MeshNode, type Object3D, type Material } from "three";

const isMeshNode = (node?: Object3D): node is MeshNode => {
  return node?.type === "Mesh";
};

export const Mesh = ({
  node,
  material,
}: {
  node: Object3D;
  material: Material;
}): ReactNode =>
  isMeshNode(node) ? (
    <mesh
      castShadow
      receiveShadow
      geometry={node.geometry}
      material={material}
    />
  ) : null;
