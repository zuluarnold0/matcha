import React from 'react';
import './DashBoard.css';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DashContent from './DashContent';
import { PORT } from '../port/Port';

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

class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            popularity_: "",
            city_: '',
            age_: '',
            sortValue: '',
            user: props.user,
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

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        const { users, tag_, age_, popularity_, city_, sortValue, user } = this.state;
        if (!user) {
            return <Redirect to="/login" />;
        } else {
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar 
                        user={user}  
                        handleChange={this.handleChange}
                        sexpref_={user.sexpref}
                    />
                    <div className="content">
                        <DashContent 
                            users={users}
                            user={user}
                            handleChange={this.handleChange}
                            sortValue={sortValue}
                            popularity_={popularity_}
                            age_={age_}
                            sexpref_={user.sexpref}
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
                    <Footer />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user_reducer.user
    }
}

export default connect(mapStateToProps, null)(DashBoard);