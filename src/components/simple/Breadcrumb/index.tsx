import React, {FC} from 'react';
import "../../../styles/_breadcrumb.scss"
import {Link} from "react-router-dom";
import home from "../../../assets/icon/home.svg"
import arrow from "../../../assets/icon/right-arrow.svg"

export const Breadcrumb: FC = () => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list">
                <li className="breadcrumbs-item">
                    <Link className="breadcrumbs-link" to={"#"} title="Главная">
                        <img className="breadcrumbs-home" src={home}/>
                    </Link>
                </li>
                <li className="breadcrumbs-item">
                    <Link className="breadcrumbs-link breadcrumbs-link_pos" to={"#"} title="Главная">
                        Каталог
                    </Link>

                </li>
            </ul>
        </div>
    );
};