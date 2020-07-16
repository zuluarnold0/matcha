import React, { Component } from 'react';
import './User.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ShowUser from './ShowUser';

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
            users: [],
            likes: []
        }
    }

    closeModal = () => this.setState({ show: false });
    reportUser = () => this.setState({ show: true });

    closeBlockModal = () => this.setState({ showBlock: false });
    showBlockModal = () => this.setState({ showBlock: true });

    componentDidMount() {
        this.users_Likes_Adder = setInterval(() => {
            fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
            .catch(err => console.log('an error occured'));

            //fetch likes from database
            fetch('http://localhost:3000/getlikes')
            .then(response => response.json())
            .then(likes => {
                if (likes) {
                    this.setState({ likes: likes });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.users_Likes_Adder);
    }

    render () {
        const { _id, user } = this.props;
        const { users, likes, show, showBlock } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            let wasILiked = [];
            let didILike = [];
            let viewed_user = [];

            if (users.length && likes.length) {
                viewed_user = users.length && users.filter(usr => {
                    return usr.id === Number(_id);
                });

                wasILiked =likes && likes.filter(whoLiked(viewed_user[0].email, user.email));
                didILike = likes && likes.filter(whoLiked(user.email, viewed_user[0].email));
            }
            return (
                <div>
                    <Nav/>
                    {
                        (likes.length && users.length) ?
                            <ShowUser
                                wasILiked={wasILiked}
                                didILike={didILike}
                                user={user}
                                viewed_user={viewed_user[0]}
                                show={show}
                                closeModal={this.closeModal}
                                reportUser={this.reportUser}
                                showBlock={showBlock}
                                closeBlockModal={this.closeBlockModal}
                                showBlockModal={this.showBlockModal}
                            />
                            :
                            <div id="dot-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                    <Footer/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        _id: ownProps.match.params.id,
        user: state.user_reducer.user
    }    
}

export default connect(mapStateToProps, null) (User);