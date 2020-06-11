import React, { Component } from 'react';
import './Auth.css';
import PersonalDetails from './PersonalDetails';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';

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
        age: 18,
        bio: '',
        tags: [],
        invalid_input: ""
    }
    onKeyUp = (e) => {
        if (e.which === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({
                invalid_input: "YOU ENTERED AN INVALID TAG!",
                });
                return;
            }
    
            this.setState({
                tags: [ ...this.state.tags, input ],
                invalid_input: ""
            });
            e.target.value = "";
        }
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter((t) => {
          return (t !== tag);
        });
        this.setState({
          tags: tags
        });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, username, email, password, cpassword, tags } = this.state;
        switch (step) {
            case 1:
                return (
                    <PersonalDetails 
                        firstname={firstname}
                        lastname={lastname}
                        username={username}
                        email={email}
                        password={password}
                        cpassword={cpassword}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
            case 2:
                return (
                    <UserDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )

            case 3:
                return (
                    <UserInfo
                        containerStyle={containerStyle}
                        inputStyle={inputStyle}
                        onDeleteTag={this.onDeleteTag}
                        onKeyUp={this.onKeyUp}
                        invalid_input={this.state.invalid_input}
                        tags={tags}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
            default:
                return(
                    <PersonalDetails 
                        firstname={firstname}
                        lastname={lastname}
                        username={username}
                        email={email}
                        password={password}
                        cpassword={cpassword}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
        }
    }
}

export default Register;
