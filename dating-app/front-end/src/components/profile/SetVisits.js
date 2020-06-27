import React, { Component } from 'react';
import ProfileVisits from './ProfileVisits';

class SetVisits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: []
        }
    }

    componentDidMount() {
        //fetch views from database
        fetch('http://localhost:3000/getviews')
        .then(response => response.json())
        .then(views => {
            if (views) {
                this.setState({ views: views });
            }
        })
        .catch(err => console.log('an error occured'));
    }

    componentWillUnmount() {
        this.setState({ views: [] });
    }

    render() {
        const { users, user } = this.props;
        return (
            <div>
                <ProfileVisits users={users} user={user} views={this.state.views}/>
            </div>
        )
    }
}

export default SetVisits;
