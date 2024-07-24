import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SecondaryButton = ({ label = "", onClick, iconLeft, iconRight, type ='button' }) => {

    return (<button
        className={`flex flex-row gap-3 rounded-[20px] px-[10px] items-center content-center text-text-primary h-10 border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow shadow-primary-300 active:bg-primary-500 active:bg-opacity-30  transition-all`}
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
    </button>);

};

export default SecondaryButton;