import React, {FC} from 'react';
import {catalogLink} from "../../../util/catalogLink"
import "../../../styles/_catalogNavigation.scss"
import {Link} from "react-router-dom";

export const CatalogNavigation: FC = () => {
    return (
        <div className="catalogNavigation">
            <nav className="catalogNavigation-nav">
                {catalogLink.map(e => {
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