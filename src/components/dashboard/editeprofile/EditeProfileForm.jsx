
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// import * as yup from "yup";
// import { input, Form, Formik } from 'formik';
import { CiCircleRemove } from "react-icons/ci";
import editeprof from '../../../assets/dashboard/edite2.svg'
import save from '../../../assets/dashboard/save.svg'
import { useNavigate } from 'react-router-dom';
import { postUserImg, postUserMainImg, putUserInfo } from '../../../core/services/DashApi';
import { useSelector } from 'react-redux';
import { useUserProfile } from "../../../core/services/query/DashboardQuery";





const EditeProfileForm = () => {

  
    const navigate = useNavigate()
    const [date, setDate] = useState();
    const userProfile = useUserProfile()
    console.log(userProfile)
  
    const onSubmit =async (e)=>{
        e.preventDefault();
    
    
 

    
        const formData = new FormData(e.target);
        formData.append("LName", LName);
        formData.append("FName", FName);
        formData.append("UserAbout", UserAbout);
        formData.append("LinkdinProfile", LinkdinProfile);
        formData.append("TelegramLink", TelegramLink);
        formData.append("ReceiveMessageEvent", true);
        formData.append("HomeAdderess", HomeAdderess);
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


    

            navigate("/info")
      }






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
                max-xl:flex max-xl:flex-col-reverse  border-b pb-4 px-2 
                '>
                    {/* profile image section  */}
                    <div className='border grid-col-1 w-[100%]'>
                        {/* upload  */}
                        <div className='rounded-full'>
                            <label className='relative rounded-full  text-right text-sm grid-col-1 text-gray-400'>
                                <p className='py-2 px-4'>img</p>  
                                <input type="file" name="formFile" id="formFile"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='rounded-md bg-gray-50 dark:bg-[#747272] text-teal-800 rounded-full mx-10 w-40 h-40
                                text-right font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>                
                        </div>
                        {/* about me */}
                        <div className='w-full'>
                            <label className='relative  text-right text-sm grid-col-1 text-gray-400'>
                                <p className='py-2 px-4'>درباره من</p>  
                                <input type="text"   id="UserAbout" name="UserAbout" 
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='rounded-md bg-gray-50 dark:bg-[#747272] text-teal-800 h-[130px] w-full
                                text-right font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300 text-xs'></p>
                        </div>
                    </div>
                    {/* form  */}
                    <ul className='grid-col-2 w-[100%] pl-8 justify-self-center max-xl:px-32 max-lg:px-20 max-md:px-10'>
                        <li className=' flex flex-row-reverse gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>نام</p>  
                                <input type="text"   id="FName" name="FName"   placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-sm text-right placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>

                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>نام خانوادگی</p>  
                                <input type="text"   id="LName" name="LName"    placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-md text-right placeholder-teal-800/30 font-medium 
                                focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>
                            </label>
                            
                        </li>

                        <li className=' flex flex-row-reverse gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>کد ملی</p>  
                                <input type="text"   id="NationalCode" name="NationalCode"   placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-sm text-right placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                 <p className='text-red-300 text-xs text-left'></p>
                            
                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>جنسیت</p>  
                                <input type="text"   id="Gender" name="Gender"   component="select"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 py-2 w-[232px] rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-md text-right placeholder-teal-800/30 font-medium focus:outline
                                 outline-primary outline-[1.5px]'/>
                                       <option className='hover:bg-secondary hover:text-white' value="زن">زن</option>

                                        <option value="مرد">مرد</option>
                                 
                            </label>
                            
                        </li>

                        <li className=' flex flex-row-reverse gap-4'>                            
                        <label className='relative text-right text-sm text-gray-400'>
                            <p className='py-2 px-4'>تاریخ تولد</p>
                            <DatePicker
                                value={date}
                                onChange={setDate}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-center"
                                className="w-full"
                                style={{
                                    boxShadow: "0px 1px 3px 0px #00000033 inset",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                }}
                            />
                        </label>
                             <p className='text-red-300'></p>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>تلفن همراه</p>  
                                <input type="text"    placeholder="این فیلد اجباری است"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-md text-right placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300'></p>
                            
                        </li>

                        <li className=' flex flex-row-reverse gap-4'>                            
                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>ایمیل</p>  
                                <input type="email"     placeholder="example@gmail.con"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-sm placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                                <p className='text-red-300 text-xs text-left'></p>
                           
                            </label>

                            <label className='relative text-right text-sm text-gray-400'>
                                <p className='py-2 px-4'>تلگرام</p>  
                                <input type="text"   id="TelegramLink" name="TelegramLink"   placeholder="@telegram"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 
                                placeholder-md  placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                            </label>
                             <p className='text-red-300'></p>
                            
                        </li>

                        <li className='flex flex-row-reverse '>
                            <label className='relative text-right text-sm w-full text-gray-400'>
                                <p className='py-2 px-4'>لینکدین</p>  
                                <input type="text"   id="LinkdinProfile" name="LinkdinProfile"    placeholder="https://www.linkedin.com/"
                                style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 w-full 
                                placeholder-md  placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
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
                        <input type="text"  id="HomeAdderess" name="HomeAdderess"   placeholder="آدرس"
                        style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                        className='px-4 pt-1 rounded-md bg-gray-50 dark:bg-[#747272] leading-8 text-teal-800 w-[100%] h-16
                        placeholder-sm text-right placeholder-teal-800/30 font-medium focus:outline outline-primary outline-[1.5px]'/>
                    </label>
                    
                    <div className=''>map</div>
                </div>
                <div className='flex gap-4 mt-8 '>
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
                </div>
            </div>
        
        </form>
    </div>
    
  )
}

export default EditeProfileForm