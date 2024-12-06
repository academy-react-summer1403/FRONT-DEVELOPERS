import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React, { useRef } from "react";

const BackDrop = () => {
  const shadows = useRef(null);
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={2}
        intensity={0.2}
        ambient={0.25}
        position={[3, 3, -10]}
      />
      <RandomizedLight
        amount={7}
        radius={1}
        intensity={0.45}
        ambient={2.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
