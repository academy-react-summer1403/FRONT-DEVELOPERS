import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTypeCourses } from "../../core/services/query/queries";
import { Add } from "../../core/redux/slices/QueryState/QueryRedux";

const TypeFilter = () => {
  const query = useSelector((state) => state.QuerySlice.search);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState(true);
  const [filter2, setFilter2] = useState(true);
  const [filter3, setFilter3] = useState(true);

  const type = useTypeCourses();

  return (
    <>
      <div className="z-40 relative flex flex-col gap-2  ">
        <div className="flex flex-row justify-end ">
          <label htmlFor="type1" to="checkbox" className="cursor-pointer">
            {type.data?.[0].typeName}
          </label>
          <input
            id="type1"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter
                ? () => dispatch(Add(type.data?.[0].id), setFilter(false))
                : () => dispatch(Add(""), setFilter(true))
            }
          />
        </div>
        <div className="flex flex-row justify-end ">
          <label htmlFor="type2" to="checkbox" className="cursor-pointer">
            {type.data?.[1].typeName}
          </label>
          <input
            id="type2"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter2
                ? () => dispatch(Add(type.data?.[1].id), setFilter(false))
                : () => dispatch(Add(""), setFilter2(true))
            }
          />
        </div>
        <div className=" flex flex-row justify-end ">
          <label
            htmlFor="type3"
            className="whitespace-nowrap cursor-pointer"
            to="checkbox"
          >
            {type.data?.[2].typeName}
          </label>
          <input
            id="type3"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter3
                ? () => dispatch(Add(type.data?.[2].id), setFilter(false))
                : () => dispatch(Add(""), setFilter3(true))
            }
          />
        </div>
      </div>
    </>
  );
};

export default TypeFilter;
