import React from 'react';

const ImageUpload = (props) => {
    return (
        <div className="form-group profile_image_upload">
            <input
                type="file"
                className="form-control-file mb2"
                onChange={props.onUploadProfile}
            />
        </div>
    )
}

export default ImageUpload;
