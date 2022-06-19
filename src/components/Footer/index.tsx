import React, {FC} from 'react';

export const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__menu">
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
                        <span className="footer__vk-icon"/>
                        <span className="footer__whatsapp-icon"/>
                        <span className="footer__telegram-icon"/>
                    </div>
                    <div className="footer__title">
                        Принимаем к оплате:
                    </div>
                    <div className="footer__img-list">
                        <span className="footer__vk-icon"/>
                        <span className="footer__whatsapp-icon"/>
                        <span className="footer__telegram-icon"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};