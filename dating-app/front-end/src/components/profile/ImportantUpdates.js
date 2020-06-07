import React from 'react';
import PasswordForm from '../update/PasswordForm';
import EmailForm from '../update/EmailForm';
import UploadImages from '../update/UploadImages';

const ImportantUpdates = ({ showEmailModal, showPasswordModal, closePasswordModal, closeEmailModal, updateEmail, updatePassword, closeCityModal, updateCity, showCityModal, closeUploadModal, uploadPics, showUploadModal }) => {
    return (
        <div className="important__updates">

            {/*Update Password*/}
            <span className="fas fa-pen"  onClick={updatePassword}><span className="text__">Click to update Password</span></span>
            {
                showPasswordModal === true ? <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closePasswordModal} className="close">&times;</span>
                        <div className="update__important">
                            <div className="update__box">
                                <PasswordForm />
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }

            {/*Update Email */}
            <br />
            <span className="fas fa-pen"  onClick={updateEmail}><span className="text__">Click to update Email</span></span>
            {
                showEmailModal === true ? <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closeEmailModal} className="close">&times;</span>
                        <div className="update__important">
                            <div className="update__box">
                                <EmailForm />
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }

            {/*Update City*/}
            <br />
            <span className="fas fa-pen"  onClick={updateCity}><span className="text__">Click to update City</span></span>
            {
                showCityModal === true ? <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closeCityModal} className="close">&times;</span>
                        <p className="modalMessage">Your location was successfully updated</p>
                    </div>
                </div>
                : ""
            }

            {/*Update pics*/}
            <br />
            <span className="fas fa-pen"  onClick={uploadPics}><span className="text__">Click to update Pics</span></span>
            {
                showUploadModal === true ? <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closeUploadModal} className="close">&times;</span>
                        <UploadImages/>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}

export default ImportantUpdates;
