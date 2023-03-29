import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "starh-comp-auth";
import {Input, Form, useTranslations, useValidation} from "starh-comp-common";
import * as yup from "yup";
import axios from "axios";
import {Button} from "primereact/button";
import {UtilsContext} from "../../layouts/UtilsProvider";
import {useDefaultsConfigs} from "../../hooks/useDefaultsConfigs";

export const ProfileEdit = () => {

    const [userDTO, setUserDTO] = useState(undefined);
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);
    const {showWarnMessage, showInfoMessage} = useContext(UtilsContext);
    const {user} = useContext(UserContext);
    const {userGatewayEndpoint} = useDefaultsConfigs();
    const {
        stringRequiredMultipleSpace,
        string,
        phone,
    } = useValidation()

    const {_t} = useTranslations();

    useEffect(() => {
        axios.get(userGatewayEndpoint+ '/self/' + user.id)
            .then(resp => {
                let data = resp.data
                data = {...data, ...resp.data.meta}
                setUserDTO(data)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps


    const schema = yup.object().shape({

        firstName: stringRequiredMultipleSpace,
        lastName: stringRequiredMultipleSpace,
        phone: phone.nullable(),
        mobile: phone.nullable(),
        address: string.nullable(),

    });

    const onSubmit = async (data) => {
        let toSend = {
            id: data.id,
            tenantId: data.tenantId,
            firstName: data.firstName,
            lastName: data.lastName,
            meta: {
                address: data.address,
                division: data.division,
                external: data.external,
                mobile: data.mobile,
                phone: data.phone,
                settings: data.settings,
                supervisor: data.supervisor,
                vesselSets: data.vesselSets,
            }
        }

        setSubmitting(true);

        axios.put(userGatewayEndpoint + '/self/' + userDTO.id,
            toSend
        ).then((res) => { // eslint-disable-line no-unused-vars
            setSubmitting(false);
            showInfoMessage(_t("generic.toast-info"), _t("user.profile-user.success-update"), 5000, false)
        }).catch((err) => { // eslint-disable-line no-unused-vars
            setSubmitting(false);
            showWarnMessage(_t("generic.toast-attention"), _t("user.profile-user.generic-error"), 5000, false)
        })
    };

    return (
        <>
            {userDTO ? (
                <Form onSubmit={onSubmit} schema={schema} defaultValues={userDTO}>
                    <div className="grid fluid">
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="firstName" label={_t("user.firstname")}/>
                        </div>
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="lastName" label={_t("user.lastname")}/>
                        </div>
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="email" label={_t("user.email")}
                                   style={{textTransform: 'lowercase'}} readonly={true}/>
                        </div>
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="phone" label={_t("user.phone")}/>
                        </div>
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="mobile" label={_t("user.mobile")}/>
                        </div>
                        <div className="col-12 md:col-6">
                            <Input type={'text'} withController={true} name="address" label={_t("user.address")}/>
                        </div>
                        <div className="col-12 text-right">
                            <Button
                                style={{float:"right"}}
                                className={"p-button-success"}
                                type="submit"
                                label={_t("user.profile-user.updatebutton")}
                                loading={submitting} icon="pi pi-save"
                            />
                        </div>
                    </div>
                </Form>
            ) : (<>
                {loading ? (<>
                    <p className={"text-center"}>
                        <i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
                        <br/>
                        {_t("user.profile-user.loading-info")}
                    </p></>) : (
                    <h1>{_t("generic.error")}</h1>
                )}
            </>)}
        </>

    );
}