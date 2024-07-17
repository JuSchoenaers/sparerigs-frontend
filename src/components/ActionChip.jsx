import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ActionChip = ({ label, onClick, info }) => {

     return (
        
        <div className='h-8 pt-[2px] text-white bg-primary-900 px-4 rounded-2xl bg-transparent gap-5 border flex flex-row  border-primary-500 w-max'>
            
            {info}
            <span className='w-[1px] bg-white my-1'></span>
            <button className='pb-[3px] flex flex-row gap-2 items-center hover:drop-shadow-glow shadow-primary-400 filter-none transition-all hover:animate-pulse' >{label}<FontAwesomeIcon icon={faArrowRight} width={12}></FontAwesomeIcon></button>
        </div>
    );
};

export default ActionChip;