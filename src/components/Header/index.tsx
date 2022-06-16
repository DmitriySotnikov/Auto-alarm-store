import React, {FC} from 'react';
import {HeaderBottom} from "../HeaderBottom";
import {Icon} from "../Icon";

export const Header: FC = () => {
    return (
        <div className='header'>
            <div className="header__top">
                <div  className="header__container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <span>MS Angarsk</span>
                        </div>
                        <div className="header__contact">
                            <div className="header__item">
                                <div className="header__contact-icon">
                                    <Icon type={"Phone"}/>
                                </div>
                                <span className="header__contact-number">+7 (3955) 61-58-68</span>
                            </div>
                            <div className="header__item">
                                <div className="header__contact-icon">
                                    <Icon type={"Whatsapp"}/>
                                </div>
                                <span className="header__contact-number">+7 (904) 141-14-14</span>
                            </div>
                        </div>
                        <div className="header__info">
                            <div className="header__item">
                                <div className="header__info-icon">
                                    <Icon type={"Location"}/>
                                </div>
                                <span className="header__info-text">г. Ангарск, 120-й кв-л, строение 54</span>
                            </div>
                            <div className="header__item header__item--top">
                                <div className="header__info-icon">
                                    <Icon type={"Clock"}/>
                                </div>
                                <span className="header__info-text">Пн - Пт :</span>
                                <span className="header__info-text">9-00 - 19-00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderBottom/>
        </div>
    );
};