import React from 'react';
import "./Nav.css";
import {  NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav-ba">
            <ul>
                <div className="push-nav-start">
                    <li>
                        <NavLink className="logo-matcha" to="/">Matcha</NavLink>
                    </li>
                </div>
                <div className="push-nav-end">
                    <li>
                        <NavLink to="/profile" className="nav-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS" alt="img"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><span className="nav-tags fas fa-house-user"></span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat"><span className="nav-tags fas fa-envelope"></span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/news"><span className="nav-tags fas fa-bell"></span></NavLink>
                    </li>
                    <li>
                        <Link  to="/login" className="nav-logout nav-tags fas fa-power-off"></Link><br/>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;
