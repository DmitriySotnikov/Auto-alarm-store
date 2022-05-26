import React from 'react';
import {button} from "../../../util/button"
import '../../../styles/_headerBottom.scss'
import {CatalogTrigger} from "../../simple/CatalogTrigger";
import {HeaderButton} from "../../simple/HeaderButton";
import {Cart} from "../../simple/Cart";

export const HeaderBottom = () => {
    return (
        <div className="headerBottom">
            <div className="container headerBottom_container">
                <CatalogTrigger/>
                <div className="headerBottom-mainMenu">
                    {button.map(e => {
                        return <HeaderButton
                            buttonName={e.title}
                            link={e.element}
                            key={e.id}
                        />
                    })}
                    <Cart/>
                </div>
            </div>
        </div>
    );
};