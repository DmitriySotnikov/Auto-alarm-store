import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {triggerIsActive} from '../../store/reducer/UISlice';
import {useDispatch} from "react-redux";

export const CatalogTrigger: FC = () => {

    const {trigger} = useAppSelector(state => state.ui)

    const dispatch = useDispatch()

    return (
        <div className={trigger ? "trigger trigger--active" : "trigger"} onClick={() => dispatch(triggerIsActive(!trigger))} >
            <div className={trigger ? "trigger__icon trigger__icon--active" : "trigger__icon"}>
                <div className={trigger ? "trigger__icon-line trigger-icon-line--active" :
                "trigger__icon-line"}/>
            </div>
            <div className={trigger ? "trigger__text trigger__text--active" :
                "trigger__text"}>
                Каталог
            </div>
        </div>
    );
};