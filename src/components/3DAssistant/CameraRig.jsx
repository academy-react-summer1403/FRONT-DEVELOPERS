import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model'
import { useProgress ,Html, Center, ScrollControls} from '@react-three/drei'
import BackDrop from './BackDrop'


const Loader =()=>{
  const {progress , active}=useProgress()
  return <Html center>{progress.toFixed(1)}</Html>
}

const CameraRig = () => {
  return (
    
    <Canvas gl={{antialias: true}} dpr={[1, 1.5]}
      className='w-full max-w-full h-full transition-all ease-in absolute'
    >
      <directionalLight position={[-5,-5,5]}  intensity={4}/>
      <Suspense fallback={<Loader/>}>
        <ScrollControls damping={2} pages={4}>
                   <Model />
        </ScrollControls>
      </Suspense>

    </Canvas>
      
  )
}

export default CameraRig