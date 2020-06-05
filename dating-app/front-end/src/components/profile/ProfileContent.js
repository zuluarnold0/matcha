import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = ({ showEmailModal, showPasswordModal, closePasswordModal, closeEmailModal, updateEmail, updatePassword }) => {
    return (
        <div className="profile__content">
            <ProfileInfo
                showPasswordModal={showPasswordModal}
                showEmailModal={showEmailModal}
                closeEmailModal={closeEmailModal}
                closePasswordModal={closePasswordModal}
                updateEmail={updateEmail}
                updatePassword={updatePassword}
            />
            <MyHistory />
        </div>
    )
}

export default ProfileContent;
