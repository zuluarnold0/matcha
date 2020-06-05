import React from 'react';
import { Link } from 'react-router-dom';

const UpdateLinks = ({ show, updateCity, closeModal }) => {
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
            <Link style={{ textDecoration: 'none' }} to={'/upload/'+ 1}>
                <button type="button" className="edit__profile">
                    <span className="fas fa-pen">pics</span>  
                </button>
            </Link>
        </div>
    )
}

export default UpdateLinks;
