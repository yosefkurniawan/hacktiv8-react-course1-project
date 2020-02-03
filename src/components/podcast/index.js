import React from "react";
import List from "./list.js";
import View from "./view.js";
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function Podcast() {
    return (
        <div className="page-podcast">
            <Router>
                <Switch>
                    <Route path="/podcastview/:podcastid">
                        <View />
                    </Route>
                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Podcast;