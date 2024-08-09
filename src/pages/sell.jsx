


import getBrands from '@/app/api/brands';
import getClassificationTree from '@/app/api/classification';
import Dropdown from '@/components/DropDown';
import InputText from '@/components/InputText';
import Slider from '@/components/Slider';
import Specs from '@/components/Specs';
import TreeSelect from '@/components/TreeSelect';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const getFormattedOptions = (brands) => {
  return brands.map(val => {
    console.log(val)
    return { label: val.brandName, id: val.id, image: val.brandLogo }
  })
}

export default function Sell() {
  const [tree, setTree] = useState([])
  const [brands, setBrands] = useState([])

  const [classification, setClassification] = useState()
  const [modelName, setModelName] = useState('')
  const [brand, setBrand] = useState()
  const [state, setState] = useState(0)

  const [price, setPrice] = useState(0)


  useEffect(() => {
    getClassificationTree().then(val => setTree(val))
    getBrands().then(val => {
      let brands = getFormattedOptions(val)
      setBrands(brands)
      console.log(brands)
    })

  }, [])

  const handleClassificationChange = (e) => setClassification(e)
  const handleModelNameChange = (e) => setModelName(e.target.value)
  const handleBrandChange = (e) => setBrand(e)
  const handleStateChange = (e) => setState(e.target.value)
  const handlePriceChange = (e) => setPrice(e.target.value)

  return (
    <div className='w-3/5 p-8 bg-tertiary-900 rounded-4xl flex flex-row gap-4'>
      <div className='w-6/12 flex flex-col gap-4'>
        <h1>Classification</h1>
        <TreeSelect placeholder='Classification' onChange={handleClassificationChange} initialTree={tree}></TreeSelect>
        <h1>Model name</h1>
        <InputText value={modelName} onChange={handleModelNameChange} placeholder='Model name'></InputText>
        <h1>Brand</h1>
        <Dropdown initialOptions={brands} onChange={(e) => handleBrandChange(e)} placeholder='Brand'></Dropdown>
        <h1>Specs</h1>
        <Specs></Specs>
        <h1>State</h1>
        <Slider min={0} value={state} onChange={handleStateChange} max={5} step={1} lowName='New' highname='For pieces'></Slider>
        <h1>Price</h1>
        <InputText value={price} onChange={handlePriceChange} type='number' placeholder='Model name'></InputText>
      </div>
      <div className='w-6/12 flex flex-col gap-4'>
        <div className='flex flex-row gap-1'>
          <span>
            {brand?.label}
          </span>
          <span>
            {modelName}
          </span>
          <span>
            {classification?.name}
          </span>
        </div>
      </div>
    </div>
  );
}