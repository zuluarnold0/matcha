import React, { Component } from 'react';
import './Auth.css';
import PersonalDetails from './PersonalDetails';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import ConfirmDetails from './ConfirmDetails';
import Success from './Success';
import PageNotFound from './PageNotFound';

const containerStyle = {
    position: "relative",
    display: "inline-block",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    width: "100%",
    overflow: "auto",
    borderBottom: "1px solid #ccc"
}

const inputStyle = {
    display: "inline-block",
    color: "#000",
    fontSize: "14px",
    margin: "3px",
    border: "0"
}

class Register extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
        gender: '',
        sexPref: '',
        age: '',
        bio: '',
        tags: [],
        invalid_input: "",
        error_msg: ''
    }

    onKeyUp = (e) => {
        if (e.which === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({ invalid_input: "Choose a valid tag!" });
                return;
            }
            this.state.tags.includes(input[0]) ?
            this.setState({ invalid_input: "Please choose another tag!" })
             :
            this.setState({
                tags: [ ...this.state.tags, input[0] ], invalid_input: ""
            })
            e.target.value = "";
        }
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter(t => {
          return t !== tag;
        });
        this.setState({ tags: tags });
    }

    currentStep = () => {
        const { step } = this.state;
        this.setState({ step: step });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
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

    validateInfo = () => {
        const { bio, tags } = this.state;
        if (!bio)
        {
            this.setState({ error_msg: 'bio field cannot be empty!' });
            return false;
        }
        else if (!tags.length)
        {
            this.setState({ error_msg: 'Enter atleast one tag!' });
            return false;
        }
        else
        {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    validateDetails = () => {
        const { age, gender, sexPref } = this.state;
        if (!age || !gender || !sexPref)
        {
            this.setState({ error_msg: 'fill in all field!' });
            return false;
        }
        else if (!(Number(age)))
        {
            this.setState({ error_msg: 'age must be a number!' });
            return false;
        }
        else if (age < 18 || age > 70)
        {
            this.setState({ error_msg: 'sorry u must be between 18 and 70 to join!' });
            return false;
        }
        else
        {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    render() {
        const { step } = this.state;
        const { error_msg, firstname, lastname, username, email, password, cpassword, tags, bio, age, gender, sexPref } = this.state;
        switch (step) {
            case 1:
                return (
                    <PersonalDetails
                        error_msg={error_msg}
                        firstname={firstname}
                        lastname={lastname}
                        username={username}
                        email={email}
                        password={password}
                        cpassword={cpassword}
                        nextStep={this.nextStep}
                        currentStep={this.currentStep}
                        handleChange={this.handleChange}
                        validatePersonal={this.validatePersonal}
                    />
                )
            case 2:
                return (
                    <UserDetails
                        error_msg={error_msg}
                        gender={gender}
                        age={age}
                        sexPref={sexPref}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        currentStep={this.currentStep}
                        validateDetails={this.validateDetails}
                        handleChange={this.handleChange}
                    />
                )

            case 3:
                return (
                    <UserInfo
                        error_msg={error_msg}
                        validateInfo={this.validateInfo}
                        containerStyle={containerStyle}
                        inputStyle={inputStyle}
                        onDeleteTag={this.onDeleteTag}
                        onKeyUp={this.onKeyUp}
                        invalid_input={this.state.invalid_input}
                        tags={tags}
                        bio={bio}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        currentStep={this.currentStep}
                    />
                )
            case 4:
                return(
                    <ConfirmDetails 
                        firstname={firstname}
                        lastname={lastname}
                        username={username}
                        email={email}
                        bio={bio}
                        gender={gender}
                        age={age}
                        sexPref={sexPref}
                        tags={tags}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                    />
                )

            case 5:
                return <Success/>;
        
            default:
                return <PageNotFound/>;
        }
    }
}

export default Register;
