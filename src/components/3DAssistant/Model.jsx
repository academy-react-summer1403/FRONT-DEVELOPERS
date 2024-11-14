import {  useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

useGLTF.preload('../../../robot_playground.glb')


const Model = () => {
    const group =useRef(null)
    const{nodes , materials , animations , scene} = useGLTF('../../../robot_playground.glb')
    const {actions} =useAnimations(animations , scene)
    const scroll = useScroll();
    
    useEffect(() => {
        actions["Experiment"].play().paused=true
    }, [])

    useFrame(()=>(   
        actions["Experiment"].time=(actions["Experiment"].getClip().duration * scroll.offset)/6)
    )
    
    
    
    return (
    <group ref={group}>
        <primitive  object={scene}/>
    </group>
  )
}

export default Model