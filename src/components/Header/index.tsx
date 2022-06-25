import React, {FC} from 'react';
import {HeaderBottom} from "../HeaderBottom";
import {header} from "../../constants/Header"
import {NavLink} from "react-router-dom";
import {Routes} from "../../routes";

export const Header: FC = () => {
    return (
        <div className='header'>
            <div className="header__top">
                <div  className="header__container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <NavLink className={() => "header__to-home"} to={Routes.HOME}>
                                <span>MS Angarsk</span>
                            </NavLink>
                        </div>
                        <div className="header__contact">
                            <div className="header__item">
                                <div className="header__icon-block">
                                    <span className="header__contact-icon"/>
                                </div>
                                <span className="header__contact-number">{header.contactNumber}</span>
                            </div>
                            <div className="header__item">
                                <div className="header__icon-block">
                                    <span className="header__whatsapp-icon"/>
                                </div>
                                <span className="header__contact-number">{header.contactNumberWhatsapp}</span>
                            </div>
                        </div>
                        <div className="header__info">
                            <div className="header__item">
                                <div className="header__info-icon">
                                    <span className="header__location-icon"/>
                                </div>
                                <span className="header__info-text">{header.address}</span>
                            </div>
                            <div className="header__item header__item--top">
                                <div className="header__info-icon">
                                    <span className="header__clock-icon"/>
                                </div>
                                <span className="header__info-text">{header.workingDays}</span>
                                <span className="header__info-text">{header.workingHours}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderBottom/>
        </div>
    );
};