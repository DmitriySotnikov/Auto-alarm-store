import React from 'react';
import {button} from "../../util/button"
import {CatalogTrigger} from "../CatalogTrigger";
import {HeaderButton} from "../HeaderButton";
import {Cart} from "../CartMini";

export const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="header__container">
                <div className="header-bottom__inner">
                    <CatalogTrigger/>
                <div className="header-bottom__main-menu">
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
        </div>
    );
};