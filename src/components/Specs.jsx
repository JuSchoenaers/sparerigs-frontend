'use client'

import React, { useEffect, useState } from 'react';
import InputText from './InputText';
import SecondaryButton from './SecondaryButton';
import { faCheck, faMultiply, faPen, faPenAlt, faPencil, faPenClip, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import TertiaryButton from './TertiaryButton';
import PrimaryButton from './PrimaryButton';


const Specs = ({ viewOnly = false }) => {
    const [specs, setSpecs] = useState([])
    const [newSpec, setNewSpec] = useState(false)
    const [newKey, setNewKey] = useState('')
    const [newValue, setNewValue] = useState('')
    const addNewSpec = () => {
        setNewSpec(true)
    }

    const addSpec = (key, value) => {
        if (key && value) {
            setSpecs([...specs, { key: key, value: value, edit: false }]);
            setNewKey('');
            setNewValue('');
            setNewSpec(false);
        }
    }

    const handleNewKey = (e) => {
        console.log(e)
        setNewKey(e.target.value)
    }

    const handleNewValue = (e) => {
        setNewValue(e.target.value)
        console.log(e.target.value)

    }

    useEffect(() => {
        setSpecs(specs)

    }, [specs])

    const cancelNewSpec = () => {
        setNewSpec(false)
    }

    const cancelEdit = (index) => {
        const updatedSpecs = specs.map((spec, i) =>
            i === index ? { ...spec, edit: !spec.edit } : spec
        );
        setSpecs(updatedSpecs);
    }

    const toggleEdit = (index) => {
        setNewKey(specs[index].key)
        setNewValue(specs[index].value)

        const updatedSpecs = specs.map((spec, i) =>
            i === index ? { ...spec, edit: !spec.edit } : spec
        );
        setSpecs(updatedSpecs);
    }
    const updateSpec = (index, key, value) => {
        const updatedSpecs = specs.map((spec, i) =>
            i === index ? { key: key, value: value, edit: false } : spec
        );
        setSpecs(updatedSpecs);
        setNewKey('')
        setNewValue('')
    };

    const deleteSpec = (i) => {
        const updatedSpecs = specs.filter((value, index) => index != i)
        setSpecs(updatedSpecs);
    };

    return (
        <>
            {specs.length == 0 && !newSpec &&
                        <PrimaryButton className={``} label='Add spec' onClick={() => addNewSpec()} iconLeft={faPlus}></PrimaryButton>
            }
            {specs.length > 0 || newSpec &&
                <div className={`bg-tertiary-800 relative p-6 rounded-3xl`} >
                    {!viewOnly &&
                        <PrimaryButton className={`absolute bottom-[-20px] left-[50%] translate-x-[-50%]`} label='Add spec' onClick={() => addNewSpec()} iconLeft={faPlus}></PrimaryButton>
                    }
                    <table className='w-full'>
                        {
                            specs.map((specs, index) => {

                                if (specs.edit && !viewOnly) {
                                    return (
                                        <tr key={index}>
                                            <td className='px-2'>
                                                <InputText value={newKey} placeholder='Key' onChange={(e) => handleNewKey(e)} className='min-w-16'></InputText>
                                            </td>
                                            <td className='px-2'>
                                                :
                                            </td>
                                            <td className='px-2'>
                                                <InputText value={newValue} placeholder='Value' onChange={(e) => handleNewValue(e)} className='min-w-16'></InputText>
                                            </td>
                                            <td className='w-6 p-x2'>
                                                <TertiaryButton iconLeft={faCheck} onClick={() => updateSpec(index, newKey, newValue)} ></TertiaryButton>
                                            </td>
                                            <td className='w-6 p-x2'>
                                                <TertiaryButton iconLeft={faMultiply} onClick={() => cancelEdit(index)} ></TertiaryButton>
                                            </td>
                                        </tr>
                                    )

                                } else {
                                    return (
                                        <tr className='h-12' key={index}>
                                            <td className='px-8'>{specs.key}</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-8'>{specs.value}</td>
                                            {!viewOnly &&
                                                <><td className='w-6 px-2'>
                                                    <TertiaryButton iconLeft={faPencil} onClick={() => toggleEdit(index)}></TertiaryButton>
                                                </td><td className='w-6 p-x2'>
                                                        <TertiaryButton iconLeft={faTrash} onClick={() => deleteSpec(index)}></TertiaryButton>
                                                    </td></>
                                            }
                                        </tr>)
                                }
                            }


                            )
                        }
                        {
                            newSpec && !viewOnly &&
                            <tr>
                                <td className='px-2'>
                                    <InputText value={newKey} placeholder='Key' onChange={(e) => handleNewKey(e)} className='min-w-16'></InputText>
                                </td>
                                <td className='px-2'>
                                    :
                                </td>
                                <td className='px-2'>
                                    <InputText value={newValue} placeholder='Value' onChange={(e) => handleNewValue(e)} className='min-w-16'></InputText>
                                </td>
                                <td className='w-6 p-x2'>
                                    <TertiaryButton iconLeft={faCheck} onClick={() => addSpec(newKey, newValue)} ></TertiaryButton>
                                </td>
                                <td className='w-6 p-x2'>
                                    <TertiaryButton iconLeft={faMultiply} onClick={() => cancelNewSpec()} ></TertiaryButton>
                                </td>
                            </tr>
                        }
                    </table>

                </div >
            }

        </>
    );
}
export default Specs;