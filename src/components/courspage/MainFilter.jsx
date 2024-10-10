import React from 'react'
import { useCategoryCourses } from '../../core/services/query/queries'
import { useSelector } from 'react-redux'

const MainFilter = () => {

    const query = useSelector(state => state.data)
    console.log(query)


    const category = useCategoryCourses()
    console.log(category)

  return (
<>
    { category.data?.map((data)=>(

  <div  className="z-40 relative " >
        
                                
            <label to='checkbox'>{data?.techName}</label>
              <input type='checkbox' name='checkbox' className='ml-2 cursor-pointer z-[800]' />

              
   </div>

    ))

 

    }
</>
  )
}

export default MainFilter
