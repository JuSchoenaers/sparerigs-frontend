import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TertiaryButton from './TertiaryButton';

const ActionChip = ({ label, onClick, info }) => {

     return (
        
        <div className='h-8 pt-[2px] text-white bg-primary-900 px-4 rounded-2xl bg-transparent gap-5 border flex flex-row  border-primary-500 w-max'>
            
            {info}
            <span className='w-[1px] bg-white my-1'></span>
            <TertiaryButton label={label} iconRight={faArrowRight} onClick={onClick}></TertiaryButton>
        </div>
    );
};

export default ActionChip;