import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav style={{ padding: '1rem', background: '#202020' }}>
            <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
            <Link to="/complex" style={{ color: '#fff' }}>Complex Scene</Link>
        </nav>
    );
}