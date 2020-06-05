import React from 'react';
import Tag from './Tag';

const ProfileForm = ({ containerStyle, inputStyle, onDeleteTag, onKeyUp, invalid_input, tags }) => {
    var tags_ = tags && tags.map((tag, i) => {
        return <Tag onDeleteTag={onDeleteTag} key={i} tag={tag}/>
    });
    return (
        <div>
            <form className="profile__form" >
                <h5 className="profile__heading">Edit Profile</h5>
                <span className="form__title">Firstname</span><br/>
                <div className="form-group">
                    <input
                        type="text" 
                        className="form-control"
                        name="firstname" 
                        placeholder="First Name.."
                    />
                </div>
                <span className="form__title">Lastname </span><br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name="lastname" 
                        placeholder="Last Name"
                    />
                </div>
                <span className="form__title">Username</span><br/>
                <div className="form-group">
                    <input
                        type="text" 
                        className="form-control" 
                        name="username" 
                        placeholder="User Name"
                    />
                </div>
                <span className="form__title">Gender</span><br/>
                <select
                    className="form-control form-control-sm mb-2"
                    name="gender"
                >
                    <option value="">Choose...</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select><br/>
                <span className="form__title">Preference</span><br/>
                <select
                    className="form-control form-control-sm mb-2"
                    name="sexPref"
                >
                    <option value="">Choose...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <div >
                    <span className="form__title">Age</span><br/>
                    <input 
                        type="text" 
                        className="form-control form-control-sm mb-2"
                        name="age" 
                        placeholder="Enter your age"
                    />
                </div>
                <br/>
                <span className="form__title">Enter any from the following TAGS</span><br/>
                <span className="form__tags"> art, photography, coding, gym, music </span><br />
                <div className="wrong__input">{ invalid_input }</div>
                <div style={containerStyle}>
                    { tags_ }
                    <input className="form-control" style={inputStyle} onKeyUp={ (e) => onKeyUp(e) } type="text" placeholder="Type tag name and press SPACE..." />
                    <br/>
                </div>
                <div>
                    <br/>
                    <span className="form__title">Biography</span><br/>
                    <textarea
                        className="form-control"
                        type="text"
                        name="bio"
                        placeholder="Write about yourself..."
                    />
                </div><br/>
                <button type="submit" className="btn btn-sm btn-warning">Save</button>
                <div className="update__err">
                    error encountered
                </div>
            </form>
        </div>
    )
}

export default ProfileForm
