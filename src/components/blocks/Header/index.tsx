import React, {FC} from 'react';
import '../../../styles/_header.scss'
import phone from '../../../assets/icon/phone-1.svg'
import whatsapp from '../../../assets/icon/whatsapp.svg'

export const Header: FC = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-inner">
                    <div className="header-logo">
                        <span>MS Angarsk</span>
                    </div>
                    <div className="header-contact">
                        <div className="header-contactItem">
                            <img className="header-contactIcon" src={phone}/>
                            <span className="header-contactNumber">+7 (3955) 61-58-68</span>
                        </div>
                        <div className="header-contactItem">
                            <img className="header-contactIcon" src={whatsapp}/>
                            <span className="header-contactNumber">+7 (904) 141-14-14</span>
                        </div>
                    </div>
                    <div className="header-info">

                    </div>
                </div>
            </div>
        </div>
    );
};