import React, {ChangeEvent, FC, useState} from 'react';
import "../../../styles/_filter-range.scss"

export const FilterRange: FC = () => {

    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(5000)


    const handleChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setMinVal(() => Number(event.target.value))
        //console.log(event.target.value)
    }
    const handleChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(() => Number(event.target.value))
        //console.log(event.target.value)
    }

    let min
    let max

    return (
        <div className="filterRange">
            <div className="filterRange-title">
                <span className="filterRange-titleText">Цена, ₽</span>
            </div>
            <div className="filterRange-content">
                <div className="filterRange-item">
                    <input className="filterRange-input"
                           id="min"
                           maxLength={10}
                           type="text"
                           min="0"
                           max="50"
                           value={min}
                           onChange={handleChangeMin}
                           step="1"
                           placeholder={`${minVal}`}
                    />
                    <span className="filterRange-prefix">От</span>
                </div>
                <div className="filterRange-item">
                    <input className="filterRange-input"
                           id="max"
                           type="text"
                           min="0"
                           max="50"
                           value={max}
                           onChange={handleChangeMax}
                           step="1"
                           placeholder={`${maxVal}`}
                    />
                    <span className="filterRange-prefix">До</span>
                </div>
            </div>
        </div>
    );
};