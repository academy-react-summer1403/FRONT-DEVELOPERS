import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useTypeCourses } from '../../core/services/query/queries';
import { Add } from '../../core/redux/slices/QueryState/QueryRedux';

const TypeFilter = () => {


  const query = useSelector((state) => state.QuerySlice.data);
  console.log(query);

  const dispatch = useDispatch();

    const type = useTypeCourses()
    console.log(type)



  return (
    <>
      
        <div className="z-40 relative flex flex-col gap-2  ">
          <div className="flex flex-row justify-center ml-[105px]">
             <label to="checkbox" >{type.data?.[0].typeName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(Add(1))}
          />
          </div>
          <div className="flex flex-row justify-center ml-[125px]">
             <label to="checkbox">{type.data?.[1].typeName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(Add(2))}
          />
          </div>
            <div className=" flex flex-row justify-center ml-[70px]">
               <label className='whitespace-nowrap' to="checkbox">{type.data?.[2].typeName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(Add(3))}
          /> 
            </div>
       
        
         
        </div>
      
    </>
  )
}

export default TypeFilter
