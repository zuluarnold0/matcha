import React, { Component } from 'react';
import LikeCard from './LikeCard';

const findLikers = (my_likes, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_likes.length; j++) {
            if (my_likes[j].liker === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class LikesNotification extends Component {

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
        })
    }

    render() {
        const { likes, user, users } = this.state;
        const my_likes = likes && likes.filter(like_ => like_.liked === user.email)
        const l_users = (my_likes.length > 0 && users.length > 0) ? findLikers(my_likes, users) : [];
        const mapped = l_users && l_users.map(like => <LikeCard key={like.id} like={like} user={user}/>);
        return (
            <div>
                {
                    !mapped.length ? 
                    <div className="no_data">
                        <p>You don't have any Likes!!</p>
                    </div>
                    :
                    mapped
                }
            </div>
        )
    }
}

export default LikesNotification;