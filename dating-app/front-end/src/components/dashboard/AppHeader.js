import React from 'react';
import { Link } from 'react-router-dom';
import "../nav/Nav.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AppHeader extends React.Component {
    state = {
        user: this.props.user
    }

    logout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.props.user.email
            })
        })
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
                                <Link className="logo-matcha" to="/">Matcha</Link>
                            </li>
                            <li>
                                <label htmlFor="check">
                                    <i className="fas fa-bars" id="sidebar_btn"></i>
                                </label>
                            </li>
                        </div>
                        <div className="push-nav-end">
                            <li>
                                <Link  to="/login" className="nav-logout nav-tags fas fa-power-off"></Link><br/>
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

export default connect(mapStateToProps, null)(AppHeader);
