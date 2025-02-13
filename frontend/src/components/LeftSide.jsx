import React, { useEffect, useState ,useContext} from 'react'
import contextProvider from '../Hooks/ConetxtProvider'
const LeftSide = () => {
  const {selectedModel , setSelectedModel} = useContext(contextProvider)
  const[date,setDate] = useState(null)
  useEffect(()=>{
    const today = new Date();
    setDate(today.toLocaleDateString())
  },[])
  return (
    <div className='h-full w-full bg-[#171717] overflow-y-auto '>
      <div className='flex absolute left-8 mt-8 gap-5 '>
        <h2 className='text-white opacity-60 text-3xl  font-bold'>{selectedModel}</h2>
      </div>
        <hr className=' mt-20 w-[326px] border-[1px] border-zinc-800 '/>
        <div>
          
        </div>
    </div>
  )
}

export default LeftSide