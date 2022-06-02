import React, {FC} from 'react';
import {catalogLink} from "../../../util/catalogLink"
import "../../../styles/_catalogNavigation.scss"
import {Link} from "react-router-dom";
import {FilterRange} from "../../simple/FilterRange";
import {CheckBoxField} from "../../simple/FilterCheckBox";

export const CatalogNavigation: FC = () => {

    const flag = false

    return (
        <div className="catalogNavigation">
            <nav className={flag ?
                "catalogNavigation-nav"
                : "catalogNavigation-nav catalogNavigation-nav_filter"}>
                <FilterRange/>
                <CheckBoxField/>
                {flag && catalogLink.map(e => {
                    return (
                        <div className="catalogNavigation-item">
                            <Link className="catalogNavigation-link"
                                  to={e.link}
                            >{e.textLink}
                            </Link>
                        </div>
                    )
                })}
            </nav>
        </div>
    );
};