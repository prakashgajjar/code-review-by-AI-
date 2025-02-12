import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
const MainDisplay = () => {
    return (
        <div>
            <div className='flex h-screen w-screen'>
                <div className='h-screen w-[392px]'>
                    <LeftSide />
                </div>
                <div className='h-screen relative w-full overflow-hidden'>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default MainDisplay