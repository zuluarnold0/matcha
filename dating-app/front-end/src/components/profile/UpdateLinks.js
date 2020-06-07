import React from 'react';
import { Link } from 'react-router-dom';
import UploadImages from '../update/UploadImages';

const UpdateLinks = ({ show, updateCity, closeModal, showUpload, uploadPics, closeUploadModal }) => {
    return (
        <div className="links__bar">
            <button type="button" className="edit__profile" onClick={updateCity}>
                <span className="fas fa-pen">city</span> 
            </button>
            {
                show === true ? <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closeModal} className="close">&times;</span>
                        <p className="modalMessage">Your location was successfully updated</p>
                    </div>
                </div>
                : ""
            }
            <Link style={{ textDecoration: 'none' }} to={'/update/'+ 1}>
                <button type="button" className="edit__profile">
                    <span className="fas fa-pen">profile</span> 
                </button>
            </Link>
            <button type="button" className="edit__profile" onClick={uploadPics}>
                <span className="fas fa-pen">pics</span>  
            </button>
            {
                showUpload === true ? <div id="myModal" className="modal">
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

export default UpdateLinks;
