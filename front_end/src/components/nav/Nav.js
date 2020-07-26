import React from 'react';
import "./Nav.css";
import {  NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { unSetUserFromState } from '../../store/actions/actions';
import { PORT } from '../port/Port';

class Nav extends React.Component {
    state = {
        user: this.props.user
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ user: props.user });
    }

    logout = () => {
        fetch(`${PORT}/logout`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.props.user.email
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'success') {
                this.props.unSetUserFromState();
            }
        })
        .catch(error => console.err(error));
    }

    render () {
        const { user } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <nav className="nav-ba">
                    <ul>
                        <div className="push-nav-start">
                            <li>
                                <NavLink className="logo-matcha" to="/">Matcha</NavLink>
                            </li>
                        </div>
                        <div className="push-nav-end">
                            <li>
                                <NavLink to="/profile" className="nav-img">
                                    <img src={this.state.user.photourl} alt="img"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><span className="nav-tags fas fa-house-user"></span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/chats"><span className="nav-tags fas fa-envelope"></span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/notification"><span className="nav-tags fas fa-bell"></span></NavLink>
                            </li>
                            <li>
                                <Link onClick={this.logout} to="/login" className="nav-logout nav-tags fas fa-power-off"></Link><br/>
                            </li>
                        </div>
                    </ul>
                </nav>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      user: state.user_reducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unSetUserFromState: () => dispatch(unSetUserFromState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
