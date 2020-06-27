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
            likes: []
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ likes: props.likes });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.likes !== this.props.likes) {
            this.setState({ likes: this.props.likes });
        }
    }

    render() {
        const { likes } = this.state;
        const { users, user } = this.props;
        const my_likes = likes && likes.filter(like_ => {
            return like_.liked === user.email
        })
        let l_users = [];
        if (my_likes.length > 0 && users.length > 0) {
            l_users = findLikers(my_likes, users);
        }
        return (
            <div>
                {
                    l_users && l_users.map(like => {
                        return <LikeCard key={like.id} like={like} user={user}/>
                    })
                }
            </div>
        )
    }
}

export default LikesNotification;