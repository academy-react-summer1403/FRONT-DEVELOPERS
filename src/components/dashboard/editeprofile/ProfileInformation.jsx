import React, { useState } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useUserProfile } from '../../../core/services/query/DashboardQuery'
import { useDispatch, useSelector } from 'react-redux'
import { userImg } from '../../../core/redux/slices/QueryState/UserSlice'
// import Map from '../../../pages/dashboard/content/Map'



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
    <div className='grid grid-cols-2 mt-4 justify-items-center text-[15px]'>
            {/* left:  */}
        <div className='grid grid-col-1 pr-8 gap-6 '>
            <div className='flex flex-row-reverse gap-2 text-right'> 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.phoneNumber ?  userProfile.data?.phoneNumber : "--"}<span className='text-gray-400  dark:text-white'> :شماره ی همراه </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.telegramLink ? userProfile.data?.telegramLink : "--"}<span className='text-gray-400 dark:text-white'> :تلگرام</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.linkdinProfile ? userProfile.data?.linkdinProfile :"--" }<span className='text-gray-400 dark:text-white'>: لینکدین</span></p>
            </div>

            <div className='flex flex-row-reverse text-right'>    
              {/* {JSON.stringify(location)} */}
                <p className='text-orange dark:text-amber-400 font-medium w-[90%]'> <span className='text-gray-400 dark:text-white w-42'> آدرس :</span>
                {userProfile.data?.homeAdderess	 ? userProfile.data?.homeAdderess	 :"--" } </p>


                   
            </div>

            <div className='grid grid-cols-2 gap-4'> 
                {/* map img  */}
            <div className='w-32 h-32 grid-col-1 border rounded-full'>
                <img className='h-full w-full rounded-full' 
                src="https://s3-alpha-sig.figma.com/img/c8b9/be0d/e8a21e635c32ae410e28f3cf5de1a8c6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQSmEVIxNHdYxZFMqtNLDNXMrlh37oDozxN5lqs6rEd-DxHnVdAYKA7hAQuMxYb3kB8DPDwARJ4MTM3BIF5DbfxaW6dhVG0GQysBbfi1G-fdtaijMGya0uycA3pq-dGr6GQCqqdDfJW1lvOVK95Rt7CK-3pkhKJbRbT5JPi3FKyZwVE2S1FwKWFI6olEg7AU0rGCFtawsz85~iMU7KaSUgl2Jg8dACIXFQNg~kyfPPB-IJw-gDrVCyS9aeTEvZ2Q8CQItUbX8POtJlXggpXlRg7XxUjv1rgs5HyYZ6Jki6JFRRDBiiBQl97L2gMyVIFz-cWlIrJt6bL-AyR7xe9WNQ__" alt="" />
                
            </div>

                 <div className='grid grid-col-1 gap-6'>
                    <div className='flex flex-row-reverse gap-2 text-right'>                         
                        <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.longitude ? userProfile.data?.longitude : "--"} <span className='text-gray-400 dark:text-white'> : طول جغرافیایی </span></p>
                    </div>

                    <div className='flex flex-row-reverse gap-2 text-right'>                                       
                        <p className=' text-orange dark:text-amber-400 text-right font-medium h-32 overflow-hidden'>{userProfile.data?.latitude ? userProfile.data?.latitude : "--"}<span className='text-gray-400 dark:text-white'> : عرض جغرافیایی</span></p>
                                    
                    </div>
                </div>
            </div> 
        </div>

            {/* right:  */}
         <div className='grid grid-col-1 gap-8 pl-2 border-l border-gray-200'>
            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '> <span className='text-gray-400 dark:text-white'>  نام و نام خانوادگی :</span> {userProfile.data?.fName ? userProfile.data?.fName : "--"}{userProfile.data?.lName ? userProfile.data?.lName : "--"}</p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.nationalCode ? userProfile.data?.nationalCode :"--"}<span className='text-gray-400 dark:text-white'> : کد ملی</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.email ? userProfile.data?.email :"--"}<span className='text-gray-400 dark:text-white'> : ایمیل</span></p>
            </div> 

             <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.birthDay ? userProfile.data?.birthDay :"--"}<span className='text-gray-400 dark:text-white'> : تاریخ تولد </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
             <span className='text-gray-400 dark:text-white'> : جنسیت </span>   <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.gender ?"مرد":" زن " } </p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right text-orange dark:text-amber-400'>                 
                <p data-tooltip-id="my-tooltip" data-tooltip-content={userProfile.data?.userAbout}   className='cursor-pointer flex flex-row-reverse'>
                    <p className='text-orange  text-right font-medium'>
                        
                        <span className='text-gray-400 dark:text-white  w-36'>  : درباره من </span>
                         
                    </p>
                    {userProfile.data?.userAbout ? userProfile.data?.userAbout.slice(0,11) :"--"}
                </p><Tooltip id="my-tooltip" />
                
            </div> 
        </div> 

    </div>
  )
}

export default ProfileInformation