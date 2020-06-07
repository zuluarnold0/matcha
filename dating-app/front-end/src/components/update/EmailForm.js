import React from 'react';

const EmailForm = () => {
    return (
        <div>
            <form >
                <h5 className="profile__heading">Update Email</h5>
                <div className="form-group">
                    <span className="form__title">Email</span><br/>
                    <input
                        type="text"
                        className="form-control inputField"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                <div className="update__err">
                    error updating email!
                </div>
            </form>
        </div>
    )
}

export default EmailForm;
