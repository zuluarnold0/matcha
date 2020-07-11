import React from 'react';

const UploadDetails = ({ onUploadImage1 , onUploadImage2, onUploadImage3, onUploadImage4 }) => {
    return (
        <div >
            <div className="upload__container">
                <span className="form__title">Upload Picture 1</span><br/>
                <div className="form-group image__upload">
                    <input
                        type="file"
                        className="form-control-file mb2"
                        onChange={onUploadImage1}
                    />
                </div>
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
            </div>
        </div>
    )
}

export default UploadDetails;
