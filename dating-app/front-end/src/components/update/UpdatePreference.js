import React from 'react';

const UpdatePreference = () => {
    return (
        <div>
            <form className="profile__form" >
                <h5 className="profile__heading">Update Preference</h5>
                <span className="form__title">Gender</span><br/>
                <select
                    className="form-control form-control-sm mb-2"
                    name="gender"
                >
                    <option value="">Choose...</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
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
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                <div className="update__err">
                    error encountered
                </div>
            </form>
        </div>
    )
}

export default UpdatePreference;