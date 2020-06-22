import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = ({ user, showEmailModal, showPasswordModal, showUploadModal, showCityModal, closeEmailModal, closePasswordModal, closeUploadModal, closeCityModal, updateEmail, updatePassword, uploadPics, updateCity }) => {
    return (
        <div className="profile__content">
            <ProfileInfo
                closeEmailModal={closeEmailModal}
                showEmailModal={showEmailModal}
                updateEmail={updateEmail}
                    
                closePasswordModal={closePasswordModal}
                showPasswordModal={showPasswordModal}
                updatePassword={updatePassword}

                updateCity={updateCity}
                showCityModal={showCityModal}
                closeCityModal={closeCityModal}

                uploadPics={uploadPics}
                showUploadModal={showUploadModal}
                closeUploadModal={closeUploadModal}

                user={user}
            />
            <MyHistory />
        </div>
    )
}

export default ProfileContent;
