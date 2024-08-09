'use client'

import React, { useEffect, useRef, useState } from 'react';


const DropdownModal = ({ children, visible,onClose  }) => {
  const [modalVisible, setModalVisible] = useState(visible)
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Function to check if the click was outside the component
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setModalVisible(false); // Close the dropdown when a click outside is detected
            onClose()
        }
    };

    // Attach the listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the listener on component unmount
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    
}, []);

useEffect(() => {
  setModalVisible(visible)
}, [visible])


  return (
    <div ref={dropdownRef} className={`max-h-64 overflow-scroll flex-col z-[1000] gap-2 bg-secondary-800 py-3 rounded-2xl w-96 text-text-primary  border-2 border-primary-500 absolute mt-2 ${!modalVisible ? 'hidden': 'flex'}`}>
      {children}
    </div>


  );

};

export default DropdownModal;