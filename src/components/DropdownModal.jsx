'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import TertiaryButton from './TertiaryButton';


const DropdownModal = ({ children }) => {


  return (
    <div className='flex flex-col gap-2 bg-secondary-800 py-3 rounded-2xl w-96 text-text-primary  border-2 border-primary-500 absolute mt-2'>
      {children}

    </div>


  );

};

export default DropdownModal;