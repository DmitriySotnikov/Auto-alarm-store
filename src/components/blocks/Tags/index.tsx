import React, {FC} from 'react';
import "../../../styles/_tags.scss"
import {Link} from "react-router-dom";

export const Tags: FC = () => {
    return (
        <div className="tags">
            <div className="tags-item">
                <Link className="tags-link" to={"#"}>
                    Pandora
                </Link>
            </div>
            <div className="tags-item">
                <Link className="tags-link" to={"#"}>
                    StarLine
                </Link>
            </div>
            <div className="tags-item">
                <Link className="tags-link" to={"#"}>
                    Mongoose
                </Link>
            </div>
            <div className="tags-item">
                <Link className="tags-link" to={"#"}>
                    С запуском
                </Link>
            </div>
            <div className="tags-item">
                <Link className="tags-link" to={"#"}>
                    Без брелка
                </Link>
            </div>
        </div>
    );
};