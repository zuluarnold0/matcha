import React, { Component } from 'react';
import './User.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user: props.user,
            users: props.users
        }
    }

    closeModal = () => this.setState({ show: false });

    reportUser = () => this.setState({ show: true });

    render () {
        const { _id } = this.props;
        const { users, user } = this.props;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            const viewed_user = users.filter(usr => {
                return usr.id === Number(_id);
            });
            return (
                <div>
                    <Nav/>
                        <UserProfile
                            viewed_user={viewed_user[0]}
                            show={this.state.show}
                            closeModal={this.closeModal}
                            reportUser={this.reportUser}
                        />
                    <Footer/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        _id: ownProps.match.params.id,
        user: state.user_reducer.user,
        users: state.users_redu_cer.users
    }    
}

export default connect(mapStateToProps, null) (User);
