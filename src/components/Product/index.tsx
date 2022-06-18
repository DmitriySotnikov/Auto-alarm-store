import React, {FC} from 'react';
import comments from "../../assets/icon/comment.svg"
import heart from "../../assets/icon/heart.svg"
import alarm from "../../assets/icon/ux4150.jpg"
import {Link} from "react-router-dom";

export const Product: FC = () => {
    return (
        <div className="prd">
            <div className="prd__title">
                <h1 className="prd__title-name">Pandora DX 4GL plus</h1>
                <div className="prd__favorite-button">
                    <span className="prd__favorite-text">В избранное</span>
                    <img className="prd__favorite-icon" src={heart}/>
                </div>
            </div>
            <div className="prd__inner">
                <div className="prd__left-block">
                    <div className="prd__rating-reviews">
                        <span className="prd__rating-stars-line product-rating-stars-line--4"/>
                        <span className="prd__rating-count">5 баллов</span>
                        <span className="prd__reviews-count">( 10 голосов )</span>
                    </div>
                    <div className="prd__comment-block">
                        <img className="prd__comment-icon" src={comments}/>
                        <span className="prd__comment-title">Комментариев</span>
                        <span className="prd__comment-count">15</span>
                    </div>
                    <div className="prd__picture">
                        <img className="prd__picture-img" src={alarm}/>
                    </div>
                </div>
                <div className="prd__average-block">
                    <div className="prd__attributes">
                        <ul className="prd__list">
                            <li className="prd__list-item">
                                Способы управления :
                                <ul className="prd__list">
                                    <li className="prd__list-item">Bluetooth Smart - смартфон</li>
                                    <li className="prd__list-item">Бесконтактная метка</li>
                                    <li className="prd__list-item">Штатный ключ от автомобиля (Slave)</li>
                                    <li className="prd__list-item">Штатные кнопки в салоне</li>
                                    <li className="prd__list-item">Мобильный телефон (GSM)</li>
                                    <li className="prd__list-item">Мобильное приложение</li>
                                </ul>
                            </li>
                            <li className="prd__list-item">
                                Автозапуск
                                <span className="prd__item-value">
                            есть
                        </span>
                            </li>
                            <li className="prd__list-item">
                                Тип GSM-модуля
                                <span className="prd__item-value">
                            4G
                        </span>
                            </li>
                            <li className="prd__list-item">
                                Поддержка Pandora CLONE
                                <span className="prd__item-value">
                            есть
                        </span>
                            </li>
                            <li className="prd__list-item">
                                Bluetooth Smart
                                <span className="prd__item-value">
                            есть
                        </span>
                            </li>
                            <li className="prd__list-item">
                                Версия Bluetooth
                                <span className="prd__item-value">
                            4.2
                        </span>
                            </li>
                        </ul>
                    </div>
                    <Link className="prd__detail-link" to={"#"}>Все характеристики</Link>
                </div>
                <div className="prd__sale-block">
                    <div className="prd__price-wrap">
                        <span className="prd__price">34 059 ₽</span>
                    </div>
                    <div className="prd__delivery">
                        <span className="prd__delivery-title">Доставка :</span>
                        <div className="prd__delivery-type">
                            Самовывоз
                        </div>
                        <div className="prd__delivery-row">
                            <div className="prd__delivery-time">
                                1 день
                            </div>
                            <div className="prd__delivery-price">
                                300 ₽
                            </div>
                        </div>

                    </div>
                    <div className="prd__buy-button">
                        Купить
                    </div>
                </div>
            </div>
        </div>
    );
};