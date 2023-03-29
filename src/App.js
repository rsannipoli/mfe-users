import React from "react";
import {ProfileEdit} from "./components/ProfileEdit";
import {IntlProvider} from "react-intl";
import {UtilsProvider} from "./layouts/UtilsProvider";
import {CustomerProvider} from "./contexts/CustomerProvider";

export default () => {

    return <>
        <IntlProvider locale="en">
                <UtilsProvider>
                    <div>
                        <ProfileEdit/>
                    </div>
                </UtilsProvider>
        </IntlProvider>
    </>;
}
