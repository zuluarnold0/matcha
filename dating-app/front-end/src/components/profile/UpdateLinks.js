import React from 'react';

const UpdateLinks = () => {
    return (
        <div className="under-cover">
            <button type="button" className="update-profile" onClick={this.handleCity}>
                <FaPencilAlt/> city
            </button>
            <Link style={{ textDecoration: 'none' }} to={'/update/'+ auth.uid}>
                <div className="update-profile">
                    <FaPencilAlt/> prof
                </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={'/upload/'+ auth.uid}>
                <div className="update-profile">
                    < FaArrowCircleUp/> pics
                </div>
            </Link>
        </div>
    )
}

export default UpdateLinks;
