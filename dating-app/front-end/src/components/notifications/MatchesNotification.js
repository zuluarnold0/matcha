import React, { Component } from 'react';
import MatchCard from './MatchCard';

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

class MatchesNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: props.matches,
            users: props.users,
            user: props.user
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ 
            matches: props.matches,
            users: props.users,
            user: props.user
        });
    }

    render() {
        const { matches, users, user } = this.state;
        const m_users = (matches.length > 0 && users.length > 0) ? findMatches(matches, users, user) : [];
        return (
            <div>
                {
                    m_users && m_users.map(match => <MatchCard key={match.id} user={user} match={match}/>)
                }
            </div>
        )
    }
}

export default MatchesNotification;