
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InputText = ({ label = "", onChange, value, placeholder='Placeholder', iconLeft, iconRight, name, type="text",className }) => {

    return (
        <div className={`${className} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`} >
        {iconLeft &&
          <FontAwesomeIcon className='group-focus-within:drop-shadow-glow group-hover:drop-shadow-glow fill-primary-400 shadow-primary-300'  color='#7F22F1' size='16' width='1rem' height='1rem' icon={iconLeft} />
        }
        <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} className='bg-secondary-800 pb-[3px] w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary' />

        {iconRight &&
          <FontAwesomeIcon className='group-focus-within:drop-shadow-glow group-hover:drop-shadow-glow fill-primary-400 shadow-primary-300' color='#7F22F1' size='16' width='1rem' height='1rem' icon={iconRight} />
        }
      </div>
  
    );

};

export default InputText;