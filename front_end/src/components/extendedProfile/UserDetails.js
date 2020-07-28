import React, { Component } from 'react';
import imgP from "../auth/images/profile.jpg";

class UserDetails extends Component {

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
                           <input
                                type="submit"
                                name="submit"
                                value="CONTINUE"
                                onClick={this.continue}
                            />
                            <br/><br/>
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
