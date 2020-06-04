import React from 'react';

const MyHistory = () => {
    return (
        <div className="visit-history">
            <span className="logged_name"> {"Your History"} </span><hr/><br/>
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
                        <NewsVisits blocks={blocks} iBlocked={iBlocked} users_views={users_views} auth={auth}/>
                    </div>
                    <div className="tab-pane fade" id="nav-like" role="tabpanel" aria-labelledby="nav-like-tab ">
                        <NewsLikes blocks={blocks} iBlocked={iBlocked} users_likes={users_likes} auth={auth}/>
                    </div>
                    <div className="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                        <NewsMatches blocks={blocks} iBlocked={iBlocked} users_matches={users_matches} auth={auth} />
                    </div>
                </div>
            </ScrollBar>
        </div>
    )
}

export default MyHistory;
