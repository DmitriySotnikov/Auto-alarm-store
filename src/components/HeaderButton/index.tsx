import React, {FC, ReactNode} from "react";
import {Link} from "react-router-dom";

interface prop {
    buttonName: ReactNode
    link: string
}

export const HeaderButton: FC<prop> = (
    {buttonName, link}) => {
    return (
        <div className="header-button">
            <Link className="header-button__link" to={link} >{buttonName}</Link>
        </div>
    );
};