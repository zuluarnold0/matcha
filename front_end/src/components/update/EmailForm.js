import React from 'react';

const EmailForm = ({ handleEmailSubmit, handleInputChange, email, email_err_message }) => {
    return (
        <div>
            <form onSubmit={handleEmailSubmit}>
                <h5 className="profile__heading">Update Email</h5>
                <div className="form-group">
                    <span className="form__title">Email</span><br/>
                    <input
                        type="text"
                        className="form-control inputField"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                {
                    email_err_message ? <div><br />
                        <p className="error__msg">{ email_err_message }</p>
                    </div> : ''
                }
            </form>
        </div>
    )
}

export default EmailForm;
