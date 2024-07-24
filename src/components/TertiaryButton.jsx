import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TertiaryButton = ({ label = "", onClick, iconLeft, iconRight, type ='button' }) => {

  return (<button
    className={` rounded-[20px]  text-text-primary   hover:drop-shadow-glow shadow-primary-300 transition-all`}
    onClick={onClick}
    type={type}

  >
    <div className='flex flex-row gap-3 items-center content-center active:scale-[.9] transition-all duration-[25ms]'>
      {iconLeft &&
        <FontAwesomeIcon  size='16' width='1rem' height='1rem' icon={iconLeft} />
      }
      {label &&
        <span className='pb-[3px]'>{label}</span>
      }
      {iconRight &&
        <FontAwesomeIcon  size='16' width='1rem' height='1rem' icon={iconRight} />
      }
    </div>

  </button>);

};

export default TertiaryButton;