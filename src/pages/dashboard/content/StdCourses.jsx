import React from 'react'
import ListMap from '../../../components/dashboard/stdcourse/ListMap'
import ListHeader from '../../../components/dashboard/stdcourse/ListHeader'

const StdCourses = () => {
  return (
    <div className='px-8 py-2 max-lg:px-4 min-w-[400px]
    max-lg:px-1
    max-sm:px-1
  '>
      {/* search & fillter:  */}
      <div className='border-b grid grid-cols-4 justify-items-end pb-8 my-4' >
        <div className='col-span-1 justify-self-end border border-red-500 w-full'>fillter</div>
        <div className='col-span-3 grid justify-items-end w-full'>
          <div className='border border-red-500 w-3/4'>search</div>
        </div>

      </div>

      {/* list of courses:  */}
      <div className='my-4 '>
        <ListHeader/>
        <ListMap/>
      </div>

      {/* paginatiion:  */}
      <div className='border grid justify-items-center my-4'>paginatiion</div>
    </div>
  )
}

export default StdCourses