import React, { Component } from 'react';
import Match from './Match';

const findMatches = (matches, users, user) => {
    const users_arr = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].user1 === user.email || matches[i].user2 === user.email) {
           for (let j = 0; j < users.length; j++) {
               if ((users[j].email === matches[i].user1 || users[j].email === matches[i].user2) && users[j].email !== user.email) {
                users_arr.push(users[j]);
               }
           }
        }
   }
    return users_arr;
}

class ProfileMatches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: props.matches
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ matches: props.matches });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.matches !== this.props.matches) {
            this.setState({ matches: this.props.matches });
        }
    }

    render() {
        const { matches } = this.state;
        const { users, user } = this.props;
        let m_users = [];
        if (matches.length > 0 && users.length > 0) {
            m_users = findMatches(matches, users, user);
        }
        return (
            <div>
                {
                    m_users && m_users.map(match => {
                        return <Match key={match.id} user={user} match={match}/>
                    })
                }
            </div>
        )
    }
}

export default ProfileMatches;
