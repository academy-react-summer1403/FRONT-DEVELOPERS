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
        // انیمیشن تنها یکبار هنگام لود شدن اجرا می‌شود
        actions["Experiment"].play().isRunning = true;
        
        // اطمینان حاصل می‌کنیم که انیمیشن یکبار اجرا شده و بعد متوقف می‌شود
        return () => {
            actions["Experiment"].stop(); // اگر کامپوننت از صفحه حذف شد انیمیشن متوقف می‌شود
        }
    }, [actions])

    useFrame((state, delta) => {
        // زمان انیمیشن فقط در ابتدای بارگذاری افزایش می‌یابد
        if (animationTime < actions["Experiment"].getClip().duration) {
            setAnimationTime((prevTime) => (prevTime + delta))
        }

        // زمان انیمیشن را به انیمیشن اعمال می‌کنیم
        actions["Experiment"].time = animationTime
    })

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default Model
