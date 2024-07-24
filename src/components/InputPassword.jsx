'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import TertiaryButton from './TertiaryButton';
const InputPassword = ({ onChange, value, placeholder = 'Placeholder', name,className }) => {
  const [visible, setVisible] = useState({ icon: 'fa fa-eye', visible: false })

  const toggleVisibility = () => {
    if (visible.visible) {
      setVisible({ icon: 'fa fa-eye-slash', visible: false })
    }
    else {
      setVisible({ icon: 'fa fa-eye', visible: true })
    }
  }

  return (
    <div className={`${className} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`} >
      <input type={visible.visible ? 'text' : 'password'} name={name} value={value} onChange={onChange} placeholder={placeholder} className='bg-secondary-800 pb-[3px] w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary' />
      <TertiaryButton iconLeft={visible.visible ? faEyeSlash : faEye} onClick={toggleVisibility} />
    </div>

  );

};

export default InputPassword;