import React from 'react';
import '../../../styles/_headerBottom.scss'
import {CatalogTrigger} from "../../simple/CatalogTrigger";
import {HeaderButton} from "../../simple/HeaderButton";

export const HeaderBottom = () => {
    return (
        <div className="headerBottom">
            <div className="container headerBottom_container">
                <CatalogTrigger/>
                <div className="headerBottom-mainMenu">
                    <HeaderButton buttonName={"Записаться"} link={"#"}/>
                </div>
            </div>
        </div>
    );
};