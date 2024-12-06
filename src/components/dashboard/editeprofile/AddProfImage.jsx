import React, { useState } from 'react'
import { TiCameraOutline } from "react-icons/ti";
import { ImageErrore } from '../../ImageErrore';
import { HiXCircle } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';


import Avatar from "react-avatar-edit";
import { postUserImg, postUserMainImg } from '../../../core/services/DashApi';
import { toast } from 'react-toastify';
import { useDeleteProfileImage } from '../../../core/services/mutation/DashboardMutation';
import Camera from './Camera';

function AddProfImage({allimages , currentImage}) {


  const [Open, setOpen] = useState(false)

  // crop image :
  const [preview, setPreview] = useState();

  function onClose(pv) {
    setPreview(pv);
  }
  function onCrop(pv) {
    
    setPreview(base64ToFile(pv)); 
  }
  
  function base64ToFile(base64, filename = 'image.png') {
    const arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--) u8arr[n] = bstr.charCodeAt(n);
    
    return new File([u8arr], filename, { type: mime });
  }



  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
  
  // Add new image :
  const handlePostUserImg =(image)=> {

        const formFile = new FormData();
        formFile.append("formFile",image);
       
        console.log("formFile ::::" , formFile)
        postUserImg(formFile).then(toast.success("عکس با موفقیت اضافه شد" ,{ theme:"colored"}))
  }


  //choose image from list
   
  const handleChoose = (dataId) =>{

    const formId = new FormData();
    formId.append("ImageId",dataId);

    postUserMainImg(formId).then(toast.success("عکس با موفقیت انتخاب شد" ,{ theme:"colored"}))
  }

  //Delete image from list
   const deleteProfileImage =useDeleteProfileImage()
    const handleDeleteImage = (dataId) =>{
        console.log("dataId :::" ,dataId)

      const formId = new FormData();
      formId.append("DeleteEntityId",dataId);
      
      console.log("formId::::" ,formId)
      deleteProfileImage.mutate(formId)
    }
    
    const [webcam, setWebcam] = useState(false)
  return (
    <div>

      {/* open modal  */}
        <div onClick={()=>setOpen(true)} className='group relative flex mx-auto cursor-pointer rounded-full border w-40 h-40 mt-4 overflow-hidden'>
            <img src={currentImage ? currentImage : <ImageErrore/>} onError={ImageErrore} className="absolute rounded-full w-40 h-40 "/>
            <div className="absolute bottom-0 w-full h-10 bg-gray-600/40 z-40"> <TiCameraOutline className="flex mx-auto text-white w-8 h-8" /></div>
        </div>

      {/* modal: 1 */}
    
        <div style={{backdropFilter: "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) "}}
        className={` ${!webcam && Open?  "block" : "hidden " } fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-500/80 z-[9999] rounded-xl
             transition-all duration-700 ease-in-out  backdrop-blur-sm
        `}>
            {/* close modal    */}
            <HiXCircle onClick={()=>setOpen(false)} className='absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100'/>
            {/* main image  */}
            <div className='relative flex'>
                <img src={currentImage ? currentImage : <ImageErrore />}  onError={ImageErrore}  className='w-56 h-56 rounded-xl  bg-gray-100' />
                <div onClick={()=>handlePostUserImg(preview)} data-tooltip-id="tooltip" data-tooltip-content="تنظیم به عنوان تصویر اصلی"  className='cursor-pointer w-9 h-9 absolute pl-1.5 pt-1.5 bg-white rounded-full shadow-md bottom-[-10px] right-[-10px]'>
                    <FaCheck className='text-lime-600 w-6 h-6 '/>
                </div><Tooltip id="tooltip" />
                {/* <Camera /> */}
            </div>

            {/* map image  */}
            <div className='flex flex-row gap-3 justify-center text-white' >
                {allimages?.map((data , index)=>(
                    <div key={index} className='relative group'>
                        <img onClick={()=>handleChoose(data.id)} src={data.puctureAddress} className='w-[100px] h-[100px] rounded-md' />
                        <div onClick={()=>handleDeleteImage(data.id)} className='cursor-pointer w-6 h-6 absolute hidden group-hover:block rounded-full bg-white text-red-500 p-1 -top-2 -left-2'><HiX /></div>
                        
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
                      src={"null"}
                      labelStyle={{fontSize:"30px" , cursor:"pointer"}}
                      label="+"
                      round={false}
                        
                  />
                </div><Tooltip id="addtooltip" />

                {/* webcam :  */}
                <div onClick={()=>setWebcam(true)} className='w-[100px] h-[100px] border-dashed border-2 rounded-md border-gray-200/20 text-sm text-center pt-10 font-semibold cursor-pointer'>
                  webcam
                </div>
            </div>
            
        </div>


       {/* modal: 2  :webcam */}
    
       <div style={{backdropFilter: "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) "}}
        className={`fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-500/80 z-[9999] rounded-xl
            ${webcam && Open?  "block" : "hidden " } transition-all duration-700 ease-in-out  backdrop-blur-sm
        `}>
            {/* close modal    */}
            <HiXCircle onClick={()=>setWebcam(false)} className='absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100'/>
            {/* main image  */}
            <div className='relative flex'>
                <div onClick={()=>(handlePostUserImg(preview) , setOpen(false) , setWebcam(false))} data-tooltip-id="tooltip" 
                  className='cursor-pointer w-9 h-9 absolute pl-1.5 pt-1.5 bg-white rounded-full shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)] bottom-8 right-[47%]'
                >
                    <FaCheck className='text-lime-600 w-6 h-6 '/>
                </div><Tooltip id="tooltip" />
                {webcam && <Camera setPreview={setPreview} base64ToFile={base64ToFile} />}
                
            </div>
            
        </div>


    </div>
  );
}
export default AddProfImage;



