import React from 'react';
import UserProfile from './UserProfile';

const ShowUser = ({ wasILiked, didILike, user, viewed_user }) => {
    return (
        <UserProfile 
            wasILiked={wasILiked}
            didILike={didILike}
            user={user}
            viewed_user={viewed_user}
        />
    )
}

export default ShowUser;

