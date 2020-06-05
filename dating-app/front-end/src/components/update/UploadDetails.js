import React from 'react';

const UploadDetails = () => {
    return (
        <div >
            <div className="upload__container">
                <span className="form__title">Upload Picture 1</span><br/>
                <div className="form-group image__upload">
                    <input
                        type="file"
                        className="form-control-file mb2"
                    />
                </div>
            </div>
            <div className="upload__container">
                <span className="form__title">Upload Picture 2</span><br/>
                <div className="form-group image__upload">
                    <input
                        type="file"
                        className="form-control-file mb2"
                    />
                </div>
            </div>
            <div className="upload__container">
                <span className="form__title">Upload Picture 3</span><br/>
                <div className="form-group image__upload">
                    <input
                        type="file"
                        className="form-control-file mb2"
                    />
                </div>
            </div>
            <div className="upload__container">
                <span className="form__title">Upload Picture 4</span><br/>
                    <div className="form-group image__upload">
                    <input
                        type="file"
                        className="form-control-file mb2"
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadDetails;
