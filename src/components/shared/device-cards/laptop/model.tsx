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

export const LaptopModel: ModelComponent = ({
  onReady,
  ready,
  rotation,
  position,
  scale,
}) => {
  const { nodes, materials } = useGLTF("/3d/models/mblid.glb");

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
          scale: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
      }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <Mesh
            node={nodes.DAuseNOrQKyrxKl}
            material={materials.yVmFXNTCIwNkqVT}
          />
          <Mesh
            node={nodes.gkxaPoMYYRpyVMR}
            material={materials.iPZiEncThgnBMJv}
          />
          <Mesh
            node={nodes.guoofBSjCEiTIJr}
            material={materials.JjuwNKnMBUdtRLb}
          />
          <Mesh
            node={nodes.KCEhahuknsxQOxv}
            material={materials.HpEeGHRuOqfcIZU}
          />
          <Mesh
            node={nodes.mUrIWHenIQKVHcb}
            material={materials.BMKLbAPYqPmfArt}
          />
          <Mesh
            node={nodes.NdRhLFCrSxRNTxn}
            material={materials.BMKLbAPYqPmfArt}
          />
          <Mesh
            node={nodes.NgmQYtxXWDmCavo}
            material={materials.SKOFticEGTqECbB}
          />
          <Mesh
            node={nodes.NqLxSKdAypgOdPC}
            material={materials.initialShadingGroup}
          />
          <Mesh
            node={nodes.NWErafhynAfYQEz}
            material={materials.pZbDFXVUkfRwjmQ}
          />
          <Mesh
            node={nodes.piXptsgcOfaGWrM}
            material={materials.WLATjirhQCUYAAG}
          />
          <Mesh
            node={nodes.PSIiVLWbMOjTmDb}
            material={materials.SKOFticEGTqECbB}
          />
          <Mesh
            node={nodes.PTxrSKzcEmHVtif}
            material={materials.VfcxYmbOfnqunYx}
          />
          <Mesh
            node={nodes.QFFLzaWPRnuQYJR}
            material={materials.hPcehRUjcLAosED}
          />
          <Mesh
            node={nodes.QHqPxKdexBoFnAK}
            material={materials.zaEqorbaeeADKgU}
          />
          <Mesh
            node={nodes.QMBrsnrwfcVKELm}
            material={materials.VqwNZwmDotIMflD}
          />
          <Mesh
            node={nodes.QYMcPaZnXQfyXcJ}
            material={materials.NQXltfOcKPZPQdI}
          />
          <Mesh
            node={nodes.rIsAbujsARaHSub}
            material={materials.jAWKNAaRBMlZYro}
          />
          <Mesh
            node={nodes.RjGOdbHqvxkiDns}
            material={materials.lbGSuJJwEsUTzIm}
          />
          <Mesh
            node={nodes.RkSurqpnfNMQZfv}
            material={materials.zWLcvvnJhbcTEtJ}
          />
          <Mesh
            node={nodes.SjSNuZdtWKZRuoq}
            material={materials.mpJhsaJJZPPWMEX}
          />
          <Mesh
            node={nodes.SjXIFRJFXEqYDUr}
            material={materials.PCfVLhSpFVCvRmc}
          />
          <Mesh
            node={nodes.TCGsaoyNbPKzeSS}
            material={materials.yVmFXNTCIwNkqVT}
          />
          <Mesh
            node={nodes.tEHnKyDsqJuxIpz}
            material={materials.yVmFXNTCIwNkqVT}
          />
          <Mesh
            node={nodes.tEwRkclpxjXZzil}
            material={materials.UPMcPXFSRXevSGt}
          />
          <Mesh
            node={nodes.UxiDBlCRfXiMBzT}
            material={materials.zWLcvvnJhbcTEtJ}
          />
          <Mesh
            node={nodes.vivXPkdlqllUnrl}
            material={materials.XNDkEZQapqqDHpk}
          />
          <Mesh
            node={nodes.VqfccLWHjnpnmIO}
            material={materials.BMKLbAPYqPmfArt}
          />
          <Mesh
            node={nodes.WPFmzKypKbUYgQT}
            material={materials.lbGSuJJwEsUTzIm}
          />
          <Mesh
            node={nodes.wXiLpiodZWNDroe}
            material={materials.HPAOpCInJKBtaOC}
          />
          <Mesh
            node={nodes.xjTvBwZFGvSMOud}
            material={materials.hPcehRUjcLAosED}
          />
          <Mesh
            node={nodes.xlRLalLTesirCGW}
            material={materials.hPcehRUjcLAosED}
          />
          <Mesh
            node={nodes.YJMoQnvBNpTrgeH}
            material={materials.PCfVLhSpFVCvRmc}
          />
          <Mesh
            node={nodes.ZlizOzukFeXwbga}
            material={materials.kOcboIDeohDRqCf}
          />
        </group>
      </group>
      <group position={[0, -0.413, -11.346]} rotation={[Math.PI / 2, 0, 0]}>
        <Mesh node={nodes.matte} material={materials.matte} />
        <Mesh node={nodes.back_1} material={materials.blackmatte} />
        <Mesh node={nodes.back_2} material={materials.aluminium} />
      </group>
    </motion.group>
  );
};

useGLTF.preload("/3d/models/mblid.glb");
