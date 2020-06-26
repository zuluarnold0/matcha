import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    render() {
        const { handleChange, age_, popularity_, sexpref_ } = this.props;
        const popularity__ =  popularity_ !== "" && popularity_ > 0 ? popularity_ + " to 2000" : ""; 
        const age__ =  age_ !== "" ? "18 to " + age_ + " years" : "";
        return (
            <div>
                <div className="sort-box">
                    <div className="filter-section">
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
                </div>

                <div className="filter-box">
                    <div className="filter-section age__color">
                        <span className="filter-title">Filter by age: </span>
                        <span className="filter-range">18 - 70</span><br/>
                        <input
                            type="range"
                            className="form-control"
                            name="age_"
                            min="18"
                            max="70"
                            onChange={handleChange}
                        />
                        <div className="filter-range-value">{ age__ }</div>
                    </div>

                    <div className="filter-section tags__color">
                        <span className="filter-title">Filter by tags: </span>
                        <div className="display-tags">
                            <span className="tag__">photography</span>
                            <span className="tag__">art</span>
                            <span className="tag__">music</span>
                            <span className="tag__">coding</span>
                            <span className="tag__">gym</span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            name="tag_"
                            placeholder="Enter one tag from above..."
                            onChange={handleChange}
                        />
                    </div>

                    <div className="filter-section rating__color">
                        <span className="filter-title">Filter popularity: </span>
                        <span className="filter-range">0 - 2000</span><br/>
                        <input
                            type="range"
                            className="form-control"
                            name="popularity_"
                            min="0"
                            max="2000"
                            onChange={handleChange}
                        />
                        <div className="filter-range-value">{ popularity__ }</div>
                    </div>

                    <div className="filter-section">
                    <span className="filter-title">Filter by location: </span>
                        <input
                            className="form-control"
                            type="text"
                            name="city_"
                            placeholder="Enter city or town..."
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="filter-section">
                        <input
                            type="hidden"
                            name="sexpref_"
                            value={sexpref_}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterBar;
