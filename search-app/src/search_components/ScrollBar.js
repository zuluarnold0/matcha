import React from 'react';
import Card from './Card';

const ScrollBar = ({ users }) => {
    const mapped = users.map((user, i) => {
        return <Card key={i} user={user}/>
    })
    return (
        <div className="userlist">
            { mapped }
        </div>
    )
}

export default ScrollBar;
