import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Fragment, Suspense, useMemo } from "react";
import { Experience } from "./Experience";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function PhysicApp() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <div className="h-[500px]">
      <KeyboardControls map={map}>
        <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
          <color attach="background" args={["#ffffff"]} />
          <Suspense>
            <Physics debug>
              <Experience />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default PhysicApp;
