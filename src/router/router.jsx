import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Entry from "../components/entry";
import Index from "../components";


let BrowRouter = () => {
    return (
        <Router>
            <Entry>
                <Index></Index>
            </Entry>
        </Router>
    )
}

export default BrowRouter;