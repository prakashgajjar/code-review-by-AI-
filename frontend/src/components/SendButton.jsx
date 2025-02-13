import React, { createContext } from 'react'
import { useContext } from 'react'
import contextProvider from '../Hooks/ConetxtProvider'

const SendButton = () => {
  const { getGeminiResponse ,setInputData , inputData ,setInput1Data , setFileInputShow} = useContext(contextProvider)
  return (
    <div>
        <button onClick={()=>{
          setInput1Data(inputData)
          setFileInputShow(false) 
          getGeminiResponse()
          setInputData('')
        }} className='bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-60'><img src="/icons/arrow3.png" className='rotate-180 w-12 h-8 ' /></button>
    </div>
  )
}

export default SendButton