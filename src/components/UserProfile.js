import React from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {useTranslations} from "starh-comp-common";
import {ProfileEdit} from "./ProfileEdit";
import {ChangePassword} from "./ChangePassword";
import {Divider} from "primereact/divider";



export const UserProfile = () => {
    const {_t} = useTranslations()

    return (<>
        <div className="col-12 md:col-6">
            <h1>Profile Edit</h1>
            <h4>Sottotitolo</h4>
        </div>
        <Divider/>
            <TabView id="user-profile-edit">
                <TabPanel header={_t("user.profile-user.changeparam")} leftIcon="pi pi-user" headerStyle={{color:"red"}}>
                    <div id="user-profile-edit-params">
                        <ProfileEdit/>
                    </div>
                </TabPanel>
                <TabPanel header={_t("user.profile-user.resetpassword")} leftIcon="pi pi-lock">
                    <div id="user-profile-edit-password">
                        <ChangePassword/>
                    </div>
                </TabPanel>
                <TabPanel header={_t("user.profile-user.preferences")} leftIcon="pi pi-cog">
                    <div id="user-profile-edit-preferences">
                        {/*<UserSettings/>*/}
                    </div>
                </TabPanel>
            </TabView>

    </>)
}
