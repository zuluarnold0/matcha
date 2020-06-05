import React from 'react';
import PasswordForm from '../update/PasswordForm';
import EmailForm from '../update/EmailForm';

const ImportantUpdates = ({ showEmailModal, showPasswordModal, closePasswordModal, closeEmailModal, updateEmail, updatePassword }) => {
    return (
        <div className="important__updates">
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
        </div>
    )
}

export default ImportantUpdates;
