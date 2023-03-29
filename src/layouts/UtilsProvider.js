import {Toast} from "primereact/toast";
import React, {useRef} from "react";
import PropTypes from "prop-types";

export const UtilsContext = React.createContext(null);
export const UtilsProvider = (props) => {

    const toast = useRef();


    const showSuccessMessage = (title, content, life = 3000, sticky = null) => {
        toast.current.show({severity: 'success', summary: title, detail: content, life: life, sticky: sticky});
    }

    const showWarnMessage = (title, content, life = 3000, sticky = null) => {
        toast.current.show({severity: 'warn', summary: title, detail: content, life: life, sticky: sticky});
    }

    const showErrorMessage = (title, content, life = 3000, sticky = null) => {
        toast.current.show({severity: 'error', summary: title, detail: content, life: life, sticky: sticky});
    }

    const showInfoMessage = (title, content, life = 3000, sticky = null) => {
        toast.current.show({severity: 'info', summary: title, detail: content, life: life, sticky: sticky});
    }

    return (
        <div className="App">
            <Toast ref={toast}/>
            <UtilsContext.Provider value={{showInfoMessage, showErrorMessage, showWarnMessage, showSuccessMessage}}>
                {props.children}
            </UtilsContext.Provider>
        </div>
    )
}
UtilsProvider.propTypes = {
    children: PropTypes.node
}
