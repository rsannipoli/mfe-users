import React from "react";
import {IntlProvider} from "react-intl";
import {UtilsProvider} from "./layouts/UtilsProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import css from 'styled-jsx/css';

import theme from 'primereact/resources/themes/saga-blue/theme.css'
import css1 from "starh-comp-common/dist/bundle.css"
import css2 from 'primereact/resources/primereact.min.css';
import css3 from 'primeicons/primeicons.css';
import css4 from 'primeflex/primeflex.css';
import {UserProfile} from "./components/UserProfile";

export default () => {
    const {className, styles} = css.resolve `
        .${className}{
            ${theme}
            ${css1}
            ${css2}
            ${css3}
            ${css4}
        }
    `;

    return <>
        <style>{styles}</style>
        <div className={className}>
            <IntlProvider locale="en">
                <UtilsProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/user">
                                <UserProfile />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </UtilsProvider>
            </IntlProvider>
        </div>
    </>
}
