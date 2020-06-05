import React from 'react';
import './ScrollBar.css';

const ScrollBar = ({ children }) => {
    return (
        <div className="my_scrollable">
            { children }
        </div>
    )
}

export default ScrollBar;
