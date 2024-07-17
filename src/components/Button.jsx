import React from 'react';

const Button = ({ label, onClick, secondary }) => {

    if (!secondary)
        return (
            <button
                className={`rounded bg-primary-500 border-2 border-primary-500 align-middle pt-2 pb-3 hover:drop-shadow-glow active:bg-primary-600 font-semibold hover:border-glow
                    rounded-full py-2 px-4 text-white`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    else return (
        <button
            className={`rounded border-2 border-primary-500 bg-primary-50 bg-opacity-50 hover:bg-primary-50 active:bg-primary-100 pt-2 pb-3 hover:drop-shadow-glow hover:border-glow
                     rounded-full py-2 px-4 font-semibold text-primary-500`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;