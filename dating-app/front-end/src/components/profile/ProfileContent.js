import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = ({ users, user, showEmailModal, showPasswordModal, showUploadModal, showCityModal, closeEmailModal, closePasswordModal, closeUploadModal, closeCityModal, updateEmail, updatePassword, uploadPics, updateCity, city_err_msg }) => {
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

                city_err_msg={city_err_msg}
                user={user}
            />
            <MyHistory 
                user={user}
                users={users}
            />
        </div>
    )
}

export default ProfileContent;
