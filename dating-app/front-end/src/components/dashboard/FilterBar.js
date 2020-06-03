import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className="dash-sidebar">{/**cant find */}
            
            <div className="sort-box">
                <div className="filter-section">
                    <span className="filter-title">Sort: </span>
                    <select
                        className="form-control form-control-sm mb-2"
                        /*onChange={this.props.handleChange}*/
                        name="sortValue"
                    >
                        <option value="">Choose sorting criteria...</option>
                        <option value="age">Age</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
            </div>

            <div className="filter-box">
                <div className="filter-section">
                    <span className="filter-title">Filter by age: </span>
                    <span className="filter-range">18 - 70</span><br/>
                    <input
                        type="range"
                        className="form-control"
                        name="ageRange"
                        min="18"
                        max="70"
                        /*onChange={this.props.handleChange}*/
                    />
                    <div className="filter-range-value">33</div>
                </div>

                <div className="filter-section">
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
                        name="searchedTag"
                        placeholder="Enter one tag from above..."
                        /*onChange={this.props.handleChange}*/
                    />
                </div>

                <div className="filter-section">
                    <span className="filter-title">Filter popularity: </span>
                    <span className="filter-range">0 - 2000</span><br/>
                    <input
                        type="range"
                        className="form-control"
                        name="popularityRange"
                        min="0"
                        max="2000"
                        /*onChange={this.props.handleChange}*/
                    />
                    <div className="filter-range-value">345</div>
                </div>

                <div className="filter-section">
                  <span className="filter-title">Filter by location: </span>
                    <input
                        className="form-control"
                        type="text"
                        name="city"
                        placeholder="Enter city or town..."
                        /*onChange={this.props.handleChange}*/
                    />
                </div>
                
                <div className="filter-section">
                    <input
                        type="hidden"
                        name="sexPref"
                        /*onChange={this.props.handleChange}*/
                    />
                </div>
            </div>

        </div>
    )
}

export default FilterBar;
