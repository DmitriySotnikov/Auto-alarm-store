import React, {FC, useState} from 'react';
import '../../../styles/_trigger.scss'

export const CatalogTrigger: FC = () => {

    const [active, setActive] = useState(false)
    window.console.log(active)
    return (
        <div className="trigger" >
            <div className={active ? "trigger-icon trigger-icon_active" : "trigger-icon"}>
                <div className={active ? "trigger-iconLine trigger-iconLine_active" :
                "trigger-iconLine"}/>
            </div>
            <div className="trigger-text" onClick={() => setActive(!active)}>Каталог товаров</div>
        </div>
    );
};