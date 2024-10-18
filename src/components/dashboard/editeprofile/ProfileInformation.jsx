import React, { useEffect, useState } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useUserProfile } from '../../../core/services/query/DashboardQuery'
import { useDispatch, useSelector } from 'react-redux'
import { userImg } from '../../../core/redux/slices/QueryState/UserSlice'


const ProfileInformation = () => {



  const token = localStorage.getItem("token")
  console.log(token)

  const userProfile = useUserProfile(token)
  console.log(userProfile)

   const ImageId = userProfile.data?.userImage
   console.log(ImageId)

   const user = useSelector((state) => state.UserSlice.data);
   console.log(user);
 
   const dispatch = useDispatch();

        dispatch(userImg(ImageId))


  return (
    <div className='grid grid-cols-2 mt-4 justify-items-center text-[15px]'>
            {/* left:  */}
        <div className='grid grid-col-1 pr-8 gap-6 '>
            <div className='flex flex-row-reverse gap-2 text-right'> 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.phoneNumber}<span className='text-gray-400  dark:text-white'> :شماره ی همراه </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.telegramLink}<span className='text-gray-400 dark:text-white'> :تلگرام</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.linkdinProfile}<span className='text-gray-400 dark:text-white'>: لینکدین</span></p>
            </div>

            <div className='flex flex-row-reverse text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium w-[80%]'>{userProfile.data?.homeAdderess}<span className='text-gray-400 dark:text-white w-42'>: آدرس</span> </p>
            </div>

            <div className='grid grid-cols-2 gap-4'> 
                {/* map img  */}
                <div className='w-32 h-32 grid-col-1 border rounded-full'>map</div>
                <div className='grid grid-col-1 gap-6'>
                    <div className='flex flex-row-reverse gap-2 text-right'>                         
                        <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.longitude} <span className='text-gray-400 dark:text-white'> : طول جغرافیایی </span></p>
                    </div>

                    <div className='flex flex-row-reverse gap-2 text-right'>                                       
                        <p className=' text-orange dark:text-amber-400 text-right font-medium h-32 overflow-hidden'>{userProfile.data?.latitude}<span className='text-gray-400 dark:text-white'> : عرض جغرافیایی</span></p>
                                    
                    </div>
                </div>
            </div> 
        </div>

            {/* right:  */}
        <div className='grid grid-col-1 gap-8 pl-2 border-l border-gray-200'>
            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.fName}{userProfile.data?.lName}<span className='text-gray-400 dark:text-white'> : نام و نام خانوادگی </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.nationalCode}<span className='text-gray-400 dark:text-white'> : کد ملی</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.email}<span className='text-gray-400 dark:text-white'> : ایمیل</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.birthDay}<span className='text-gray-400 dark:text-white'> : تاریخ تولد </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium '>{userProfile.data?.gender} <span className='text-gray-400 dark:text-white'> : جنسیت </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p data-tooltip-id="my-tooltip"    className='flex flex-row-reverse'>
                    <p className='text-orange dark:text-amber-400 text-right font-medium'>
                        
                        <span className='text-gray-400 dark:text-white  w-36'>  : درباره من </span>
                         
                    </p>
                    {userProfile.data?.userAbout}
                </p><Tooltip id="my-tooltip" />
                
            </div>
        </div>

    </div>
  )
}

export default ProfileInformation