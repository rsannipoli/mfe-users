import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.min.css';
//import 'primeicons/primeicons.css';
//import 'primeflex/primeflex.css';
//import "starh-comp-common/dist/bundle.css"

const userMount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

    if(onNavigate){
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({pathname: nextPathname}) {
            const {pathname} = history.location;

            if(pathname !== nextPathname){
                history?.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_users-only-dev');
    if(devRoot){
        userMount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { userMount };
