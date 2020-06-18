import React, { Component } from 'react';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';

class UserDetails extends Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    continue = (event) => {
        event.preventDefault();
        if(this.props.validateDetails())
            this.props.nextStep();
        else
            this.props.currentStep();
    }
    render () {
        const { error_msg, handleChange, age, gender, sexpref } = this.props;
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
                                value={gender}
                                onChange={handleChange}
                            >
                                <option value="" >Choose...</option>
                                <option value="bisexual">Bisexual</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <p>Preference</p>
                            <select
                                className="form-control form-control-sm mb-2"
                                name="sexpref"
                                value={sexpref}
                                onChange={handleChange}
                            >
                                <option value="" >Choose...</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <div >
                                <p>Age</p>
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm mb-2"
                                    name="age"
                                    value={age}
                                    placeholder="Enter your age"
                                    onChange={handleChange}
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
                            <br/><br/>
                            <Link className="success__links" to="/login"><span>Go to Login</span></Link><br/>
                            {
                                error_msg ? <p className="error__msg">
                                    { error_msg }
                                </p> : ''
                            }
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default UserDetails;
