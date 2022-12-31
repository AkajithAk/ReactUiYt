import React, { useState } from "react";
import './MultiRange.css';
import MultiRangeSlider from "multi-range-slider-react";

function MultiRnage() {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    
    return(
        <div>
            <div className="range">
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    barInnerColor= "rgb(19, 209, 187)"
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <h1>minValue: {minValue}</h1>
                <h1>maxValue: {maxValue}</h1>
            </div>
        </div>
    );
}
export default MultiRnage;