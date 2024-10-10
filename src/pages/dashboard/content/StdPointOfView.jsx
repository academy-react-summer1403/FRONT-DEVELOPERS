import React from 'react'
import PointOfHeader from '../../../components/dashboard/pointOfView/PointOfHeader'
import PointOfMap from '../../../components/dashboard/pointOfView/PointOfMap'

const StdPointOfView = () => {
  return (
    <div className='px-1 py-2 min-w-[400px]'>
      {/* search & fillter:  */}
      <div className='border-b grid grid-cols-4 justify-items-end pb-8 my-4' >
        <div className='col-span-1 justify-self-end border border-red-500 w-full'>fillter</div>
        <div className='col-span-3 grid justify-items-end w-full'>
          <div className='border border-red-500 w-3/4'>search</div>
        </div>

      </div>

      {/* list of courses:  */}
      <div className='my-4 '>
        <PointOfHeader/>
        <PointOfMap/>
      </div>

      {/* paginatiion:  */}
      <div className='border grid justify-items-center my-4'>paginatiion</div>
    </div>
  )
}

export default StdPointOfView