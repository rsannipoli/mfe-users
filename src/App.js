import React from "react";
import {IntlProvider} from "react-intl";
import {UtilsProvider} from "./layouts/UtilsProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import {UserProfile} from "./components/UserProfile";
import {Provacss} from "./components/Provacss";

export default () => {
    return <>
        <IntlProvider locale="en">
            <UtilsProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/user">
                            <Provacss />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UtilsProvider>
        </IntlProvider>
    </>;
}
