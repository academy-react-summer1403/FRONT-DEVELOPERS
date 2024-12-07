import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'

useGLTF.preload('../../../robot_playground.glb')

const Model = () => {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('../../../robot_playground.glb')
    const { actions } = useAnimations(animations, scene)
    const [animationTime, setAnimationTime] = useState(0)

    useEffect(() => {
       
        actions["Experiment"].play().isRunning = true;
        
      
        return () => {
            actions["Experiment"].stop(); 
        }
    }, [actions])

    useFrame((state, delta) => {
 
        if (animationTime < actions["Experiment"].getClip().duration) {
            setAnimationTime((prevTime) => (prevTime + delta))
        }

        
        actions["Experiment"].time = animationTime
    })

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default Model
