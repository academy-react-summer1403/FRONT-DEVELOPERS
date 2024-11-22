import React from 'react'
import { Tooltip } from 'react-tooltip'
import { TbBrandReactNative } from "react-icons/tb";
import { MdPlaylistRemove } from "react-icons/md";

const FilterNews = () => {
    const filter=[
      {
        tool1:"ریکت",
        tool2:"react",
        icon:<TbBrandReactNative className='w-6 h-6 text-darkgreen'/>,
      },
      {
        tool:"filter2",
        icon:<RiTestTubeFill className='w-6 h-6 text-darkgreen'/>,
      },{
        tool:"filter3",
        icon:<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5625 7.42187C1.5625 6.34271 2.4375 5.46875 3.51562 5.46875H9.76562C10.8448 5.46875 11.7188 6.34375 11.7188 7.42187V11.3281C11.7188 12.4073 10.8438 13.2812 9.76562 13.2812H3.51562C2.99762 13.2812 2.50084 13.0755 2.13456 12.7092C1.76828 12.3429 1.5625 11.8461 1.5625 11.3281V7.42187ZM14.0625 8.98437C14.0625 7.90521 14.9375 7.03125 16.0156 7.03125H21.4844C22.5625 7.03125 23.4375 7.90625 23.4375 8.98437V17.5781C23.4375 18.6562 22.5625 19.5312 21.4844 19.5312H16.0156C15.4976 19.5312 15.0008 19.3255 14.6346 18.9592C14.2683 18.5929 14.0625 18.0961 14.0625 17.5781V8.98437ZM3.125 16.7969C3.125 15.7177 4 14.8438 5.07812 14.8438H10.5469C11.626 14.8438 12.5 15.7188 12.5 16.7969V19.1406C12.5 20.2187 11.625 21.0937 10.5469 21.0937H5.07812C4.56012 21.0937 4.06334 20.888 3.69706 20.5217C3.33078 20.1554 3.125 19.6586 3.125 19.1406V16.7969Z" className='fill-darkgreen'/>
        </svg>,
      },{
        tool:"حذف فیلتر ها",
        icon:<MdPlaylistRemove className='w-7 h-7 text-darkgreen'/>,
      },

    ]
  return (
    <div className='grid grid-cols-4 gap-4 mx-auto justify-items-center 
             px-5 py-3 dark:bg-gray-700/70 rounded-full shadow-sm shadow-gray-500 outline-none indent-0
               dark:text-white text-gray-900 hover:bg-gray-50 cursor-pointer text-lg
    '>
        {filter.map((item ,index)=>(
            <div key={index} >
                  <label to="checkbox" data-tooltip-id="tooltip" data-tooltip-content={`${item.tool1} , ${item.tool2}`} className='flex'>{item.icon}
                <input
                    type="checkbox"
                    name="checkbox"
                    className="ml-2 cursor-pointer z-[800] accent-green"                     
                />
                </label><Tooltip id="tooltip" />
            </div>
        ))}
    </div>
  )
}

export default FilterNews