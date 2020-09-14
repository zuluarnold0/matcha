import React, { Component } from 'react';
import { PORT } from '../port/Port';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import ConfirmDetails from './ConfirmDetails';
import { connect } from 'react-redux';
import PageNotFound from './PageNotFound';
import { setUserToState } from '../../store/actions/actions';
import '../auth/Auth.css';

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

class ExtendedProfile extends Component {

    state = {
        step: 1,
        gender: '',
        sexpref: '',
        age: '',
        bio: '',
        tags: [],
        invalid_input: "",
        error_msg: '',
        user: this.props.user
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        fetch(`${PORT}/extendedprofile`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.props.user.email,
                bio: this.state.bio,
                gender: this.state.gender,
                age: this.state.age,
                sexpref: this.state.sexpref,
                tags: this.state.tags
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.email) {
                //set user to global state
                this.props.setUserToState(user);
                this.setState({ error_msg: "success" });
            } else {
                this.setState({ error_msg: "failed to update profile" });
            }
        })
        .catch(err => this.setState({ error_msg: "failed to update profile" }));
        //this.nextStep();
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter(t => t !== tag);
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

    tryAgain = () => {
        this.setState({ step: 1 });
    }

    onKeyUp = (e) => {
        if (e.keyCode === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({ invalid_input: "Choose a valid tag!" });
                return;
            }
            this.state.tags.includes(input[0].toLowerCase()) ?
            this.setState({ invalid_input: "Please choose another tag!" })
             :
            this.setState({
                tags: [ ...this.state.tags, input[0].toLowerCase() ], invalid_input: ""
            })
            e.target.value = "";
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
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
        const { age, gender, sexpref } = this.state;
        if (!age || !gender || !sexpref)
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
        const { error_msg, tags, bio, age, gender, sexpref } = this.state;
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        error_msg={error_msg}
                        gender={gender}
                        age={age}
                        sexpref={sexpref}
                        nextStep={this.nextStep}
                        currentStep={this.currentStep}
                        validateDetails={this.validateDetails}
                        handleChange={this.handleChange}
                    />
                )

            case 2:
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
            case 3:
                return(
                    <ConfirmDetails 
                        bio={bio}
                        gender={gender}
                        age={age}
                        sexpref={sexpref}
                        tags={tags}
                        prevStep={this.prevStep}
                        onFormSubmit={this.onFormSubmit}
                        error_msg={error_msg}
                        tryAgain={this.tryAgain}
                    />
                )
        
            default:
                return <PageNotFound/>;
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToState: (user) => dispatch(setUserToState(user))
    }
}

export default connect(null, mapDispatchToProps) (ExtendedProfile);