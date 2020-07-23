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
        let m_users =  (matches.length > 0 && users.length > 0) ? findMatches(matches, users, user) : [];
        const mapped = m_users && m_users.map(match => <Match key={match.id} user={user} match={match}/>);
        return (
            <div>
            {
                !mapped.length ? 
                    <div className="no_data">
                        <p>You don't have any Matches!!</p>
                    </div>
                    :
                    mapped
            }
            </div>
        )
    }
}

export default ProfileMatches;
