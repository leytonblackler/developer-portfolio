/* eslint-disable react/no-unknown-property -- Required to all three.js props */
"use client";

/**
 * Adapted from generation by: https://github.com/pmndrs/gltfjsx
 */

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { type ModelComponent } from "../types";
import { Mesh } from "@/utils/three";

export const PhoneModel: ModelComponent = ({
  onReady,
  ready,
  rotation,
  position,
  scale,
}) => {
  const { nodes, materials } = useGLTF("/3d/models/p8pc.glb");

  useEffect(() => {
    onReady();
  }, [onReady]);

  return !ready ? null : (
    <motion.group
      rotation={[rotation.x, rotation.y, rotation.z]}
      position={[0, position.y, 0]}
      initial={false}
      animate={{
        scale,
        transition: {
          duration: 4,
          ease: "easeOut",
          scale: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
      }}
    >
      <group position={[0, -0.077, 0.002]} scale={0.938}>
        <Mesh node={nodes.deviceback} material={materials["material.back"]} />
        <Mesh
          node={nodes.devicecamera}
          material={materials["material.camera"]}
        />
        <Mesh
          node={nodes.devicecameraglass}
          material={materials["material.camera.glass"]}
        />
        <Mesh node={nodes.devicelogo} material={materials["material.logo"]} />
        <Mesh
          node={nodes.devicescreen}
          material={materials["material.screen"]}
        />
        <Mesh node={nodes.devicebody_1} material={materials["material.body"]} />
        <Mesh
          node={nodes.devicebody_2}
          material={materials["material.body.cameraframe"]}
        />
      </group>
    </motion.group>
  );
};

useGLTF.preload("/3d/models/p8pc.glb");
