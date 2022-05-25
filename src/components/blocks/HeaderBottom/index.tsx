import React from 'react';
import '../../../styles/_headerBottom.scss'
import {CatalogTrigger} from "../../simple/CatalogTrigger";
import {HeaderButton} from "../../simple/HeaderButton";

export const HeaderBottom = () => {
    return (
        <div className="headerBottom">
            <div className="container">
                <CatalogTrigger/>
                <HeaderButton/>
            </div>
        </div>
    );
};