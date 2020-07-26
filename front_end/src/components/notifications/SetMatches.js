import React, { Component } from 'react';
import MatchesNotification from './MatchesNotification';
import { PORT } from '../port/Port';

class SetMatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        //make fetch request to database to get matches
        this.usersMatches = setInterval(() => {
            fetch(`${PORT}/getmatches`)
            .then(response => response.json())
            .then(matches => {
                if (matches) {
                    this.setState({ matches: matches });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersMatches);
    }

    render() {
        const { matches } = this.state;
        const { users, user } = this.props;
        return (
            <div>
                <MatchesNotification 
                    users={users} 
                    user={user} 
                    matches={matches}
                />
            </div>
        )
    }
}

export default SetMatches;