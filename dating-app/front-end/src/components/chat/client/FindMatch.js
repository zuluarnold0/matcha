import React, { Component } from 'react';
import Card from './Card';

const findMatches = (matches, users, user) => {
    let users_copy = users;
    const users_arr = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].user1 === user.email || matches[i].user2 === user.email) {
           for (let j = 0; j < users_copy.length; j++) {
               if ((users_copy[j].email === matches[i].user1 || users_copy[j].email === matches[i].user2) && users_copy[j].email !== user.email) {
                    users_copy[j].match_id = matches[i].id;
                    users_arr.push(users_copy[j]);
               }
           }
        }
   }
    return users_arr;
}

class FindMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        this.setState({ matches: this.props.matches });
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ matches: props.matches });
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
                        return <Card key={match.id} user={user} match={match}/>
                    })
                }
            </div>
        )
    }
}

export default FindMatch;
