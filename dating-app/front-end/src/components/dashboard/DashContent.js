import React, { Component } from 'react';
import FilterBar from './FilterBar';
import UsersDisplay from './UsersDisplay';

/************************** SEARCH ********************/
const isSearchSexPref = (sexpref) => (user) => {
    return !sexpref || user.gender.toLowerCase() === sexpref.toLowerCase();
}

const isSearchedTag = (tag) => (user) => {
    return !tag || user.tags.includes(tag.toLowerCase());
}

const isSearchedcity = (city) => (user) => {
    return !city || user.city.toLowerCase() === city.toLowerCase();
}

const isSearchedAge = (age) => (user) => {
    return !age || user.age <= age;
}

const isSearchedPopularity = (popularity) => (user) => {
    return !popularity || user.popularity >= popularity;
}

/************************** SORT ********************/
const isSortAge = (sortValue)  => (person1, person2) => {
  return sortValue === "age" ? person1.age - person2.age : "";
}

const isSortPopularity = (sortValue)  => (person1, person2) => {
  return sortValue === "popularity" ? person1.popularity - person2.popularity : "";
}

class DashContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            popularity_: "",
            sexpref_: props.user.sexpref,
            city_: '',
            age_: '',
            sortValue: ''
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            users: props.users
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { users, tag_, age_, popularity_, sexpref_, city_, sortValue } = this.state;
        return (
            <div>
                <FilterBar 
                    handleChange={this.handleChange}
                    age_={age_}
                    popularity_={popularity_}
                    sexpref_={sexpref_}
                />
                <UsersDisplay
                    myprofile={this.props.user}
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
