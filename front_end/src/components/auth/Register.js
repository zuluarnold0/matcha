import React, { Component } from 'react';
import './Auth.css';
import PersonalDetails from './PersonalDetails';
import { PORT } from '../port/Port';

class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
        error_msg: '',
        longi: '',
        lati: '',
        city: ''
    }

    componentDidMount() {
        fetch('https://ipapi.co/json')
        .then(response => response.json())
        .then(location => {
            this.setState({
                city: location.city,
                longi: location.longitude,
                lati: location.latitude
            })
        })
        .catch(err => console.log(err));
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validatePersonal = () => {
        const { firstname, lastname, username, email, password, cpassword } = this.state;
        //password validation
        var matchedCase = [];
        matchedCase.push("[$@$!%*#?&]");
        matchedCase.push("[A-Z]");    
        matchedCase.push("[0-9]"); 
        matchedCase.push("[a-z]");
        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(password)) {
                ctr++;
            }
        }
        //email validation
        var isEmailValid = false;
        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            isEmailValid = true;
        }
        //check for: empty fields, invalid email and passwords
        if (!firstname || !lastname  || !email || !username || !password || !cpassword) 
        {
            this.setState({ error_msg: 'fill in all fields!' });
            return false;
        }
        else if (!isEmailValid)
        {
            this.setState({ error_msg:"You have entered an invalid email address!" });
            return false;
        }
        else if (password !== cpassword)
        {
            this.setState({ error_msg:'passwords dont match!' });
            return false;
        }
        else if (ctr !== 4)
        {
            this.setState({ error_msg:"Password must have: [A-Z], [0-9], [a-z] and [$@$!%*#?&]" })
            return false;
        }
        else
        {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    onFormSubmit = () => {
        if (this.validatePersonal())
        {
            fetch(`${PORT}/register`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    city: this.state.city,
                    lati: this.state.lati,
                    longi: this.state.longi
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.email) {
                    this.setState({ error_msg: "Check your email to verify your account" });
                } else {
                    this.setState({ error_msg: "Error registering please try again" });
                }
            })
            .catch(err => this.setState({ error_msg: "Error registering please try again" }));
        }
    }

    render() {
        const { error_msg, firstname, lastname, username, email, password, cpassword } = this.state;
        return (
            <PersonalDetails
                error_msg={error_msg}
                firstname={firstname}
                lastname={lastname}
                username={username}
                email={email}
                password={password}
                cpassword={cpassword}
                handleChange={this.handleChange}
                onFormSubmit={this.onFormSubmit}
            />
        )
    }
}

export default Register;
