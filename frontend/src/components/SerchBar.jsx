import React, { useContext } from 'react'
import SendButton from './SendButton'
import contextProvider from '../Hooks/ConetxtProvider'

const SerchBar = () => {
    const { setInputData ,inputData , show , setShow }  = useContext(contextProvider)
  return (
    <div>
        <div className='h-44 w-[1050px] rounded-[34px] bg-[#303030] flex items-center flex-col' >
            <input onChange={(event)=>{
                setInputData(event.target.value)
            }} value={inputData} type="text" name="" id="" className='bg-transparent w-[1000px] mt-3 h-10 text-white font-medium text-xl tracking-wide outline-none' placeholder='Message Novio'  />
            <div className='absolute mt-[110px] ml-[960px]'>
                <SendButton  />
            </div>

        </div>
    </div>
  )
}

export default SerchBar