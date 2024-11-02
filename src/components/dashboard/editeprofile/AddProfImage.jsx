import React, { useState } from 'react'
import editeprof from '../../../assets/dashboard/edite2.svg'
import { TiCameraOutline } from "react-icons/ti";
import { ImageErrore } from '../../ImageErrore';
import { HiXCircle } from "react-icons/hi";
import Avatar from 'react-avatar-edit';
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const AddProfImage = () => {
    
    const [Open, setOpen] = useState(false)
    const [image, setimage] = useState(null)
    const [src, setSrc] = useState(null)
    
    const onClose =()=>{
        setimage(null)
    }
    const onCrop =(view)=>{
        setimage(view)
    }

    const ProfImage =[
        {
            img:"https://www.figma.com/file/BHxcNzsFysMwnfNFJKPczw/image/bc9913715ee35ce92b534bff6eb4aa2013f6852e"
        },
        {
            img:"https://www.figma.com/file/BHxcNzsFysMwnfNFJKPczw/image/ba873f804a2ffe27f124d61856d4e3f78bc5a961"
        },
        {
            img:"https://www.figma.com/file/BHxcNzsFysMwnfNFJKPczw/image/78e18fc7f57eddec66981b4eb38daa8979ec488c"
        },
    ]

  return (
<>
    {/* open modal  */}
    <div onClick={()=>setOpen(true)} className='group relative flex mx-auto cursor-pointer rounded-full border w-40 h-40 mt-4 overflow-hidden'>
        <img src={image ? image : editeprof} onError={ImageErrore} className="absolute rounded-full w-40 h-40 "/>
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
            <img src={image ? image : editeprof} className='w-60 h-60 rounded-md' />
            <div data-tooltip-id="tooltip" data-tooltip-content="تنظیم به عنوان تصویر اصلی"  className='w-9 h-9 absolute pl-1.5 pt-1.5 bg-white rounded-full shadow-md bottom-2 right-2'>
                <FaCheck className='text-lime-600 w-6 h-6 '/>
            </div><Tooltip id="tooltip" />
        </div>

        {/* map image  */}
        <div className='flex flex-row gap-3 justify-center text-white' >
            {ProfImage.map((data , index)=>(
                <div key={index} className='relative group'>
                    <img  src={data.img} className='w-[100px] h-[100px] rounded-md' />
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
                    src={src}
                    label="+"
                    
                />
            </div><Tooltip id="addtooltip" />
        </div>
    </div>
</>
  )
}

export default AddProfImage