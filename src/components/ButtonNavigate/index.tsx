import React from 'react';
import {useNavigate} from "react-router-dom";

export const ButtonNavigate = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
        //navigate("/", {replace: true}) // Флаг для того что не сохранять не чего в истории
    }

    return (
        <div onClick={goBack}>
            Go back
        </div>
    );
};