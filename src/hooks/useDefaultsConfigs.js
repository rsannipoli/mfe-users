import {Translate, useTranslations, useValidation} from "starh-comp-common";
import React, {useState} from "react";
import axios from "axios";
import * as yup from "yup";

export const useDefaultsConfigs = () => {

    const {_t} = useTranslations()
    const [loading, setLoading] = useState(false)
    const {stringRequired} = useValidation()
    const fileDownloadEndpoint = "/api/storage/file/download"


    const dialogSchema = yup.object().shape({role: stringRequired}) //eslint-disable-line no-unused-vars

    // Messages
    const baseFormErrorResponse = (text, attribute = "name") => {
        let myFunction = (d) => {
            return _t(text, {name: d[attribute]})
        }
        return () => {
            return {409: myFunction}
        }
    }
    const baseBeforeSend = (data) => {
        data.tenantId = user.tenantId;
        return data;
    }
    const baseSuccessMessage = (text, attribute = "name") => {
        // eslint-disable-next-line react/display-name
        return (data) => {
            return <Translate value={text} data={{name: data[attribute]}}/>
        }
    }

    const showDocument = (fileId, action = 'DOWNLOAD') => {
        setLoading(true)
        axios.get(fileDownloadEndpoint + "/" + fileId, {
            responseType: 'blob'
        }).then(response => {
            if (action === 'DOWNLOAD') {
                const fileName = response.headers["x-filename"];
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            } else if (action === 'SHOW') {
                const file = new Blob([response.data], {type: response.data.type});
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
            }
        })
            .catch(err => {
                    console.error(err);
                }
            ).finally(() => {
            setLoading(false)
        })
    }


    return {
        loading, showDocument,
        // messages
        baseSuccessMessage, baseBeforeSend, baseFormErrorResponse,

        // endpoints

    }
}
