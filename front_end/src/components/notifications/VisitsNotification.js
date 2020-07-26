import React from 'react';
import VisitCard from './VisitCard';

const findViewers = (my_views, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_views.length; j++) {
            if (my_views[j].viewer === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class VisitsNotification extends React.Component {

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
        const { views, users, user } = this.state;
        const my_views = views && views.filter(view_ => view_.viewed === user.email);
        const v_users = (my_views.length > 0 && users.length > 0) ? findViewers(my_views, users) : [];
        const mapped = v_users && v_users.map(view => <VisitCard key={view.id} user={user} view={view}/>);
        return (
            <div>
                {
                    !mapped.length ? 
                    <div className="no_data">
                        <p>You don't have any profile visits!!</p>
                    </div>
                    :
                    mapped
                }
            </div>
        )
    }
}

export default VisitsNotification;