import React, {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import "../../../styles/_headerButton.scss"

interface prop {
    buttonName: ReactNode
    link: string
}

export const HeaderButton: FC<prop> = (
    {buttonName, link}) => {
    return (
        <div className="headerButton">
            <Link className="headerButton-link" to={link} >{buttonName}</Link>
        </div>
    );
};