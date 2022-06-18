import React from 'react';
import {button} from "../../util/button"
import {CatalogTrigger} from "../CatalogTrigger";
import {HeaderButton} from "../HeaderButton";
import {CartMini} from "../CartMini";

export const HeaderBottom = () => {
    return (
        <div className="header__bottom">
            <div className="header__container">
                <div className="header__bottom--inner">
                    <CatalogTrigger/>
                <div className="header__bottom--main-menu">
                    { button.map(e => {
                        return <HeaderButton
                            buttonName={e.title}
                            link={e.element}
                            key={e.id}
                        />
                    })}
                    <CartMini cartCount={7}/>
                </div>
                </div>
            </div>
        </div>
    );
};