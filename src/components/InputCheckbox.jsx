'use client'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
const InputCheckbox = ({ onChange, value=false, name,label }) => {
  const [checked,setChecked]=useState(value)



  const handleClick=()=>{
    setChecked(!checked)
  }

  return (
    <div className='group flex flex-row gap-5 items-center content-center h-12' >
      <input type='checkbox' name={name} checked={checked} onChange={onChange} className='custom-checkbox group hidden'  />
      <label htmlFor="checkbox" className="custom-checkbox-label flex items-center cursor-pointer hover:border-primary-300 hover:drop-shadow-glow hover:shadow-primary-300" onClick={handleClick}>
        <span className="icon w-5 h-5 flex flex-row items-center content-center justify-center mr-2 border-2 group-checked:bg-primary-300 border-primary-500 rounded-md bg-primary-800 text-text-primary flex-shrink-0 ">
          <FontAwesomeIcon className='w-4 h-4 hidden' icon={faCheck}/>
        </span>
        <span className="select-none text-text-primary">{label}</span>
      </label>
    </div>

  );

};

export default InputCheckbox;