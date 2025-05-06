import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SpinningCube() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}