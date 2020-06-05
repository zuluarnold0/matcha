import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <div>
            <header className="app__header">
                <label htmlFor="check">
                    <i className="fas fa-bars" id="sidebar_btn"></i>
                </label>
                <div className="left_area">
                    <h3>Matcha <span>Dating</span></h3>
                </div>
                <div className="right_area">
                    <Link  to="/login" className="logout_btn fas fa-power-off"></Link>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;
