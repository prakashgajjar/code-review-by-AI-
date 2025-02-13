import React from 'react'
import SerchBar from './SerchBar'
import DisplayText from './DisplayText'
import NoticeText from './NoticeText'
import ChnageModels from './ChnageModels'

const RightSide = () => {
  return (
    <div>
        <div className='bg-[#212121] w-full h-screen flex justify-center '>
          <div className='absolute mt-10 left-12'>
            <ChnageModels/>
          </div>
            <div className=''>
                <DisplayText/>
            </div>
            <div className='absolute bottom-12 '>
            <SerchBar/>
            </div>
            <div className='absolute bottom-3 '>
                <NoticeText/>
            </div>
        </div>
    </div>
  )
}

export default RightSide