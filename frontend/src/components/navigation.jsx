// Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1 className="name">Sports Paradise</h1>
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>

                </div>
            </div>
        </nav>
    );
}

export default Navigation;
