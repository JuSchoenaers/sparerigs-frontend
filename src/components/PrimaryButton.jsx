import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PrimaryButton = ({ label = "", onClick, iconLeft, iconRight, type ='button', className }) => {

    return (<button
        className={`${className} flex flex-row bg-primary-500 gap-3 rounded-[20px] px-[10px] items-center justify-center content-center text-text-primary h-10 border-2 border-primary-500   hover:border-primary-300 hover:drop-shadow-glow shadow-primary-300 active:bg-opacity-80  transition-all`}
        onClick={onClick}
        type={type}
    >
        {iconLeft &&
            <FontAwesomeIcon  size='16' width='1rem' height='1rem' icon={iconLeft} />
        }
        {label &&
            <span className='pb-[3px]'>{label}</span>
        } 
        {iconRight &&
           <FontAwesomeIcon  size='16' width='1rem' height='1rem' icon={iconRight} />
        }
    </button>
    );

};

export default PrimaryButton;