import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav>
            <Link className={`nav_link ${isActive("/")}`} to="/">HOME</Link>
            <Link className={`nav_link ${isActive("/aboutme")}`} to="/aboutme">ABOUT ME</Link>
            <Link className={`nav_link ${isActive("/portfolio")}`} to="/portfolio">PORTFOLIO</Link>
            <Link className={`nav_link ${isActive("/contact")}`} to="/contact">CONTACT</Link>
        </nav>
    );
}

export default Navbar;
