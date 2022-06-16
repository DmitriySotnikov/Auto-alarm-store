import React, {FC} from 'react';
import {genId} from "../../util/uuid"
import Phone from "../../assets/icon/phone.svg"
import Clock from "../../assets/icon/clock.svg"
import Location from "../../assets/icon/location.svg"
import Whatsapp from "../../assets/icon/whatsapp.svg"

export type IconType =
    | "Phone"
    | "Location"
    | "Whatsapp"
    | "Clock"

const IconTypes = new Map([
    ["Phone", <Phone key={genId()}/>],
    ["Location", <Location key={genId()}/>],
    ["Whatsapp", <Whatsapp key={genId()}/>],
    ["Clock", <Clock key={genId()}/>],
])

export interface IIcon {
    type: IconType
}

const iconType = (type: IconType) => {
    return (
        IconTypes.get(type)
    )
}

export const Icon: FC<IIcon> = ({type}) => {
    return (
        <div className="icon">
            {iconType(type)}
        </div>
    );
};