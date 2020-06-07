import React from 'react';
import UpdateNames from '../update/UpdateNames';
import UpdatePreference from '../update/UpdatePreference';
import UpdateInfoContainer from '../update/UpdateInfoContainer';

const UpdateLinks = ({ showNamesModal, updateNames, closeNamesModal, showPrefModal, updatePref, closePrefModal, showInfoModal, updateInfo, closeInfoModal }) => {
    return (
        <div className="links__bar">

            {/* Update Name */}
            <button type="button" className="edit__profile" onClick={updateNames}>
                <span className="fas fa-pen">names</span> 
            </button>
            {
                showNamesModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closeNamesModal} className="close">&times;</span>
                        <div className="update__important">
                            <div className="update__box">
                                <UpdateNames />
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }

            {/* Update Preference */}
            <button type="button" className="edit__profile" onClick={updatePref}>
                <span className="fas fa-pen">pref</span>  
            </button>
            {
                showPrefModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closePrefModal} className="close">&times;</span>
                        <div className="update__important">
                            <div className="update__box">
                                <UpdatePreference/>
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }

            {/*Update Info*/}
            <button type="button" className="edit__profile" onClick={updateInfo}>
                <span className="fas fa-pen">info</span>  
            </button>
            {
                showInfoModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closeInfoModal} className="close">&times;</span>
                        <div className="update__important">
                            <div className="update__box">
                                <UpdateInfoContainer />
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}

export default UpdateLinks;
