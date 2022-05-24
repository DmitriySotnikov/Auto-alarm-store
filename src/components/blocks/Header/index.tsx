import React, {FC} from 'react';
import '../../../styles/_header.scss'
import phone from '../../../assets/icon/phone-1.svg'
import whatsapp from '../../../assets/icon/whatsapp.svg'
import location from '../../../assets/icon/location.svg'
import clock from '../../../assets/icon/clock.svg'
import {HeaderBottom} from "../HeaderBottom";

export const Header: FC = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-inner">
                    <div className="header-logo">
                        <span>MS Angarsk</span>
                    </div>
                    <div className="header-contact">
                        <div className="header-item">
                            <img className="header-contactIcon" src={phone}/>
                            <span className="header-contactNumber">+7 (3955) 61-58-68</span>
                        </div>
                        <div className="header-item">
                            <img className="header-contactIcon" src={whatsapp}/>
                            <span className="header-contactNumber">+7 (904) 141-14-14</span>
                        </div>
                    </div>
                    <div className="header-info">
                        <div className="header-item">
                            <img className="header-infoIcon" src={location} />
                            <span className="header-infoText">г. Ангарск, 120-й кв-л, строение 54</span>
                        </div>
                        <div className="header-item header-item_top">
                            <img className="header-infoIcon" src={clock} />
                            <span className="header-infoText">Пн - Пт :</span>
                            <span className="header-infoText">9-00 - 19-00</span>
                        </div>
                    </div>
                </div>
            </div>
             <HeaderBottom/>
        </div>
    );
};