import React from 'react';
import Card from './Card';
import './UsersDisplay.css';

class UsersDisplay extends React.Component {
    render () {
        const { myprofile, isSortPopularity, isSortAge, sortValue, sexpref_, tag_, age_, popularity_, users, city_, isSearchedcity, isSearchedAge, isSearchSexPref, isSearchedPopularity, isSearchedTag } = this.props;
        const mapped = users && users.filter(isSearchSexPref(sexpref_))
                .filter(isSearchedTag(tag_))
                .filter(isSearchedcity(city_))
                .filter(isSearchedAge(age_))
                .filter(isSearchedPopularity(popularity_))
                .sort(isSortAge(sortValue))
                .sort(isSortPopularity(sortValue))
                .map(user => <Card key={user.email} user={user} myprofile={myprofile}/>);
        return (
            <div className="outer-container">
                {
                    mapped.length ? 
                        <p className="users_count">
                            {`${ mapped.length } users found`}
                        </p> : ""
                }
                {
                    !users.length ?
                        <div id="dot-loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    :
                    <div className="inner-container">
                        {
                            !mapped.length ? 
                                <div className="no_users">
                                    <p>NO USERS FOUND!!</p>
                                </div>
                                :
                                mapped
                        }
                    </div>
                }
            </div>
        )
    }
}

export default UsersDisplay;
