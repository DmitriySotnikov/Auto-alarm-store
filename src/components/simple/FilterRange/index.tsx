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

    return (
        <div className="filterRange">
            <div className="filterRange-item">
                <input className="filterRange-input"
                       id="min"
                       type="number"
                       min="0"
                       max="50"
                       value={minVal}
                       onChange={handleChangeMin}
                       step="1"
                       placeholder="От"
                />
                <span className="filterRange-prefix">От:</span>
            </div>
            <input className="filterRange-input"
                   id="max"
                   type="number"
                   min="0"
                   max="50"
                   value={maxVal}
                   onChange={handleChangeMax}
                   step="1"
            />
            <span className="filterRange-prefix">До:</span>
        </div>
    );
};