import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Fragment, Suspense, useMemo } from "react";
import { Experience } from "./Experience";
import { PiSmileyMeltingFill } from "react-icons/pi";

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
      { name: Controls.jump, keys: ["KeyQ"] },
    ],
    []
  );

  return (
    <div className="h-[400px]">
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
      
      <div className='z-[99999] absolute w-full flex flex-col mx-auto justify-center my-12 text-2xl text-secondary '>
      <PiSmileyMeltingFill className='w-12 h-12 text-secondary flex mx-auto'/>

        <p className='text-3xl text-darkgreen flex mx-auto'>
          ...  به نظر میرسد مشکلی وجود دارد ، فعلا بفرمایید بازی 
        </p>

      </div>
    </div>
  );
}

export default PhysicApp;
