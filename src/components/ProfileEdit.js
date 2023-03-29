import React, {useContext, useState} from "react";
import {Input, Form, useValidation, useTranslations} from "starh-comp-common";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import axios from "axios";
import * as yup from "yup";
import {UtilsContext} from "../layouts/UtilsProvider";



export const ProfileEdit = () => {

    const {showWarnMessage, showInfoMessage} = useContext(UtilsContext);
    const [submitting, setSubmitting] = useState(false); // eslint-disable-line no-unused-vars
    const {
        stringRequiredMultipleSpace,
        string,
        phone,
    } = useValidation()
    const {_t} = useTranslations();


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

        axios.put("").then((res) => { // eslint-disable-line no-unused-vars
            setSubmitting(false);
            showInfoMessage(_t("generic.toast-info"), _t("user.profile-user.success-update"), 5000, false)
        }).catch((err) => { // eslint-disable-line no-unused-vars
            setSubmitting(false);
            showWarnMessage(_t("generic.toast-attention"), _t("user.profile-user.generic-error"), 5000, false)
        })
    };

    return (
        <>
            <div className="col-12 md:col-6">
                <h1>Profile Edit</h1>
                <h4>Sottotitolo</h4>
            </div>
            <Divider/>
            <Form onSubmit={onSubmit} schema={schema} defaultValues={{}}>
                <div className="grid fluid">
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="firstName"
                               label={"FirstName"}/>
                    </div>
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="lastName" label={("LastName")}/>
                    </div>
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="email" label={("Email")}
                               style={{textTransform: 'lowercase'}} readonly={true}/>
                    </div>
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="phone" label={("Phone")}/>
                    </div>
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="mobile" label={("Mobile")}/>
                    </div>
                    <div className="col-12 md:col-6">
                        <Input type={'text'} withController={true} name="address" label={("Address")}/>
                    </div>
                    <div className="col-12 text-right">
                        <Button
                            style={{float: "right"}}
                            className={"p-button-success"}
                            type="submit"
                            label={"Save User"}
                            icon="pi pi-save"
                        />
                    </div>
                </div>
            </Form>

        </>

    );
}

