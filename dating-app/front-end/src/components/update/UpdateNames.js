import React from 'react';

const UpdateNames = ({ firstname, lastname, username, handleInputChange, error_message, handleFormSubmit }) => {
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="profile__form" >
                <h5 className="profile__heading">Update Names</h5>
                <span className="form__title">Firstname</span><br/>
                <div className="form-group">
                    <input
                        type="text" 
                        className="form-control"
                        name="firstname" 
                        placeholder="First Name.."
                        value={firstname}
                        onChange={handleInputChange}
                    />
                </div>
                <span className="form__title">Lastname </span><br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name="lastname" 
                        placeholder="Last Name"
                        value={lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <span className="form__title">Username</span><br/>
                <div className="form-group">
                    <input
                        type="text" 
                        className="form-control" 
                        name="username" 
                        placeholder="User Name"
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>
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

export default UpdateNames;
