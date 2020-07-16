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
        //make fetch request to database to get likes
        this.usersViews = setInterval(() => {
            fetch('http://localhost:3000/getviews')
            .then(response => response.json())
            .then(views => {
                if (views) {
                    this.setState({ views: views });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }
    
    componentWillUnmount() {
        clearInterval(this.usersViews);
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
