import React from "react";
import "../css/navbar.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="demo-Streaming-logo">
                Demo Streaming
            </a>
            <ul>
                <li className="active">
                    <a href="/login">Iniciar sesion</a>
                </li>
                <li className="active">
                    <a href="/start">Start your free trial</a>
                </li>
            </ul>
        </nav>
        
    )
}