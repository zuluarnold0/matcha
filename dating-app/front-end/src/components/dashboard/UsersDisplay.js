import React from 'react';
import Card from './Card';
import './UsersDisplay.css';

const UsersDisplay = ({ users }) => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                {
                    users && users.map(user => {
                        return <Card key={user.id} user={user}/>;
                    })
                }
            </div>
        </div>
    )
}

export default UsersDisplay;
