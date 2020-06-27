import React from 'react';
import SetVisits from './SetVisits';
import SetLikes from './SetLikes';
import SetMatches from './SetMatches';

const NotificationDetails = ({ users, user }) => {
    return (
        <div className="noti__container">
            <span className="noti__title">{ "Notifications" } </span><hr/><br/>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-visit-tab" data-toggle="tab" href="#nav-visit" role="tab" aria-controls="nav-visit" aria-selected="true">Visits</a>
                    <a className="nav-item nav-link" id="nav-like-tab" data-toggle="tab" href="#nav-like" role="tab" aria-controls="nav-like" aria-selected="false">Likes</a>
                    <a className="nav-item nav-link" id="nav-match-tab" data-toggle="tab" href="#nav-match" role="tab" aria-controls="nav-match" aria-selected="false">Matches</a>
                </div>
            </nav>
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
        </div>
    )
}

export default NotificationDetails;
