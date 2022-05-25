import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const HeaderButton: FC = () => {
    return (
        <div className="HeaderButton">
            <Link to={"#"}/>
        </div>
    );
};