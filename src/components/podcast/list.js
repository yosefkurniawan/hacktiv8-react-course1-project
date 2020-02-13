import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    
    onKeywordChange = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    render () {
        const result = []
        this.props.podcasts.forEach((podcast) => {
            if(podcast.title.toLowerCase().indexOf(this.state.keyword) === -1) {
                return;
            }

            result.push(<Item podcast={podcast} key={podcast.id} />);
        })
        return (
            <div className="podcast-list">
                <SearchForm keyword={this.state.keyword} onSearch={this.onSearch} onKeywordChange={this.onKeywordChange} />
                
                <ul>
                    {result}
                </ul>
            </div>
        )
    }
}

export default List;