import React, { Component } from 'react';
import ProfileLikes from './ProfileLikes';

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
        clearInterval(this.usersLikes);
    }

    render() {
        const { users, user } = this.props;
        return (
            <div>
                <ProfileLikes users={users} user={user} likes={this.state.likes}/>
            </div>
        )
    }
}

export default SetLikes;