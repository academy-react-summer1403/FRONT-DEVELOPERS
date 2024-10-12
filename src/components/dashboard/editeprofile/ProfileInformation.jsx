import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const ProfileInformation = () => {
    const info ={
        fullname:"fatemeh Bakhshian",
         nid:'',
         email:"example@gmail.com",
         birth:"1380/12/21",
         gender:'',
         aboutme:'مازندران-ساری-میدانخزر-جاده فرح اباد-خیابان دیمطوران-ساختمانهوتن-واحد12',
         phon:'09394063674',
         tel:'',
         linkin:'',
         address:"مازندران-ساری-میدانخزر-جاده فرح اباد-خیابان دیمطوران-ساختمانهوتن-واحد15",
         geoX:'',
         geoY:'',
        
        }

  return (
    <div className='grid grid-cols-2 mt-4 justify-items-center text-[15px]'>
            {/* left:  */}
        <div className='grid grid-col-1 pr-8 gap-6 '>
            <div className='flex flex-row-reverse gap-2 text-right'> 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.phon ? "--" : info.phon}<span className='text-gray-400  dark:text-white'> :شماره ی همراه </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.tel ? "--" : info.tel}<span className='text-gray-400 dark:text-white'> :تلگرام</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.linkin ? "--" : info.linkin}<span className='text-gray-400 dark:text-white'>: لینکدین</span></p>
            </div>

            <div className='flex flex-row-reverse text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium w-[80%]'><span className='text-gray-400 dark:text-white w-42'> آدرس :</span> {!info.address ? "--" : info.address}</p>
            </div>

            <div className='grid grid-cols-2 gap-4'> 
                {/* map img  */}
                <div className='w-32 h-32 grid-col-1 border rounded-full'>map</div>
                <div className='grid grid-col-1 gap-6'>
                    <div className='flex flex-row-reverse gap-2 text-right'>                         
                        <p className='text-orange dark:text-amber-400 font-medium '>{!info.geoY ? "--" : info.geoY} <span className='text-gray-400 dark:text-white'> : طول جغرافیایی </span></p>
                    </div>

                    <div className='flex flex-row-reverse gap-2 text-right'>                                       
                        <p className=' text-orange dark:text-amber-400 text-right font-medium h-32 overflow-hidden'>{!info.geoX ? "--" : info.geoX}<span className='text-gray-400 dark:text-white'> : عرض جغرافیایی</span></p>
                                    
                    </div>
                </div>
            </div> 
        </div>

            {/* right:  */}
        <div className='grid grid-col-1 gap-8 pl-2 border-l border-gray-200'>
            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.fullname ? "--" : info.fullname} <span className='text-gray-400 dark:text-white'> : نام و نام خانوادگی </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.nid ? "--" : info.nid}<span className='text-gray-400 dark:text-white'> : کد ملی</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.email ? "--" : info.email}<span className='text-gray-400 dark:text-white'> : ایمیل</span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.birth ? "--" : info.birth}<span className='text-gray-400 dark:text-white'> : تاریخ تولد </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                
                <p className='text-orange dark:text-amber-400 font-medium '>{!info.gender ? "--" : info.gender} <span className='text-gray-400 dark:text-white'> : جنسیت </span></p>
            </div>

            <div className='flex flex-row-reverse gap-2 text-right'>                 
                <p data-tooltip-id="my-tooltip" data-tooltip-content={info.aboutme} className='flex flex-row-reverse'>
                    <p className='text-orange dark:text-amber-400 text-right font-medium'>
                        
                        <span className='text-gray-400 dark:text-white  w-36'>  درباره من :</span>
                        {!info.aboutme ? "--" : info.aboutme.slice(0,50) } 
                    </p>
                </p><Tooltip id="my-tooltip" />
                
            </div>
        </div>

    </div>
  )
}

export default ProfileInformation