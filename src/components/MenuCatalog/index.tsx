import React from 'react';
import {NavLink} from "react-router-dom";
import {catalogLink} from "../../util/catalog-date"
import {useAppSelector} from "../../hooks/redux";

export const MenuCatalog = () => {

    const {trigger} = useAppSelector(state => state.ui)

    return (
        <div className={trigger ? "menu-catalog menu-catalog--active" : "menu-catalog"}>
            <ul className="menu-catalog__title">
                { catalogLink.map( cl =>
                    <li className="menu-catalog__item" key={cl.id}>
                    <NavLink className="menu-catalog__link" to={cl.link}>
                        {cl.textLink}
                    </NavLink>
                </li>
                )}
            </ul>
        </div>
    );
};