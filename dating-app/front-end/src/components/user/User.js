import React, { Component } from 'react';
import './User.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const whoLiked = (liker, liked) => (like) => {
    return like.liker === liker && like.liked === liked;
}

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showBlock: false,
            user: props.user,
            users: props.users,
            likes: []
        }
    }

    componentDidMount() {
        //fetch likes from database
       fetch('http://localhost:3000/getlikes')
       .then(response => response.json())
       .then(likes => {
           if (likes) {
               this.setState({ likes: likes });
           }
       })
       .catch(err => console.log('an error occured'));
    }

    closeModal = () => this.setState({ show: false });
    reportUser = () => this.setState({ show: true });

    closeBlockModal = () => this.setState({ showBlock: false });
    showBlockModal = () => this.setState({ showBlock: true });

    render () {
        const { _id } = this.props;
        const { users, user } = this.props;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            let wasILiked = [];
            let didILike = [];
            const viewed_user = users.filter(usr => {
                return usr.id === Number(_id);
            });
            if (this.state.likes) {
                wasILiked = this.state.likes.filter(whoLiked(viewed_user[0].email, user.email));
                didILike = this.state.likes.filter(whoLiked(user.email, viewed_user[0].email));
            }
            return (
                <div>
                    <Nav/>
                        <UserProfile
                            wasILiked={wasILiked}
                            didILike={didILike}
                            user={user}
                            viewed_user={viewed_user[0]}
                            show={this.state.show}
                            closeModal={this.closeModal}
                            reportUser={this.reportUser}
                            showBlock={this.state.showBlock}
                            closeBlockModal={this.closeBlockModal}
                            showBlockModal={this.showBlockModal}
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
