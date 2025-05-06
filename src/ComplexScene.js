import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Text } from '@react-three/drei';

export default function ComplexScene() {
    const knotRef = useRef();
    const textRef = useRef();

    useFrame((_, delta) => {
        knotRef.current.rotation.x += delta * 0.5;
        knotRef.current.rotation.y += delta * 0.3;
        textRef.current.rotation.y -= delta * 0.2;
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} />
            <TorusKnot ref={knotRef} args={[1, 0.4, 128, 32]} castShadow>
                <meshStandardMaterial
                    attach="material"
                    color="hotpink"
                    metalness={0.6}
                    roughness={0.2}
                />
            </TorusKnot>
            <Text
                ref={textRef}
                position={[0, -2, 0]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                Hello 3D World!
            </Text>
        </>
    );
}