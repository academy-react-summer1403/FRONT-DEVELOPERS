import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="  text-secondary mt-20 flex justify-center flex-wrap h-20 my-auto items-center mx-auto">
      <p className="w-full flex justify-center flex-wrap mx-auto">
        {" "}
        لطفا ابتدا وارد حساب کاربری خود شوید!
      </p>
      <NavLink
        to={"/auth/v1"}
        className="text-blue-500 flex justify-center flex-wrap w-full"
      >
        ورود به حساب
      </NavLink>
    </div>
  );
};

export default Notfound;
