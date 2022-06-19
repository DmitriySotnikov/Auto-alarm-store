import React, {FC} from 'react';
import {IconSprite} from "../IconSprite";
import {Link} from "react-router-dom";

export const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__inner">
                    <div className="footer__contacts">
                        <div className="footer__title">
                            Контакты :
                        </div>
                        <div className="footer__contact-item">
                            <span className="footer__email-icon"/>
                            <div className="footer__contact-info">
                                magic_systems@mail.ru
                            </div>
                        </div>
                        <div className="footer__contact-item">
                            <span className="footer__location-icon"/>
                            <div className="footer__contact-info">
                                г. Ангарск, 120-й кв-л, строение 54
                            </div>
                        </div>
                        <div className="footer__contact-item">
                            <span className="footer__phone-icon"/>
                            <div className="footer__contact-info">
                                +7 (3955) 61-58-68
                            </div>
                        </div>
                        <div className="footer__contact-item">
                            <span className="footer__clock-icon"/>
                            <div className="footer__contact-info">
                                Пн - Пт : 9-00 - 19-00
                            </div>
                        </div>
                    </div>
                    <div className="footer__info-block">
                        <div className="footer__title">
                            Мы в социальных сетях и мессежерах:
                        </div>
                        <div className="footer__img-list">
                            <span className="footer__vk-icon footer--indent"/>
                            <span className="footer__whatsapp-icon footer--indent"/>
                            <span className="footer__telegram-icon"/>
                        </div>
                        <div className="footer__title">
                            Принимаем к оплате:
                        </div>
                        <div className="footer__img-list">
                            <svg className="footer__mastercard-icon footer--indent">
                                <use xlinkHref="#mastercard"/>
                            </svg>
                            <svg className="footer__mir-icon footer--indent">
                                <use xlinkHref="#mir"/>
                            </svg>
                            <svg className="footer__visa-icon">
                                <use xlinkHref="#visa"/>
                            </svg>
                        </div>
                    </div>
                    <div className="footer__menu">
                        <div className="footer__title">
                            Разделы :
                        </div>
                        <div className="footer__menu-list-item">
                            <Link className="footer__menu-list-link" to={"#"}>
                                О нас
                            </Link>
                        </div>
                        <div className="footer__menu-list-item">
                            <Link className="footer__menu-list-link" to={"#"}>
                                Услуги
                            </Link>
                        </div>
                        <div className="footer__menu-list-item">
                            <Link className="footer__menu-list-link" to={"#"}>
                                Правовая информация
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <IconSprite/>
        </div>
    );
};