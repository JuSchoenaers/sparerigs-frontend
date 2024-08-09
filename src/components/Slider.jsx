import React, { useState } from 'react';

const Slider = ({ min, max, step, value, onChange,lowName='', highname='' }) => {
    return (
        <div className="flex flex-row gap-2">
            <span>{lowName}</span>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="accent-primary-400 bg-tertiary-800 h-6 "
            />
            <span>{highname}</span>
        </div>

    );
};

export default Slider;