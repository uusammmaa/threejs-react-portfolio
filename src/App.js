import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavBar from './NavBar';
import SpinningCube from './SpinningCube';
import ComplexScene from './ComplexScene';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Canvas style={{ height: '80vh', background: '#272727' }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} />
                            <SpinningCube />
                            <OrbitControls />
                        </Canvas>
                    }
                />
                <Route
                    path="/complex"
                    element={
                        <Canvas style={{ height: '80vh', background: '#111' }}>
                            <ComplexScene />
                            <OrbitControls enableZoom={false} />
                        </Canvas>
                    }
                />
            </Routes>
        </>
    );
}

export default App;