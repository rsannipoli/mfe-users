import React from "react";
import {ProfileEdit} from "./components/ProfileEdit";
import {IntlProvider} from "react-intl";
import {UtilsProvider} from "./layouts/UtilsProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default () => {
    return <>
        <IntlProvider locale="en">
            <UtilsProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/user">
                            <ProfileEdit />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UtilsProvider>
        </IntlProvider>
    </>;
}
