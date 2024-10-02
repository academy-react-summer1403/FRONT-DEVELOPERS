import React from 'react'

import fima from '../../assets/courses/figma.svg'

const CoursCard = () => {
  return (
    <div className='border-2 grid grid-cols-3 gap-4 mt-8 p-2'>
        <div className='relative border-2 grid-cols-1 rounded-xl p-2'>
            <div className='border-2 relative top-[-25px] rounded-xl bg-purple'>
                <img src={fima}/>
            </div>
            <div >body</div>
        </div>
        <div className='border-2 grid-cols-1'>
            <div>head</div>
            <div>body</div>
        </div>
        <div className='border-2 grid-cols-1'>
            <div>head</div>
            <div>body</div>
        </div>
    </div>
  )
}

export default CoursCard