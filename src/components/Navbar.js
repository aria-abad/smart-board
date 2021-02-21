import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>NPV Lab Projects</h1>
            <div className="links">
                <Link to="/">Projects</Link>
                <Link to="/create">New Project</Link>
            </div>
        </nav>
    )
}