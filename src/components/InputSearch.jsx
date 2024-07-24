'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import TertiaryButton from './TertiaryButton';
import DropdownModal from './DropdownModal';

async function getArticles(searchParam) {
  console.log(searchParam)
  const res = await fetch("http://localhost:8080/sparerigs-dev/items/search", {
    method: "POST",
    mode: 'cors',
    body: searchParam

  })
  return res.json()
}

async function read(id) {
  const res = await fetch("http://localhost:8080/sparerigs-dev/items/read?id=" + id, {
    method: "GET",
    mode: 'cors',

  })
  return res.json()
}

const InputSearch = ({ label = "", value, placeholder = 'Placeholder',className , name, type = "text" }) => {
  const [searchParam, setSearchParam] = useState('')
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const onChange = (value) => {
    setSearchParam(value)
    if (value.length >= 2)
      getArticles(value).then(items => {
        if (items.length > 0)
          setModalVisible(true)
        else
          setModalVisible(false)
        setItems(items)
      })
    else setItems([])
  }

  const handleSearch = () => {
    getArticles(searchParam).then(items => {
      if (items.length > 0 )
        setModalVisible(true)
      else
        setModalVisible(false)

      setItems(items)
    })
  }

  const handleSelection = (e) => {
    setModalVisible(false)
    read(e.target.parentElement.getAttribute('data-key')).then(val => console.log(val))
  }

  const highlightResult = (itemInfo, query) => {
    const parts = itemInfo.split(new RegExp(`^(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
      </span>
    )
  }

  useEffect(() => {
  }, [items])

  return (
    <div>
      <div className={`${className} group flex flex-row gap-6 px-5 items-center min-w-96 content-center h-12 bg-secondary-800 rounded-2xl  border-2 border-primary-500 hover:border-primary-300 hover:drop-shadow-glow focus-within:border-primary-300 focus-within:drop-shadow-glow shadow-primary-300`} >
        <input type={type} id={name} name={name} value={searchParam} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className='bg-secondary-800 pb-[3px] w-full bg-opacity-0 outline-none placeholder:text-text-primary placeholder:text-opacity-25 text-text-primary' />
        <TertiaryButton iconLeft={faMagnifyingGlass} onClick={handleSearch} />
      </div>
      {items.length > 0 && modalVisible &&
        <DropdownModal>
          {
            items.map(val => {
              return (
                <span key={val.id} data-key={val.id} onClick={handleSelection} className='px-5 hover:bg-secondary-700 py-1' >
                  {highlightResult(val.brand.brandName, searchParam)} {highlightResult(val.classification.name, searchParam)} {highlightResult(val.model, searchParam)}
                </span>
              )
            })
          }

        </DropdownModal>

      }

    </div>


  );

};

export default InputSearch;