import React, { useContext, useEffect, useState } from 'react'
import contextProvider from '../Hooks/ConetxtProvider'
const ChnageModels = () => {
    
    const {selectedModel , setSelectedModel} = useContext(contextProvider)
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value)
    }
    useEffect(()=>{
        console.log(selectedModel)
     },[selectedModel]
    )

  return (
    <div>
        <div>
            <select  name="models" id="" onChange={handleModelChange} className='outline-none bg-transparent text-2xl  text-white opacity-50'>
                <option defaultChecked  className='outline-none bg-transparent text-2xl bg-zinc-800 text-white opacity-50 ' value="Novio Genisis">Novio Genisis</option>
                <option className='outline-none bg-transparent text-2xl bg-zinc-800 text-white opacity-50 p-2' value="Novio Infinity">Novio Infinity</option>
            </select>
        </div>
    </div>
  )
} 

export default ChnageModels