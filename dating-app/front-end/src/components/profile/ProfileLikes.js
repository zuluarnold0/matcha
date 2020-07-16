import React, { Component } from 'react';
import Like from './Like';

const findLikers = (my_likes, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_likes.length; j++) {
            if (my_likes[j].liked === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class ProfileLikes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            user: props.user,
            users: props.users
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            likes: props.likes,
            user: props.user,
            users: props.users
        });
    }

    render() {
        const { likes, users, user } = this.state;
        const my_likes = likes && likes.filter(like_ => like_.liker === user.email)
        const l_users = (my_likes.length > 0 && users.length > 0) ? findLikers(my_likes, users) : [];
        return (
            <div>
                {
                    l_users && l_users.map(like => <Like key={like.id} like={like} user={user}/>)
                }
            </div>
        )
    }
}

export default ProfileLikes;
