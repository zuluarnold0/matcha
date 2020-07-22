import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    render() {
        const { handleChange, age_, popularity_ } = this.props;
        const popularity__ =  popularity_ !== "" && popularity_ > 0 ? popularity_ + " to 2000" : ""; 
        const age__ =  age_ !== "" ? "18 to " + age_ + " years" : "";
        return (
            <div>
                <div className="filter-box">
                    <div className="filter-section gray1">
                        <span className="filter-title">Sort: </span>
                        <select
                            className="form-control form-control-sm mb-2"
                            onChange={handleChange}
                            name="sortValue"
                        >
                            <option value="">Choose sorting criteria...</option>
                            <option value="age">Age</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>

                    <div className="filter-section gray2">
                        <span className="filter-title">Filter popularity: </span>
                        <span className="filter-range">0 - 2000</span><br/>
                        <input
                            type="range"
                            className=""
                            name="popularity_"
                            min="0"
                            max="2000"
                            onChange={handleChange}
                        />
                        <div className="filter-range-value">{ popularity__ }</div>
                    </div>

                    <div className="filter-section gray3">
                        <span className="filter-title">Filter by age: </span>
                        <span className="filter-range">18 - 70</span><br/>
                        <input
                            type="range"
                            className=""
                            name="age_"
                            min="18"
                            max="70"
                            onChange={handleChange}
                        />
                        <div className="filter-range-value">{ age__ }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterBar;
