import React from 'react';
import {button} from "../../util/button"
import {CatalogTrigger} from "../CatalogTrigger";
import {HeaderButton} from "../HeaderButton";
import {Cart} from "../CartMini";

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
                    <Cart cartCount={7}/>
                </div>
            </div>
        </div>
    );
};