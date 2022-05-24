import React from 'react';
import '../../../styles/_headerBottom.scss'
import {CatalogTrigger} from "../../simple/CatalogTrigger";

export const HeaderBottom = () => {
    return (
        <div className="headerBottom">
            <div className="container">
                <CatalogTrigger/>
            </div>
        </div>
    );
};