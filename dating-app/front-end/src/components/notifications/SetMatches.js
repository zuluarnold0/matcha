import React, { Component } from 'react';
import MatchesNotification from './MatchesNotification';

class SetMatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        //getting matches from database
        fetch('http://localhost:3000/getmatches')
        .then(response => response.json())
        .then(matches => {
            if (matches) {
                this.setState({ matches: matches });
            }
        })
        .catch(err => console.log('an error occured'));
    }

    componentWillUnmount() {
        this.setState({ matches: [] });
    }

    render() {
        const { users, user } = this.props;
        return (
            <div>
                <MatchesNotification users={users} user={user} matches={this.state.matches}/>
            </div>
        )
    }
}

export default SetMatches;