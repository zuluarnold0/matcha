import React from 'react';

const UpdatePreference = ({ gender, sexpref, age, error_message, handleInputChange, handlePrefSubmit }) => {
    return (
        <div>
            <form className="profile__form" onSubmit={handlePrefSubmit}>
                <h5 className="profile__heading">Update Preference</h5>
                <span className="form__title">Gender</span><br/>
                <select
                    className="form-control form-control-sm mb-2"
                    name="gender"
                    value={gender}
                    onChange={handleInputChange}
                >
                    <option value="">Choose...</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <span className="form__title">Preference</span><br/>
                <select
                    className="form-control form-control-sm mb-2"
                    name="sexpref"
                    value={sexpref}
                    onChange={handleInputChange}
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
                        value={age}
                        onChange={handleInputChange}
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                {
                    error_message ? <div><br />
                        <p className="error__msg">{ error_message }</p>
                    </div> : ''
                }
            </form>
        </div>
    )
}

export default UpdatePreference;