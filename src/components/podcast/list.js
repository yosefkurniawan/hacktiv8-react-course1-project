import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";

function List() {
    return (
        <div className="podcast-list">
            <SearchForm />
            Podcast List goes here....
            <Item />
        </div>
    )
}

export default List;