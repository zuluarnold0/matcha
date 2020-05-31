import React from 'react';
import SearchBar from "./SearchBar";
import ScrollBar from "./ScrollBar";

const AppContent = ({ users, searchField, handleInputChange }) => {
    const filtered = users.filter(user => {
        return user.name.toLowerCase().includes(searchField);
    })
    return (
        <div className="content">
            <SearchBar handleInputChange={handleInputChange} />
            <ScrollBar users={filtered}/>
        </div>
    )
}

export default AppContent;
