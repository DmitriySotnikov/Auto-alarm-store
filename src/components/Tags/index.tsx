import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const Tags: FC = () => {
    return (
        <div className="tags">
            <div className="tags__item">
                <Link className="tags__link" to={"#"}>
                    Pandora
                </Link>
            </div>
            <div className="tags__item">
                <Link className="tags__link" to={"#"}>
                    StarLine
                </Link>
            </div>
            <div className="tags__item">
                <Link className="tags__link" to={"#"}>
                    Mongoose
                </Link>
            </div>
            <div className="tags__item">
                <Link className="tags__link" to={"#"}>
                    Tomahawk
                </Link>
            </div>
            <div className="tags__item">
                <Link className="tags__link" to={"#"}>
                    Sheriff
                </Link>
            </div>
        </div>
    );
};