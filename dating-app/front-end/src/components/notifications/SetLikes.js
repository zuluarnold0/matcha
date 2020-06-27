import React, { Component } from 'react';
import LikesNotification from './LikesNotification';

class SetLikes extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    componentWillUnmount() {
        this.setState({ likes: [] });
    }

    render() {
        const { users, user } = this.props;
        return (
            <div>
                <LikesNotification users={users} user={user} likes={this.state.likes}/>
            </div>
        )
    }
}

export default SetLikes;