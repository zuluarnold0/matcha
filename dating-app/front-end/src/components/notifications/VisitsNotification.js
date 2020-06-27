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
            views: []
        }
    }

    componentDidMount() {
        this.setState({ views: this.props.views });
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ views: props.views });
    }

    render() {
        const { views } = this.state;
        const { users, user } = this.props;
        const my_views = views && views.filter(view_ => {
            return view_.viewed === user.email
        })
        let v_users = [];
        if (my_views.length > 0 && users.length > 0) {
            v_users = findViewers(my_views, users);
        }
        return (
            <div>
                {
                    v_users && v_users.map(view => {
                        return <VisitCard key={view.id} user={user} view={view}/>
                    })
                }
            </div>
        )
    }
}

export default VisitsNotification;