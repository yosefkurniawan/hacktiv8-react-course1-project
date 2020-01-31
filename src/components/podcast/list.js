import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";
import ContextPodcasts from '../../data/contextPodcasts.js';

function List() {
    return (
        <div className="podcast-list">
            <SearchForm />
            
            <ul>
                <ContextPodcasts.Consumer>
                    {(context) => (
                        context.state.podcasts.map(podcast => (
                            <Item podcast={podcast} key={podcast.id} />
                        ))
                    )}
                </ContextPodcasts.Consumer>
            </ul>
        </div>
    )
}

export default List;