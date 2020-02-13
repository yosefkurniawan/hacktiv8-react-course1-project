import React from "react";
import SearchForm from "../searchform";
import Item from "./item.js";
/** @jsx jsx  */
import {jsx, css} from '@emotion/core';

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
                    {result.length ? result : <span className="no-result" css={styles.empty}>Pencarian tidak ditemukan....</span>}
                </ul>
            </div>
        )
    }
}

const styles = {
    empty: css`
        display: block;
        font-style: italic;
        margin: 30px 0;
    `
}
export default List;