import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { NavLink, useParams } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { addPayImage } from '../core/services/level2api';

const Paymentall = () => {
  const { paymentId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  const onSubmit = async () => {
    if (!selectedFile) {
      alert("لطفاً یک تصویر انتخاب کنید.");
      return;
    }

    const formData = new FormData();
    formData.append("PaymentId", paymentId);
    formData.append("Image", selectedFile);

    try {
      const response = await addPayImage(formData);
      navi
      console.log(response);
      alert("تصویر با موفقیت آپلود شد.");
    } catch (error) {
      console.error("خطا در آپلود تصویر:", error);
      alert("آپلود تصویر با خطا مواجه شد.");
    }
  };

  return (
    <div>
      <div className="relative w-[550px] rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-16">
        <div className="w-[350px] h-[150px] flex mx-auto justify-center items-center flex-wrap border-dashed border-2 border-gray-400 rounded-md">
          {/* آپلود فایل */}
          <input
            type="file"
            accept="image/*"
            id="fileUpload"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileUpload"
            className="w-full h-full flex items-center justify-center cursor-pointer"
          >
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <span className="text-gray-500 text-sm font-Yekan">
               +
              </span>
            )}
          </label>
          <Tooltip id="addtooltip" />
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="shadow-sm mt-5 ml-5 w-[80px] h-[30px] rounded-[10px] text-[14px] text-white font-Yekan bg-blue-800"
        >
          آپلود عکس
        </button>

        <NavLink
          to={`/payment1/${paymentId}`}
          className="w-24 left-10 bottom-8 absolute text-center flex items-center text-gray-500 text-[14px]"
        >
          <MdNavigateNext className="rotate-180" />
          مرحله قبل
        </NavLink>
      </div>
    </div>
  );
};

export default Paymentall;
