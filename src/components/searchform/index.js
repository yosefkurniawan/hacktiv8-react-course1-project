import React from "react";

function SearchForm(params) {
    return (
        <div className="searchform">
            <form>
                <input type="text" placeholder="Cari Podcast..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;