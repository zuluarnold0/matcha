import React from 'react';
import Card from './Card';
import './UsersDisplay.css';

const UsersDisplay = ({ myprofile, isSortPopularity, isSortAge, sortValue, sexpref_, tag_, age_, popularity_, users, city_, isSearchedcity, isSearchedAge, isSearchSexPref, isSearchedPopularity, isSearchedTag }) => {
    return (
        <div className="outer-container">
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
                        users && users.filter(isSearchSexPref(sexpref_))
                            .filter(isSearchedTag(tag_))
                            .filter(isSearchedcity(city_))
                            .filter(isSearchedAge(age_))
                            .filter(isSearchedPopularity(popularity_))
                            .sort(isSortAge(sortValue))
                            .sort(isSortPopularity(sortValue))
                            .map(user => <Card key={user.email} user={user} myprofile={myprofile}/>)
                    }
                </div>
            }
        </div>
    )
}

export default UsersDisplay;
