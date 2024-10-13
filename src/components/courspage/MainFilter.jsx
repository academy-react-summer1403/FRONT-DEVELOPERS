import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuerySlice } from "../../core/redux/slices/QueryState/QueryRedux";
import { useCategoryCourses } from "../../core/services/query/queries";

const MainFilter = () => {
  const query = useSelector((state) => state.QueryState.data);
  console.log(query);

  const dispatch = useDispatch();

  const category = useCategoryCourses();
  console.log(category.data?.[0].techName);

  


  return (
    <>
      
        <div className="z-40 relative flex flex-col ml-[120px] gap-2  w-[200px]">
          <div className="flex flex-row justify-center">
             <label to="checkbox">{category.data?.[0].techName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add(1))}
          />
          </div>
          <div className="flex flex-row justify-center -mr-[16px]">
             <label to="checkbox">{category.data?.[1].techName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add(2))}
          />
          </div>
            <div className=" flex flex-row justify-center -mr-[14px]">
               <label to="checkbox">{category.data?.[2].techName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add(3))}
          /> 
            </div>
          <div className="flex flex-row justify-center">
          <label to="checkbox">{category.data?.[3].techName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-3 cursor-pointer z-[800]"
            onClick={() => dispatch(QuerySlice.actions.Add(4))}
          />

          </div>
       
         
        </div>
      
    </>
  );
};

export default MainFilter;
