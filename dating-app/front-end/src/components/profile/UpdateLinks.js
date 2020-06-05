import React from 'react';
import { Link } from 'react-router-dom';

const UpdateLinks = () => {
    return (
        <div className="links__bar">
            <button type="button" className="edit__profile">
                <span className="fas fa-pen">city</span> 
            </button>
            <Link style={{ textDecoration: 'none' }} to={'/update/'+ 1}>
                <button type="button" className="edit__profile">
                    <span className="fas fa-pen">prof</span> 
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
