import React, {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface prop {
    buttonName: ReactNode
    link: string
}

export const HeaderButton: FC<prop> = (
    {buttonName, link}) => {
    return (
        <div className="header-button">
            <NavLink className={({isActive}) => {
                return "header-button__link"
            }}  to={link} >{buttonName}</NavLink>
        </div>
    );
};