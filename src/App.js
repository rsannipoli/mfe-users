import React from "react";
import {IntlProvider} from "react-intl";
import {UtilsProvider} from "./layouts/UtilsProvider";
import {UserProfile} from "./components/UserProfile";

export default () => {

    return <>
        <IntlProvider locale="en">
                <UtilsProvider>
                    <div>
                        <UserProfile/>
                    </div>
                </UtilsProvider>
        </IntlProvider>
    </>;
}
