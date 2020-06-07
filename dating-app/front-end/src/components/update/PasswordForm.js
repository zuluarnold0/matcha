import React from 'react';

const PasswordForm = () => {
    return (
        <div>
            <form >
                <h5 className="profile__heading">Update Password</h5>
                <div className="form-group">
                    <span className="form__title">Password</span><br/>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                <div className="update__err">
                    password update error
                </div>
            </form>
        </div>
    )
}

export default PasswordForm;
