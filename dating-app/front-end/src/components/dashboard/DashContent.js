import React, { Component } from 'react';
import FilterBar from './FilterBar';
import UsersDisplay from './UsersDisplay';

class DashContent extends Component {

    render() {
        const { users, tag_, age_, popularity_, sexpref_, city_, sortValue, handleChange, user } = this.props;
        const { isSortPopularity, isSortAge, isSearchedAge, isSearchSexPref, isSearchedPopularity, isSearchedTag, isSearchedcity } = this.props;
        return (
            <div>
                <FilterBar 
                    handleChange={handleChange}
                    age_={age_}
                    popularity_={popularity_}
                />
                <UsersDisplay
                    myprofile={user}
                    users={users}
                    sortValue={sortValue}
                    popularity_={popularity_}
                    age_={age_}
                    sexpref_={sexpref_}
                    tag_={tag_}
                    city_={city_}
                    isSortPopularity={isSortPopularity}
                    isSortAge={isSortAge}
                    isSearchedAge={isSearchedAge}
                    isSearchSexPref={isSearchSexPref}
                    isSearchedPopularity={isSearchedPopularity}
                    isSearchedTag={isSearchedTag}
                    isSearchedcity={isSearchedcity}
                />
            </div>
        )
    }
}

export default DashContent;
