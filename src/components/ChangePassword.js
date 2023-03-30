import {useTranslations,useValidation,Form,Password} from "starh-comp-common";
import {Button} from 'primereact/button';
import * as yup from "yup";
import axios from "axios";
import React, {useContext, useState} from "react";
import {UtilsContext} from "../layouts/UtilsProvider";
import {useDefaultsConfigs} from "../hooks/useDefaultsConfigs";

export const ChangePassword = () => {
    const [submitting, setSubmitting] = useState(false);
    const {showWarnMessage, showInfoMessage} = useContext(UtilsContext);
    // const {accountChangePassEndpoint} = useDefaultsConfigs();
    const {_t} = useTranslations();
    const {
        stringRequiredMultipleSpace
    } = useValidation()

    const schema = yup.object().shape({
        currentPassword: stringRequiredMultipleSpace,
        newPassword: stringRequiredMultipleSpace,
        confirmPassword: stringRequiredMultipleSpace.oneOf([yup.ref('newPassword'), null], _t("user.profile-user.password-match")),
    });

    const onSubmit = async (data, e) => {
        setSubmitting(true);
        axios.post("", {
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
        }).then((res) => { // eslint-disable-line no-unused-vars
            e.target.reset();
            setSubmitting(false);
            showInfoMessage(_t("generic.toast-info"), _t("user.profile-user.password-update"), 10000, false)
        }).catch(err => {
            setSubmitting(false);
            if(err?.response?.status === 400){
                showWarnMessage(_t("generic.toast-attention"), _t("user.profile-user.password-notmatch"), 10000, false)
            }else {
                showWarnMessage(_t("generic.toast-attention"), _t("user.profile-user.generic-error"), 10000, false)
            }
        })
    };

    return (<>
        <div>
            <Form onSubmit={onSubmit} schema={schema}>
                <div className="card m-2">
                    <div className="grid">
                        <div className="col-12">
                            <Password
                                withController={true}
                                name={"currentPassword"}
                                label={_t("user.profile-user.change-password.currentpassword")}
                            />
                        </div>
                        <div className="col-12">
                            <Password
                                withController={true}
                                name={"newPassword"}
                                label={_t("user.profile-user.change-password.newpassword")}
                            />
                        </div>
                        <div className="col-12">
                            <Password
                                withController={true}
                                name={"confirmPassword"}
                                label={_t("user.profile-user.change-password.confirmpassword")}
                            />
                        </div>
                        <div className="col-12 text-right">
                            <Button
                                className={"p-button-success"}
                                type="submit"
                                label={_t("user.profile-user.button")}
                                loading={submitting}
                                icon="pi pi-save"
                            />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </>);
}

