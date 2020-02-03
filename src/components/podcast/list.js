import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";

function List(props) {
    const podcasts = props.podcasts;
    return (
        <div className="podcast-list">
            <SearchForm />
            
            <ul>
                {podcasts.map(podcast => (
                    <Item podcast={podcast} key={podcast.id} />
                ))}
            </ul>
        </div>
    )
}

export default List;