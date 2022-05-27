import React, {FC} from 'react';
import "../../../styles/_breadcrumb.scss"
import {Link} from "react-router-dom";
import home from "../../../assets/icon/home.svg"

export const Breadcrumb: FC = () => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list">
                <li className="breadcrumbs-item">
                    <Link className="breadcrumbs-linkHome" to={"#"} title="Главная">
                        <img className="breadcrumbs-home" src={home}/>
                    </Link>
                </li>
                <li className="breadcrumbs-item breadcrumbs-item_arrow">
                    <Link className="breadcrumbs-link" to={"#"} title="Главная">
                        Каталог
                    </Link>
                </li>
                <li className="breadcrumbs-item breadcrumbs-item_arrow">
                    <Link className="breadcrumbs-link" to={"#"} title="Автосигнализации">
                        Автосигнализации
                    </Link>
                </li>
            </ul>
        </div>
    );
};