import React, { createContext } from 'react'
import { useContext } from 'react'
import contextProvider from '../Hooks/ConetxtProvider'

const SendButton = () => {
  const { getGeminiResponse ,setInputData } = useContext(contextProvider)
  return (
    <div>
        <button onClick={()=>{
          getGeminiResponse()
          setInputData('')

        }} className='bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-60'><img src="/icons/arrow3.png" alt="" srcset="" className='rotate-180 w-12 h-8 ' /></button>
    </div>
  )
}

export default SendButton