import React, { Component } from 'react';
import imgP from "./images/profile.jpg";

class UserDetails extends Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }
    render () {
        const { handleChange } = this.props;
        return (
            <div>
                <div className="bg">
                    <div className="register-box box__">
                        <img src={imgP} alt="img" className="avatar"/>
                        <h1>USER DETAILS</h1>
                        <form className="user__details">
                            <p>Gender</p>
                            <select
                                className="form-control form-control-sm mb-2"
                                name="gender"
                                handleChange={handleChange}
                            >
                                <option >Choose...</option>
                                <option value="bisexual">Bisexual</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <p>Preference</p>
                            <select
                                className="form-control form-control-sm mb-2"
                                name="sexPref"
                                handleChange={handleChange}
                            >
                                <option >Choose...</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <div >
                                <p>Age</p>
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm mb-2"
                                    name="age"
                                    placeholder="Enter your age"
                                    handleChange={handleChange}
                                />
                            </div>
                            <button
                                className="continue__btn"
                                type="submit"
                                name="submit"
                                onClick={this.continue}
                            >CONTINUE</button>
                            <button
                                className="back__btn"
                                type="submit"
                                name="submit"
                                onClick={this.back}
                            >GO BACK</button>
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default UserDetails;
