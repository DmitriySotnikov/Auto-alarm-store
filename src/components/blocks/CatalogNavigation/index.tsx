import React, {FC} from 'react';
import "../../../styles/_catalogNavigation.scss"
import {FilterRange} from "../../simple/FilterRange";
import {CheckBoxField} from "../../simple/FilterCheckBox";
import {NavigationItems} from "../../simple/NavigationItem";

export const CatalogNavigation: FC = () => {
    return (
        <div className="catalogNavigation">
            <nav className="catalogNavigation-nav">
                <NavigationItems/>
            </nav>
        </div>
    );
};

//<FilterRange/>
//<CheckBoxField/>