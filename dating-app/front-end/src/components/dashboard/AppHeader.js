import React from 'react';
import { Link } from 'react-router-dom';
import "../nav/Nav.css";

const AppHeader = () => {
    return (
        <nav className="nav-ba">
            
            <ul>
                <div className="push-nav-start">
                    <li>
                        <Link className="logo-matcha" to="/">Matcha</Link>
                    </li>
                    <li>
                        <label htmlFor="check">
                            <i className="fas fa-bars" id="sidebar_btn"></i>
                        </label>
                    </li>
                </div>
                <div className="push-nav-end">
                    <li>
                        <Link  to="/login" className="nav-logout nav-tags fas fa-power-off"></Link><br/>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default AppHeader;
