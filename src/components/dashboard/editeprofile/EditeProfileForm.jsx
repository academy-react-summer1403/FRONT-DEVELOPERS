
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// import * as yup from "yup";
// import { input, Form, Formik } from 'formik';
import { CiCircleRemove } from "react-icons/ci";
import editeprof from '../../../assets/dashboard/edite2.svg'
import save from '../../../assets/dashboard/save.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { postUserImg, postUserMainImg, putUserInfo } from '../../../core/services/DashApi';
import { useSelector } from 'react-redux';
import { useUserProfile } from "../../../core/services/query/DashboardQuery";
import Map from "../../../pages/dashboard/content/Map";
import AddProfImage from "./AddProfImage";
import { ImageErrore } from "../../ImageErrore";
import { CiLocationOn } from "react-icons/ci";
import { HiXCircle } from "react-icons/hi";




const EditeProfileForm = () => {

  
    const navigate = useNavigate()
    const [date, setDate] = useState();
    const userProfile = useUserProfile()
    console.log(userProfile)
   const location = useSelector((state) => state.LocationSlice.location);
        console.log(location);

    const onSubmit =async (e)=>{
        e.preventDefault();
    
    
       
    
        const formData = new FormData(e.target);
        formData.append("LName", LName);
        formData.append("FName", FName);
        formData.append("UserAbout", UserAbout);
        formData.append("LinkdinProfile", LinkdinProfile);
        formData.append("TelegramLink", TelegramLink);
        formData.append("ReceiveMessageEvent", true);
        formData.append("HomeAdderess", location);
        formData.append("NationalCode", NationalCode);
        formData.append("Gender",true );
        formData.append("BirthDay", date ? date.toString() : "");
        formData.append("Latitude", "13");
        formData.append("Longitude", "12");



        const EditInfo  = putUserInfo(  formData)
        console.log(EditInfo)
       


          const user = useSelector((state) => state.UserSlice.data);
        console.log(user);     


        const formFile = new FormData();
        formFile.append("formFile", formFile);


        const userImg = postUserImg( formFile)
        console.log(userImg);    

     const formId = new FormData();
        formId.append("ImageId" , user)


        const userMainImg = postUserMainImg( formId)
        console.log(userMainImg)

        toast.success("good" , {
            theme:"colored"
        })
    

            navigate("/info")
      }



    //   for map modal :
      const [Open, setOpen] = useState(false)


  return (
    
    <div className='py-10 px-8 max-md:px-1 mt-[5px]' >
        {/* title  */}
        <div className='relative gap-28 grid grid-cols-2 mb-12'>
            <div className='border border-gray-100 grid-col-1 w-[85%]'></div>        
            <h3 className='absolute bottom-[-8px] left-[38%] text-lg text-gray-400 
            max-lg:left-[30%]
            max-md:left-[32%] max-md:text-[16px]
            '>ویرایش اطلاعات کاربری</h3>
            <img className='absolute right-8 bottom-[-16px] rounded-lg max-md:right-4' src={editeprof}/>
            <div className='border border-gray-100 grid-col-1 w-[90%] ml-8'></div>
        </div>   

        {/* edite form  */}
        <form

        onSubmit={(values) => onSubmit(values)}
        
        >
        
            <div>
                <div className='flex grid-cols-3
                max-xl:flex max-xl:flex-col-reverse  border-b pb-8 px-2 
                '>
                    {/* profile image section  */}
                    <div className='grid-col-1 w-[100%]'>
                        {/* upload  */}
                         <AddProfImage/>
                        {/* about me */}
                        <div className='w-full'>
                            <label className='relative  text-right text-sm grid-col-1 text-gray-400'>
                                <p className='py-2 px-4'>درباره من</p>  
                                <textarea type="text" defaultValue={userProfile.data?.userAbout}   id="UserAbout" name="UserAbout" 
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='rounded-md bg-gray-50 dark:bg-white text-darkgreen h-[150px] w-full
                                text-right font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300 text-xs'></p>
                        </div>
                    </div>
                    {/* form  */}
                    <ul className='grid-col-2 w-[100%] pl-4 justify-self-center max-xl:px-32 max-lg:px-20 max-md:px-10'>
                        <li className=' flex flex-row-reverse max-sm:flex-col gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>نام</p>  
                                <input type="text"   id="FName" name="FName" defaultValue={userProfile.data?.fName}  placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen 
                                placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>

                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>نام خانوادگی</p>  
                                <input type="text"   id="LName" name="LName"  defaultValue={userProfile.data?.lName}    placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen
                                placeholder-md text-right placeholder-darkgreen/30 font-medium 
                                focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>
                            </label>
                            
                        </li>

                        <li className=' flex flex-row-reverse  max-sm:flex-col gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>کد ملی</p>  
                                <input type="text"   id="NationalCode" name="NationalCode"  defaultValue={userProfile.data?.nationalCode } placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen 
                                placeholder-sm text-right placeholder-darkgreen-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>
                            
                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>جنسیت</p>                                  
                                <select id="Gender" name="Gender" defaultValue={userProfile.data?.gender == true ? "زن" : "مرد"}
                                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                    className="px-4 py-2 w-[232px] rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen
                                    placeholder-md text-right placeholder-teal-800/30 font-medium focus:outline
                                    outline-primary outline-[1.5px]">
                                    {/* <input type="select"   id="Gender" name="Gender"  defaultValue={userProfile.data?.gender == true ? "زن" : "مرد"}  component="select"
                                    /> */}
                                    <option  value="مرد">مرد</option>
                                    <option  value="زن">زن</option>                                    
                                </select>
                            </label>
                            
                        </li>

                        <li className=' flex flex-row-reverse  max-sm:flex-col gap-2'>                            
                        <label className='relative text-right text-sm text-gray-400'>
                            <p className='py-2 px-4'>تاریخ تولد</p>
                            <DatePicker
                                value={date}
                                onChange={setDate}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-center"
                                className=" text-darkgreen"
                                style={{
                                    boxShadow: "0px 1px 3px 0px #00000033 inset",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    height:"35px",
                                    width:"230px",
                                    border:"none",
                                }}
                            />
                        </label>
                             <p className='text-red-300'></p>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>تلفن همراه</p>  
                                <input type="text" defaultValue={userProfile.data?.phoneNumber} name=""  placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen 
                                placeholder-md text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300'></p>
                            
                        </li>

                        <li className=' flex flex-row-reverse  max-sm:flex-col gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>ایمیل</p>  
                                <input type="email"   defaultValue={userProfile.data?.email}     placeholder="example@gmail.con"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen
                                placeholder-sm placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                <p className='text-red-300 text-xs text-left'></p>
                           
                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>تلگرام</p>  
                                <input type="text"   id="TelegramLink" name="TelegramLink"  defaultValue={userProfile.data?.telegramLink}   placeholder="@telegram"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen 
                                placeholder-md  placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300'></p>
                            
                        </li>

                        <li className='flex flex-row-reverse '>
                            <label className='relative text-right text-sm w-[97%] text-gray-400'>
                                <p className='py-2 px-4'>لینکدین</p>  
                                <input type="text"   id="LinkdinProfile" name="LinkdinProfile" defaultValue={userProfile.data?.linkdinProfile}   placeholder="https://www.linkedin.com/"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen w-full 
                                placeholder-md  placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                            <p className='text-red-300'></p>
                        </li>

                    </ul>

                </div>

                    
                <div className='flex flex-row-reverse gap-4 mt-12 
                 max-lg:flex-col  
                '>
                    <label className='relative w-[60%] text-right text-sm text-gray-400
                    max-lg:w-full
                    '>
                        <p className='py-2 px-4'>آدرس</p>  
                        <input type="text"  id="HomeAdderess" name="HomeAdderess" defaultValue={location}   placeholder="آدرس"
                        style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                        className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen w-[100%] h-16
                        placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                    </label>
                    
                    <div className='mr-20'>
                        <div onClick={()=>setOpen(true)} className='group relative flex mx-auto cursor-pointer rounded-full border w-40 h-40 mt-4 overflow-hidden'>
                            <img src="https://s3-alpha-sig.figma.com/img/c8b9/be0d/e8a21e635c32ae410e28f3cf5de1a8c6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQSmEVIxNHdYxZFMqtNLDNXMrlh37oDozxN5lqs6rEd-DxHnVdAYKA7hAQuMxYb3kB8DPDwARJ4MTM3BIF5DbfxaW6dhVG0GQysBbfi1G-fdtaijMGya0uycA3pq-dGr6GQCqqdDfJW1lvOVK95Rt7CK-3pkhKJbRbT5JPi3FKyZwVE2S1FwKWFI6olEg7AU0rGCFtawsz85~iMU7KaSUgl2Jg8dACIXFQNg~kyfPPB-IJw-gDrVCyS9aeTEvZ2Q8CQItUbX8POtJlXggpXlRg7XxUjv1rgs5HyYZ6Jki6JFRRDBiiBQl97L2gMyVIFz-cWlIrJt6bL-AyR7xe9WNQ__"

                            onError={ImageErrore} className="absolute rounded-full w-40 h-40 "/>
                            <div className="absolute bottom-0 w-full h-12 bg-gray-600/40 z-40"> <CiLocationOn  className="flex mx-auto text-white w-8 h-8" /></div>
                        </div>
                        <div style={{backdropFilter: "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) "}}
                        className={`fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-500/80 z-[9999] rounded-xl
                            ${Open ? "block" : "hidden "} transition-all duration-700 ease-in-out  backdrop-blur-sm
                        `}>
                            <HiXCircle onClick={()=>setOpen(false)} className='absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100'/>
                            <Map/>
                            
                        </div>

                    </div>
                </div>
                
                <NavLink to={"/info"} className='flex gap-4 mt-8 '>
                    <button type="" className='flex flex-row gap-2 text-sm rounded-full
                        bg-gray-100 dark:bg-[#747272] hover:bg-red-100 hover:text-red-500 text-gray-300 px-5 py-1 
                    '>
                        <CiCircleRemove className='mt-1'/>
                        لغو 
                    </button> 

                    <button type="submit" className='flex flex-row gap-2 text-sm text-teal-800 rounded-full
                        bg-primary px-3 py-1 
                    '>
                        <img src={save}/>
                        ذخیره تغییرات
                    </button> 
                </NavLink>
            </div>
        
        </form>
    </div>
    
  )
}

export default EditeProfileForm