import React from 'react';
import UploadDetails from './UploadDetails';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const UploadImages = ({ onUploadImage1 , onUploadImage2, onUploadImage3, onUploadImage4 }) => {
    return (
        <div>
            <Nav/>
            <div className="upload_outer_box">
                <div className="upload_inner_box">
                    <UploadDetails
                        onUploadImage1={onUploadImage1}
                        onUploadImage2={onUploadImage2}
                        onUploadImage3={onUploadImage3}
                        onUploadImage4={onUploadImage4}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UploadImages;