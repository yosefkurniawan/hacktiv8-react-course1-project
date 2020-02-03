import React from "react";
import List from "./list.js";
import View from "./view.js";
import ContextPodcasts from '../../data/contextPodcasts.js';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function Podcast() {
    return (
        <div className="page-podcast">
            <ContextPodcasts.Consumer>
                {(context) => (
                    <Router>
                        <Switch>
                            <Route path="/podcastview/:podcastid">
                                <View podcasts={context.state.podcasts} />
                            </Route>
                            <Route path="/">
                                <List podcasts={context.state.podcasts} />
                            </Route>
                        </Switch>
                    </Router>
                )}
            </ContextPodcasts.Consumer>
        </div>
    )
}

export default Podcast;