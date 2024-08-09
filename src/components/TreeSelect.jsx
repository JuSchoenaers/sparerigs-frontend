'use client'

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import DropdownModal from './DropdownModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Category = ({ category, handleSelect }) => {
    const {t} = useTranslation()
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        if (category.children && category.children.length > 0) {
            setIsExpanded(!isExpanded);
        } else {
            handleSelect(category);
        }

    };

    return (
        <li className='mx-4 py-2'>
            <div className='flex flex-row gap-2 items-center' onClick={toggleExpand} style={{ cursor: 'pointer' }}>
                {category.children && category.children.length > 0 &&
                    <FontAwesomeIcon className='w-4 h-4' icon={isExpanded ? faChevronDown : faChevronRight} />
                }
                {t(category.name)}
            </div >
            {isExpanded && category.children && category.children.length > 0 && (
                <ul>
                    {category.children.map((child) => (
                        <Category key={child.id} handleSelect={handleSelect} category={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const CategoryTree = ({ categories, handleSelect }) => {
    return (
        <ul className='px-4 py-2'>
            {categories.map((category) => (
                <Category key={category.id} handleSelect={handleSelect} category={category} />
            ))}
        </ul>
    );
};
const TreeSelect = ({initialValue={name:'',id:null}, placeholder = 'Placeholder', onChange, className, initialTree=[], name }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [tree, setTree] = useState(initialTree)
    const [treeItem,setTreeItem] = useState(initialValue)
    const {t} = useTranslation()

    useEffect(() => {
        setTree(initialTree)
    }, [initialTree])

    const handleFocus = (focusState) => {
        setModalVisible(focusState)
    }
    const handleSelect = (e) => {
        setTreeItem(e)
        onChange(e)
    }
    const onClose=()=> setModalVisible(false)
    
    const onOpen=()=> setModalVisible(false)

    return (
        <div>
            <div className={`${className} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`} >
                <input readOnly type='text' id={name} name={name} value={t(treeItem.name)} onFocus={() => handleFocus(true)} placeholder={placeholder} className='bg-secondary-800 pb-[3px] w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary' />
                <FontAwesomeIcon className='w-4 h-4' icon={modalVisible? faChevronDown : faChevronRight}></FontAwesomeIcon>
            </div>
            {tree.length > 0 &&
                <DropdownModal visible={modalVisible} onClose={onClose}>
                        <CategoryTree handleSelect={handleSelect} categories={tree}></CategoryTree>
                </DropdownModal>
            }

        </div>


    );

};

export default TreeSelect;