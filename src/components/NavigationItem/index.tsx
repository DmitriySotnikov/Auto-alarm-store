import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {catalogLink} from "../../util/catalog_mock_data"


export const NavigationItems: FC = () => {
    return (
        <div className="navigationItem">
            { catalogLink.map( elem => {
                return (
                    <div className="navigationItem-item" key={elem.id}>
                        <Link className="navigationItem-link"
                              to={elem.link}
                        >{elem.textLink}
                        </Link>
                    </div>
                )
            })}
        </div>

    );
};