import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";

function List() {
    return (
        <div className="podcast-list">
            <SearchForm />
            
            <ul>
                <Item />
                <Item />
                <Item />
                <Item />
            </ul>
        </div>
    )
}

export default List;