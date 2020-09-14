import React, { Component } from 'react';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';
import { PORT } from '../port/Port';

class Verify extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            secretToken: '',
            error_msg: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formIsValid = () => {
        if (!this.state.secretToken)
        {
            this.setState({ error_msg: 'Token field cannot be empty!' });
            return false;
        }
        else
        {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    onFormSubmit = () => {
        if (this.formIsValid())
        {
            fetch(`${PORT}/verify`, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    secrettoken: this.state.secretToken
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.email) {
                    this.setState({ error_msg: "You Can now log in" });
                } else {
                    this.setState({ error_msg: "Invalid Token!"});
                } 
            })
            .catch(err => this.setState({ error_msg: "Invalid Token! Please try again"}));

            this.setState({ secretToken: "" })
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>VERIFY YOUR EMAIL</h1>
                    <div>
                        <label htmlFor="secret_token">Secret Token</label><br/>
                        <input
                            type='text'
                            name="secretToken"
                            onChange={this.handleInputChange}
                            placeholder="Enter Secret Token..."
                        />
                        <input
                            type="submit"
                            name="submit"
                            value="Verify"
                            onClick={this.onFormSubmit}
                        />
                        {
                            this.state.error_msg ? <p className="error__msg">
                                { this.state.error_msg }
                            </p> : ''
                        }
                        <Link className="success__links" to="/login">
                            <span>Go to Login</span>
                        </Link><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Verify;
