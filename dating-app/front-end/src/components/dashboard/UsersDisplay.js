import React from 'react';
import Card from './Card';
import './UsersDisplay.css';

const UsersDisplay = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                { /*map function*/ }
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default UsersDisplay;
