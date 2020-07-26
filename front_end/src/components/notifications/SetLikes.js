import React, { Component } from 'react';
import LikesNotification from './LikesNotification';
import { PORT } from '../port/Port';

class SetLikes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: []
        }
    }

    componentDidMount() {
        //make fetch request to database to get likes
        this.usersLikes = setInterval(() => {
            fetch(`${PORT}/getlikes`)
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
        clearInterval(this.usersLikes);
    }

    render() {
        const { likes } = this.state;
        const { users, user } = this.props;
        return (
            <div>
                <LikesNotification 
                    users={users} 
                    user={user} 
                    likes={likes}
                />
            </div>
        )
    }
}

export default SetLikes;