import React from 'react';

const Button = ({ label, onClick, secondary }) => {

    if (!secondary)
        return (
            <button
                className={`rounded bg-primary-500 h-min border-2 border-primary-500 align-middle pt-1 pb-[6px] bg-opacity-60 hover:drop-shadow-glow shadow-primary-300 active:bg-primary-600 transition-all font-semibold hover:border-glow
                    rounded-full px-4 text-white`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    else return (
        <button
            className={`rounded border-2 border-primary-500 pt-1 pb-[6px] hover:drop-shadow-glow bg-primary-50 bg-opacity-5 shadow-primary-300 active:bg-opacity-15 h-min transition-all hover:border-glow
                     rounded-full py-2 px-4 font-semibold text-white`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;