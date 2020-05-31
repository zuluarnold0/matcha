import React from 'react';

const SearchBar = ({ handleInputChange }) => {
    return (
        <div className='search-box'>
            <input
                className='search-txt'
                type='text'
                name='searchField'
                placeholder='Type to search'
                onChange={handleInputChange}
            />
        </div>
    )
}

export default SearchBar;

