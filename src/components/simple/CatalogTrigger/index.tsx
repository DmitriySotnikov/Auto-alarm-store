import React, {FC, useState} from 'react';
import '../../../styles/_trigger.scss'

export const CatalogTrigger: FC = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={active ? "trigger trigger_active" : "trigger"} onClick={() => setActive(!active)} >
            <div className={active ? "trigger-icon trigger-icon_active" : "trigger-icon"}>
                <div className={active ? "trigger-iconLine trigger-iconLine_active" :
                "trigger-iconLine"}/>
            </div>
            <div className={active ? "trigger-text trigger-text_active" :
                "trigger-text"}>
                Каталог товаров
            </div>
        </div>
    );
};