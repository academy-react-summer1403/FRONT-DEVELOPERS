import React, { useState } from 'react'
import { TiCameraOutline } from "react-icons/ti";
import { ImageErrore } from '../../ImageErrore';
import { HiXCircle } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';
import { usepostUserImg } from '../../../core/services/mutation/DashboardMutation';   


import Avatar from "react-avatar-edit";

function AddProfImage({allimages , currentImage}) {
    const postUserImg = usepostUserImg()
console.log("allimages" , allimages)
    const [Open, setOpen] = useState(false)
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  const handlePostUserImg =(e)=> {
    // e.preventDefault();

        const formFile = new FormData(e.target);
        formFile.append("formFile", preview);
       
        console.log("formFile" , formFile)
        postUserImg.mutate(formFile)
      

  }
  return (
    <div>

           {/* open modal  */}
        <div onClick={()=>setOpen(true)} className='group relative flex mx-auto cursor-pointer rounded-full border w-40 h-40 mt-4 overflow-hidden'>
            <img src={currentImage ? currentImage : <ImageErrore/>} onError={ImageErrore} className="absolute rounded-full w-40 h-40 "/>
            <div className="absolute bottom-0 w-full h-10 bg-gray-600/40 z-40"> <TiCameraOutline className="flex mx-auto text-white w-8 h-8" /></div>
        </div>

        {/* modal:  */}
    
        <div style={{backdropFilter: "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) "}}
        className={`fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-500/80 z-[9999] rounded-xl
            ${Open ? "block" : "hidden "} transition-all duration-700 ease-in-out  backdrop-blur-sm
        `}>
            {/* close modal    */}
            <HiXCircle onClick={()=>setOpen(false)} className='absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100'/>
            
            {/* main image  */}
            <div className='relative'>
                <img src={preview ? preview : currentImage}  onError={ImageErrore}  className='w-56 h-56 rounded-xl' />
                <div onClick={()=>handlePostUserImg(preview)} data-tooltip-id="tooltip" data-tooltip-content="تنظیم به عنوان تصویر اصلی"  className='cursor-pointer w-9 h-9 absolute pl-1.5 pt-1.5 bg-white rounded-full shadow-md bottom-[-10px] right-[-10px]'>
                    <FaCheck className='text-lime-600 w-6 h-6 '/>
                </div><Tooltip id="tooltip" />
            </div>

            {/* map image  */}
            <div className='flex flex-row gap-3 justify-center text-white' >
                {allimages.map((data , index)=>(
                    <div key={index} className='relative group'>
                        <img  src={data.puctureAddress} className='w-[100px] h-[100px] rounded-md' />
                        <div className='w-6 h-6 absolute hidden group-hover:block rounded-full bg-white text-red-500 p-1 -top-2 -left-2'><HiX /></div>
                        
                    </div>
                
                ))} 

                
           

            

            {/* choose & crop  */}
            <div data-tooltip-id="addtooltip" data-tooltip-content="اضافه کردن عکس جدید" >            
                <Avatar
                    width={100}
                    height={100}
                    onCrop={onCrop}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    src={null}
                />
            </div><Tooltip id="addtooltip" />
        </div>
            
        </div>
    </div>
  );
}
export default AddProfImage;



