import React from 'react';
import UserProfile from './UserProfile';

const ShowUser = ({ wasILiked, didILike, user, viewed_user, show, closeModal, reportUser, showBlock, closeBlockModal, showBlockModal }) => {
    return (
        <UserProfile 
            wasILiked={wasILiked}
            didILike={didILike}
            user={user}
            viewed_user={viewed_user}
            show={show}
            closeModal={closeModal}
            reportUser={reportUser}
            showBlock={showBlock}
            closeBlockModal={closeBlockModal}
            showBlockModal={showBlockModal}
        />
    )
}

export default ShowUser;

