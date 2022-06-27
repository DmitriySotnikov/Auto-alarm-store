import React from "react";
import {NavLink} from "react-router-dom";
import {catalogLink} from "../../util/catalog-date"
import {useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {triggerIsActive} from '../../store/reducer/UISlice';

export const MenuCatalog = () => {

    const {trigger} = useAppSelector(state => state.ui);

     const dispatch = useDispatch();

    return (
        <div className={trigger ? "menu-catalog menu-catalog--active" : "menu-catalog"}>
            <ul className="menu-catalog__title">
                { catalogLink.map( cl =>
                    <li className="menu-catalog__item" key={cl.id}>
                    <NavLink className="menu-catalog__link" to={cl.link} onClick={() => {dispatch(triggerIsActive(!trigger))}}>
                        {cl.textLink}
                    </NavLink>
                </li>
                )}
            </ul>
        </div>
    );
};