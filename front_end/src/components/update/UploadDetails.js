import React from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const UploadDetails = ({ onUploadImage1 , onUploadImage2, onUploadImage3, onUploadImage4, img1_err_msg, img2_err_msg, img3_err_msg, img4_err_msg }) => {
    return (
        <div >
            <Nav/>
                <div className="upload_outer_box">
                    <div className="upload_inner_box">
                        <div className="upload__container">
                            <span className="form__title">Upload Picture 1</span><br/>
                            <div className="form-group image__upload">
                                <input
                                    type="file"
                                    className="form-control-file mb2"
                                    onChange={onUploadImage1}
                                />
                            </div>
                            {
                                img1_err_msg ? <div><br />
                                    <p className="error__msg">{ img1_err_msg }</p>
                                </div> : ''
                            }
                        </div>
                        <div className="upload__container">
                            <span className="form__title">Upload Picture 2</span><br/>
                            <div className="form-group image__upload">
                                <input
                                    type="file"
                                    className="form-control-file mb2"
                                    onChange={onUploadImage2}
                                />
                            </div>
                            {
                                img2_err_msg ? <div><br />
                                    <p className="error__msg">{ img2_err_msg }</p>
                                </div> : ''
                            }
                        </div>
                        <div className="upload__container">
                            <span className="form__title">Upload Picture 3</span><br/>
                            <div className="form-group image__upload">
                                <input
                                    type="file"
                                    className="form-control-file mb2"
                                    onChange={onUploadImage3}
                                />
                            </div>
                            {
                                img3_err_msg ? <div><br />
                                    <p className="error__msg">{ img3_err_msg }</p>
                                </div> : ''
                            }
                        </div>
                        <div className="upload__container">
                            <span className="form__title">Upload Picture 4</span><br/>
                                <div className="form-group image__upload">
                                <input
                                    type="file"
                                    className="form-control-file mb2"
                                    onChange={onUploadImage4}
                                />
                            </div>
                            {
                                img4_err_msg ? <div><br />
                                    <p className="error__msg">{ img4_err_msg }</p>
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default UploadDetails;
