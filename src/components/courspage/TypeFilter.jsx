import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useTypeCourses } from '../../core/services/query/queries';
import { QuerySlice } from '../../core/redux/slices/QueryState/QueryRedux';

const TypeFilter = () => {


  const query = useSelector((state) => state.QueryState.data);
  console.log(query);

  const dispatch = useDispatch();

    // const Situation = useTypeCourses()
    // console.log(Situation)



  return (
    <>
      
        <div className="z-40 relative flex flex-col ml-[60px] gap-2  w-[200px]">
          <div className="flex flex-row justify-center ml-[30px]">
             <label to="checkbox" >MMdReza Sadaty</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("MMd"))}
          />
          </div>
          <div className="flex flex-row justify-center ml-[70px]">
             <label to="checkbox">مهدی قاسمی</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("مهدی"))}
          />
          </div>
            <div className=" flex flex-row justify-center ml-[135px]">
               <label to="checkbox">علی</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("علی"))}
          /> 
            </div>
       
        
         
        </div>
      
    </>
  )
}

export default TypeFilter
