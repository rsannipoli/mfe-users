import React from 'react';
import { Panel } from 'primereact/panel';
import css from 'styled-jsx/css';

import theme from '../../node_modules/primereact/resources/themes/saga-blue/theme.css'
import css1 from "starh-comp-common/dist/bundle.css"
import css2 from '../../node_modules/primereact/resources/primereact.min.css';
import css3 from '../../node_modules/primeicons/primeicons.css';
import css4 from '../../node_modules/primeflex/primeflex.css';

export const Provacss = () => {

    const {className, styles} = css.resolve `
        ${theme}
        ${css1}
        ${css2}
        ${css3}
        ${css4}
    `;

    return (
        <>
            <style>{styles}</style>
            <Panel header="CSS Module" className={className}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercittion ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </>
    )
}
