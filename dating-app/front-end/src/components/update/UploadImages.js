import React, { Component } from 'react';
import UploadDetails from './UploadDetails';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

class UploadImages extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="upload_outer_box">
                    <div className="upload_inner_box">
                        <UploadDetails/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default UploadImages;