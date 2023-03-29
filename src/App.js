import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default ({history}) => {
    return <>
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/user/pricing" component={Pricing} />
                        <Route path="/user/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    </>;
}