import React from 'react';
import ScrollBar from '../scrollbar/ScrollBar';
import SetVisits from './SetVisits';
import SetLikes from './SetLikes';
import SetMatches from './SetMatches';
import { PORT } from '../port/Port';

class MyHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            users: []
        }
    }

    componentDidMount() {
        //make fetch request to database to get users
        this.usersAdder = setInterval(() => {
            fetch(`${PORT}/`)
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersAdder);
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="my__history">
                <span className="history__title"> {"Your History"} </span><hr/><br/>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-visit-tab" data-toggle="tab" href="#nav-visit" role="tab" aria-controls="nav-visit" aria-selected="true">Visits</a>
                        <a className="nav-item nav-link" id="nav-like-tab" data-toggle="tab" href="#nav-like" role="tab" aria-controls="nav-like" aria-selected="false">Likes</a>
                        <a className="nav-item nav-link" id="nav-match-tab" data-toggle="tab" href="#nav-match" role="tab" aria-controls="nav-match" aria-selected="false">Matches</a>
                     </div>
                </nav>
                <ScrollBar>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-visit" role="tabpanel" aria-labelledby="nav-visit-tab">
                            <SetVisits users={users} user={user}/>
                        </div>
                        <div className="tab-pane fade" id="nav-like" role="tabpanel" aria-labelledby="nav-like-tab ">
                            <SetLikes users={users} user={user}/>
                        </div>
                        <div className="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                            <SetMatches users={users} user={user}/>
                        </div>
                    </div>
                </ScrollBar>
            </div>
        )
    }
}

export default MyHistory;
