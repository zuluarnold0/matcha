import React from 'react';

const UpdateNames = () => {
    return (
        <div>
            <form className="profile__form" >
                <h5 className="profile__heading">Update Names</h5>
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
                <br />
                <button type="submit" className="btn btn-sm btn-warning">Update</button>
                <div className="update__err">
                    error encountered
                </div>
            </form>
        </div>
    )
}

export default UpdateNames;
