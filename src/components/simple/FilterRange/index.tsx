import React, {ChangeEvent, FC, useState} from 'react';
import "../../../styles/_filter-range.scss"

export const FilterRange: FC = () => {

    const [val, setVal] = useState(50)

    const getInitialState = () => {
        return {value: 3};
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(() => Number(event.target.value))
        console.log(event.target.value)
    }
    return (
        <div className="filterRange">
            <input className="filterRange-input"
                id="typeinp"
                type="range"
                min="0"
                max="50"
                value={val}
                onChange={handleChange}
                step="1"
            />

        </div>
    );
};