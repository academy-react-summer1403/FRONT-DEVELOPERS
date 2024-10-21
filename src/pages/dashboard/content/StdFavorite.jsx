import React from 'react'
import FavoriteHeader from '../../../components/dashboard/favorite/FavoriteHeader'
import FavoriteMap from '../../../components/dashboard/favorite/FavoriteMap'

const StdFavorite = () => {
  return (
    <div className='px-1 py-2 min-w-[400px]'>
      

      {/* list of courses:  */}
      <div className='my-4 '>
        <FavoriteHeader/>
        <FavoriteMap/>
      </div>

      {/* paginatiion:  */}
      {/* <div className='border grid justify-items-center my-4'>paginatiion</div> */}
    </div>
  )
}

export default StdFavorite