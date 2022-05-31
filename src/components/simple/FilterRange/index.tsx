import React, {ChangeEvent, FC, useState} from 'react';
import "../../../styles/_filter-range.scss"

export const FilterRange: FC = () => {

    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(50)

    const getInitialState = () => {
        return {value: 3};
    }

    const handleChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setMinVal(() => Number(event.target.value))
        //console.log(event.target.value)
    }
    const handleChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(() => Number(event.target.value))
        //console.log(event.target.value)
    }
    const handleChangeDiv = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)
    }
    return (
        <div className="filterRange" onChange={handleChangeDiv} >
            <input className="filterRange-input" style={{right: "8px"}}
                   id="typeinp"
                   type="range"
                   min="0"
                   max="50"
                   value={minVal}
                   onChange={handleChangeMin}
                   step="1"
                   onClick={() => {console.log("клик")}}
            />
            <input className="filterRange-input" style={{left: "8px"}}
                   id="typeinp"
                   type="range"
                   min="0"
                   max="50"
                   value={maxVal}
                   onChange={handleChangeMax}
                   step="1"
                   onClick={() => {console.log("клик")}}
            />
        </div>
    );
};