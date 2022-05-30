import React, {FC} from 'react';
import {catalogLink} from "../../../util/catalogLink"
import "../../../styles/_catalogNavigation.scss"
import {Link} from "react-router-dom";
import {FilterRange} from "../../simple/FilterRange";

export const CatalogNavigation: FC = () => {

    const flag = false

    return (
        <div className="catalogNavigation">
            <nav className="catalogNavigation-nav">
                <FilterRange/>
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