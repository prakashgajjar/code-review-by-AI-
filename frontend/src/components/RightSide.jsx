import React from 'react'
import SerchBar from './SerchBar'
import DisplayText from './DisplayText'
import NoticeText from './NoticeText'

const RightSide = () => {
  return (
    <div>
        <div className='bg-[#212121] w-full h-screen flex justify-center '>
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