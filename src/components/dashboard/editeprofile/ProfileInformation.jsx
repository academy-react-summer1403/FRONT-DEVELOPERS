import React, { useState } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useUserProfile } from '../../../core/services/query/DashboardQuery'
import { useDispatch, useSelector } from 'react-redux'
import { userImg } from '../../../core/redux/slices/QueryState/UserSlice'
import DateApi from '../../DateApi'





const ProfileInformation = () => {

    

  const userProfile = useUserProfile()
  console.log(userProfile)

   const ImageId = userProfile.data?.userImage
   console.log(ImageId)


   const dispatch = useDispatch();

        dispatch(userImg(ImageId))


        const location = useSelector((state) => state.LocationSlice.location);
        console.log(location);
        const [b,setB]=useState(location)

  return (
    <div className='grid grid-cols-2 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1  mt-4 gap-2 justify-items-center text-[15px]'>
            {/* left:  */}
        <div className='grid grid-col-1  gap-8'>
            <div className='flex flex-row-reverse gap-2 text-right '> 
                <span className='text-gray-400  dark:text-white'> :شماره ی همراه </span>
                <p className='text-orange dark:text-amber-400 font-medium grid'>
                    {userProfile.data?.phoneNumber ?  userProfile.data?.phoneNumber : "--"}
                </p>                    
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>  
                <span className='text-gray-400 dark:text-white'> :تلگرام</span>               
                <p className='text-orange dark:text-amber-400 font-medium grid '>
                    {userProfile.data?.telegramLink ? userProfile.data?.telegramLink : "--"}
                </p>                    
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>       
            <span className='text-gray-400 dark:text-white'>: لینکدین</span>         
                <p className='text-orange dark:text-amber-400 font-medium grid'>
                    {userProfile.data?.linkdinProfile ? userProfile.data?.linkdinProfile :"--" }
                </p>                    
            </div>

            <div className='flex flex-row-reverse text-right text-orange dark:text-amber-400 font-medium'>    
              {/* {JSON.stringify(location)} */}            
                <span className='text-gray-400 dark:text-white '> : آدرس </span>    
                <p> 
                    {userProfile.data?.homeAdderess	 ? userProfile.data?.homeAdderess	 :"--" }                    
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 h-32'> 
                {/* map img  */}
                <div className='w-32 h-32 grid-col-1 border rounded-full'>
                    <img className='h-full w-full  rounded-full' 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPn5fhsqhGwlT7gyzo5cJ_ZZjcFBOQcwqfRIqAP6K2NwTkscY5ueFb5yFTOqwxj3S1NI&usqp=CAU'/>                
                </div>

                 <div className='grid grid-col-1 gap-6'>
                    <div className=' gap-2 text-right'>  
                        <span className='text-gray-400 dark:text-white'> : طول جغرافیایی </span>                       
                        <p className='text-orange dark:text-amber-400 font-medium '>
                            {userProfile.data?.longitude ? userProfile.data?.longitude : "--"} 
                        </p>                        
                    </div>

                    <div className=' gap-2 text-right'>  
                        <span className='text-gray-400 dark:text-white'> : عرض جغرافیایی</span>                                     
                        <p className=' text-orange dark:text-amber-400 text-right font-medium h-32 overflow-hidden'>
                            {userProfile.data?.latitude ? userProfile.data?.latitude : "--"}                            
                        </p>                                                          
                    </div>
                </div>
            </div> 
        </div>

            {/* right:  */}
         <div className='grid grid-col-1 gap-8 pl-12 max-lg:pl-0 max-md:mt-8 max-md:border-none border-l border-gray-200'>

            <div className='flex flex-row-reverse gap-2 text-right '>  
                <span className='text-gray-400 dark:text-white flex'>: نام و نام خانوادگی </span>
                <p className=' text-orange dark:text-amber-400 font-medium grid'>
                    {userProfile.data?.fName ? userProfile.data?.fName : "--"}{userProfile.data?.lName ? userProfile.data?.lName : "--"}              
                </p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>            
                <span className='text-gray-400 dark:text-white'> : کد ملی</span>
                <p className='text-orange dark:text-amber-400 font-medium grid'>
                    {userProfile.data?.nationalCode ? userProfile.data?.nationalCode :"--"}
                </p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>         
                <span className='text-gray-400 dark:text-white'> : ایمیل</span>
                <p data-tooltip-id="my-tooltip" data-tooltip-content={userProfile.data?.email} className='text-orange dark:text-amber-400 font-medium grid  w-[200px] overflow-hidden'>
                    {userProfile.data?.email ? userProfile.data?.email :"--"}
                </p><Tooltip id="my-tooltip" />
            </div> 

             <div className='flex flex-row-reverse gap-2 text-right'>           
             <span className='text-gray-400 dark:text-white'> : تاریخ تولد </span>
                <p className='text-orange dark:text-amber-400 font-medium flex'> 
                   <DateApi dateapi={userProfile.data?.birthDay ?  userProfile.data?.birthDay : "--"} /> 
                </p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
             <span className='text-gray-400 dark:text-white'> : جنسیت </span>   <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.gender ?"مرد":" زن " } </p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right text-orange dark:text-amber-400'>                 
                <p data-tooltip-id="my-tooltip" data-tooltip-content={userProfile.data?.userAbout}   className='cursor-pointer flex flex-row-reverse'>
                    
                    <span className='text-gray-400 dark:text-white'>  : درباره من </span>
                    <p className='text-orange  text-right font-medium grid'>
                        {userProfile.data?.userAbout ? userProfile.data?.userAbout.slice(0,80) :"--"}

                    </p>

                </p><Tooltip id="my-tooltip" />
                
            </div> 
        </div> 

    </div>
  )
}

export default ProfileInformation