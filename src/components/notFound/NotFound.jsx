import React from "react";

import { FaRegFaceFrownOpen } from "react-icons/fa6";
const NotFound = () => {
  return (
    <div className="z-[9] absolute w-full flex flex-col mx-auto justify-center my-12 text-2xl text-secondary ">
      <FaRegFaceFrownOpen className="w-12 h-12 text-secondary flex mx-auto" />
      <p className="text-3xl text-darkgreen flex mx-auto">
        متاسفانه نتیجه یافت نشد{" "}
      </p>
    </div>
  );
};

export default NotFound;
