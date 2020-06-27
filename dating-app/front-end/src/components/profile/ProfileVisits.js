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
            views: props.views
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ views: props.views });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.views !== this.props.views) {
            this.setState({ views: this.props.views });
        }
    }

    render() {
        const { views } = this.state;
        const { users, user } = this.props;
        const my_views = views && views.filter(view_ => {
            return view_.viewer === user.email
        })
        let v_users = [];
        if (my_views.length > 0 && users.length > 0) {
            v_users = findViewers(my_views, users);
        }
        return (
            <div>
                {
                    v_users && v_users.map(view => {
                        return <Visit key={view.id} user={user} view={view}/>
                    })
                }
            </div>
        )
    }
}

export default ProfileVisits;

