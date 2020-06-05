import React from 'react';
import ProfileVisits from './ProfileVisits';
import ProfileLikes from './ProfileLikes';
import ProfileMatches from './ProfileMatches';
import ScrollBar from '../scrollbar/ScrollBar';

const MyHistory = () => {
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
                        <ProfileVisits />
                    </div>
                    <div className="tab-pane fade" id="nav-like" role="tabpanel" aria-labelledby="nav-like-tab ">
                        <ProfileLikes />
                    </div>
                    <div className="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                        <ProfileMatches />
                    </div>
                </div>
            </ScrollBar>
        </div>
    )
}

export default MyHistory;
