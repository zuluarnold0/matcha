import React from 'react';
import Tag from './Tag';

const UpdateInfo = ({ containerStyle, inputStyle, onDeleteTag, onKeyUp, invalid_input, tags }) => {
    var tags_ = tags && tags.map((tag, i) => {
        return <Tag onDeleteTag={onDeleteTag} key={i} tag={tag}/>
    });
    return (
        <div>
            <form className="profile__form" >
                <h5 className="profile__heading">Update Info</h5>
                <span className="form__title">Enter any from the following TAGS</span><br/>
                <span className="form__tags"> art, photography, coding, gym, music </span><br />
                <div className="wrong__input">{ invalid_input }</div>
                <div style={containerStyle}>
                    { tags_ }
                    <input className="form-control" style={inputStyle} onKeyUp={ (e) => onKeyUp(e) } type="text" placeholder="Type tag name and press SPACE..." />
                    <br/>
                </div>
                <div>
                    <span className="form__title">Biography</span><br/>
                    <textarea
                        className="form-control"
                        type="text"
                        name="bio"
                        placeholder="Write about yourself..."
                    />
                </div><br/>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                <div className="update__err">
                    error encountered
                </div>
            </form>
        </div>
    )
}

export default UpdateInfo;
