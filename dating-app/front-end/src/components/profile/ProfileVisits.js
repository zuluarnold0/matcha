import React, { Component } from 'react';
import Visit from './Visit';

const findViewers = (my_views, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_views.length; j++) {
            if (my_views[j].viewed === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class ProfileVisits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            views: props.views,
            users: props.users,
            user: props.user
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ 
            views: props.views,
            users: props.users,
            user: props.user
        });
    }

    render() {
        const { views } = this.state;
        const { users, user } = this.props;
        const my_views = views && views.filter(view_ =>  view_.viewer === user.email);
        const v_users = (my_views.length > 0 && users.length > 0) ? findViewers(my_views, users) : [];
        return <div>
                {
                    v_users && v_users.map(view => <Visit key={view.id} user={user} view={view}/>)
                }
            </div>
    }
}

export default ProfileVisits;

