import React from 'react';

const PasswordForm = ({ handleInputChange, handlePassword, passwd_err_message }) => {
    return (
        <div>
            <form onSubmit={handlePassword}>
                <h5 className="profile__heading">Update Password</h5>
                <div className="form-group">
                    <span className="form__title">Password</span><br/>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <span className="form__title">Confirm Password</span><br/>
                    <input
                        type="password"
                        className="form-control"
                        name="cpassword"
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                {
                    passwd_err_message ? <div><br />
                        <p className="error__msg">{ passwd_err_message }</p>
                    </div> : ''
                }
            </form>
        </div>
    )
}

export default PasswordForm;
