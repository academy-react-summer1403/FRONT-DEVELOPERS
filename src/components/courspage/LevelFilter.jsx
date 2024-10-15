import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLevelCourses } from '../../core/services/query/queries';
import { Add } from '../../core/redux/slices/QueryState/QueryRedux';

const LevelFilter = () => {

    const query = useSelector((state) => state.QuerySlice.data);
    console.log(query);
  
    const dispatch = useDispatch();

   const Levels = useLevelCourses()
    console.log(Levels)

  return (
    <>
      
    <div className="z-40 relative flex flex-col ml-[120px] gap-2  w-[200px]">
      <div className="flex flex-row justify-center">
         <label to="checkbox">  مبتدی</label>
      <input
        type="checkbox"
        name="checkbox"
        className="ml-2 cursor-pointer z-[800]"
        onClick={() => dispatch(Add(1))}
      />
      </div>
      <div className="flex flex-row justify-center -ml-[3px]">
         <label to="checkbox">متوسط</label>
      <input
        type="checkbox"
        name="checkbox"
        className="ml-2 cursor-pointer z-[800]"
        onClick={() => dispatch(Add(2))}
      />
      </div>
        <div className=" flex flex-row justify-center mr-[4px]">
           <label to="checkbox">پیشرفته</label>
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

export default LevelFilter
