import React from 'react'

import secure from '../../../assets/dashboard/secure.svg'

const StdSettings = () => {
  return (
    <div className='py-6'>
      {/* title  */}
      <div className='relative gap-36 flex flex-row-reverse'>
        <div className='border border-gray-100  col-1 w-96'></div>
        
        <h3 className=' col-1 absolute bottom-[-8px] left-[43.5%] text-lg text-gray-400 '>تنظیمات امنیتی</h3>
        <img className='absolute right-14 bottom-[-16px] rounded-lg' src={secure}/>
        <div className='border border-gray-100 col-1 w-96'></div>
      </div>

      {/* accardeion  */}
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
    </div>
  )
}

export default StdSettings