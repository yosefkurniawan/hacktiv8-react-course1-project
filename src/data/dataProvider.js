import React from "react";
import ContextPodcasts from "./contextPodcasts.js";

class DataProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcasts: []
        }
    }

    componentDidMount() {
        fetch('https://json-server-heroku-zjqcjtotyv.now.sh/podcasts')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    podcasts: data
                })
            });
    }

    getPodcastById = (id) => {
        const podcast = this.state.podcasts.find(x => x.id === id)
        return podcast;
    }

    render() {
        return (
            <ContextPodcasts.Provider value={{
                state: this.state,
                getPodcastById: this.getPodcastById
            }}>
                {this.props.children}
            </ContextPodcasts.Provider>
        )
    }
}

export default DataProvider;