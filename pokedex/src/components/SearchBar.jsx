import React from "react";

const SearchBar = ({onSearch}) => {
    return (
        <div className="search-component">
            <input type="search"  className="searchbar" placeholder="Rechercher un pokémon..." onChange={(e)=> onSearch(e.target.value)} />
            <div className="select-list">
                <select name="" id="">
                    <option value="">Trier par</option>
                </select>
                <select name="" id="">
                    <option value="">Type</option>
                </select>
                <select name="" id="">
                    <option value="">Génération</option>
                </select>
            </div>
        </div>
    )
}


export default SearchBar;