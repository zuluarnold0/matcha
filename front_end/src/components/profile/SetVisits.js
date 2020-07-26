import React, { Component } from 'react';
import ProfileVisits from './ProfileVisits';
import { PORT } from '../port/Port';

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
            fetch(`${PORT}/getviews`)
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
        const { views } = this.state;
        const { users, user } = this.props;
        return (
            <div>
                <ProfileVisits 
                    users={users} 
                    user={user} 
                    views={views}
                />
            </div>
        )
    }
}

export default SetVisits;
