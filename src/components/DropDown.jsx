'use client'

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Children, useEffect, useState } from 'react';
import DropdownModal from './DropdownModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import ListItem from './ListItem';


const Dropdown = ({ initialValue = {label : '', id:null}, placeholder = 'Placeholder', onChange, className, initialOptions = [], name, }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [options, setOptions] = useState(initialOptions)
    const [selected, setSelected] = useState(initialValue)
    const { t } = useTranslation()

    useEffect(() => {
        setOptions(initialOptions)
    }, [initialOptions])

    const handleFocus = (focusState) => {
        setModalVisible(focusState)
    }

    const onClose = () => setModalVisible(false)

    const handleClick = (item) =>{
        console.log(item)
        setSelected(item)
        onChange(item)
    }

    return (
        <div>
            <div className={`${className} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`} >
                <input readOnly type='text' id={name} name={name} value={t(selected.label)} onFocus={() => handleFocus(true)} placeholder={placeholder} className='bg-secondary-800 pb-[3px] select-none w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary' />
                <FontAwesomeIcon className='w-4 h-4' icon={modalVisible ? faChevronDown : faChevronRight}></FontAwesomeIcon>
            </div>
            {options.length > 0 &&
                <DropdownModal visible={modalVisible} onClose={onClose}>
                    <ul>
                        {options.map((item)=>(
                            <ListItem key={item.id} item={item} onClick ={handleClick}>

                            </ListItem>
                        ))}
                    </ul>


                </DropdownModal>
            }

        </div>


    );

};

export default Dropdown;