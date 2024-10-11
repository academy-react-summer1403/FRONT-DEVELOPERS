import React from "react";
// import { useCategoryCourses } from "../../core/services/query/queries";
import { useDispatch, useSelector } from "react-redux";
import { QuerySlice } from "../../core/redux/slices/QueryState/QueryRedux";

const MainFilter = () => {
  const query = useSelector((state) => state.QueryState.data);
  console.log(query);

  const dispatch = useDispatch();

  // const category = useCategoryCourses();
  // console.log(category);

  


  return (
    <>
      
        <div className="z-40 relative flex flex-col ml-[120px] gap-2  w-[200px]">
          <div className="flex flex-row justify-center">
             <label to="checkbox">React</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("React"))}
          />
          </div>
          <div className="flex flex-row justify-center mr-[10px]">
             <label to="checkbox">NextJs</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("NextJs"))}
          />
          </div>
            <div className=" flex flex-row justify-center mr-[15px]">
               <label to="checkbox">فرانت اند</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("فرانت اند"))}
          /> 
            </div>
          <div className="flex flex-row justify-center">
          <label to="checkbox">بک اند</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-3 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add("بک اند"))}
          />

          </div>
          <div className="flex flex-row justify-center">
             <label to="checkbox" className="whitespace-nowrap">Tailwind css</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-1 cursor-pointer z-[800] mr-[40px]"
            onClick={() => dispatch(QuerySlice.actions.Add("Tailwind css"))}
          /> 
          </div>
         
        </div>
      
    </>
  );
};

export default MainFilter;
