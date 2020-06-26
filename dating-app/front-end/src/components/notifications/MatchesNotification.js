import React, { Component } from 'react';
import MatchCard from './MatchCard';

const findMatches = (matches, users, user) => {
    const users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < matches.length; j++) {
            if ((users[i].email === matches[j].user1 || users[i].email === matches[j].user2) && users[i].email !== user.email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class MatchesNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/getmatches')
        .then(response => response.json())
        .then(matches => {
            if (matches) {
                this.setState({ matches: matches });
            }
        })
        .catch(err => console.log('an error occured'));
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
                        return <MatchCard key={match.id} user={user} match={match}/>
                    })
                }
            </div>
        )
    }
}

export default MatchesNotification;