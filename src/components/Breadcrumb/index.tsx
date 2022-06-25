import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const Breadcrumb: FC = () => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <Link className="breadcrumbs__link-home" to={"#"} title="Главная">
                        <span className="breadcrumbs__home"/>
                    </Link>
                </li>
                <li className="breadcrumbs__item breadcrumbs__item-arrow">
                    <Link className="breadcrumbs__link" to={"#"} title="Главная">
                        Каталог
                    </Link>
                </li>
                <li className="breadcrumbs__item breadcrumbs__item-arrow">
                    <Link className="breadcrumbs__link" to={"#"} title="Автосигнализации">
                        Автосигнализации
                    </Link>
                </li>
            </ul>
        </div>
    );
};