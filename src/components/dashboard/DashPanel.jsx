import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// images:
import logout from '../../assets/dashboard/logout.svg'
import home from '../../assets/dashboard/home.svg'
import dash from '../../assets/dashboard/Frame(1).svg'
import inform from '../../assets/dashboard/Frame(4).svg'
import courses from '../../assets/dashboard/book-02-solid-rounded 1.svg'
import resrvsC from '../../assets/dashboard/Group(1).svg'
import view from '../../assets/dashboard/111.svg'
import favorite from '../../assets/dashboard/Vector.svg'
import setting from '../../assets/dashboard/Vector(1).svg'
import imgalt from '../../assets/detail/imgerrore.png'

import { IoIosMenu } from 'react-icons/io'
import DashNavbar from './DashNavbar'
import { useUserProfile } from '../../core/services/query/DashboardQuery'
import { ImageErrore } from '../ImageErrore'
import DarkMode from '../DarkMode'






const DashPanel = () => {


  
    const userProfile = useUserProfile()
    console.log(userProfile)
  


    const dashboard=[
        {
            id:1,
            icon:dash,
            title:"داشبورد",
            link:"/Dashboard",
            isOpen:false,
        },
        {
            id:2,
            icon:inform,
            title:"اطلاعات کاربری",
            link:"/info",
            isOpen:false,
        },
        {
            id:3,
            icon:courses,
            title:"دوره های من",
            link:"/stdCourses",
            isOpen:false,
        },{
            id:4,
            icon:resrvsC,
            title:"دوره های رزرو شده",
            link:"/reservCourses",
            isOpen:false,
        },{
            id:5,
            icon:view,
            title:"دیدگاه های من",
            link:"/stdPointOfView",
            isOpen:false,
        },{
            id:6,
            icon:favorite,
            title:"علاقه مندی ها",
            link:"/stdFavorite",
            isOpen:false,
        },{
            id:7,
            icon:setting,
            title:"تنظیمات امنیتی",
            link:"/settings",
            isOpen:false,
        },

    ]

    

    const [resposive, setResposive] = useState(false)
    const HandeleResposive=()=>{
        if(resposive === false){return true}
        else{return false}
    }
   console.log(resposive)

  return (
    <div className='bg-gray-50 dark:bg-gray-900 py-4 px-5 pb-10 
        max-lg:px-12 
        max-md:px-8
        max-sm:px-4
        '>
        <DashNavbar/>
        <DarkMode/>
        <div 
            className='relative flex flex-row rounded-xl 
            max-sm:flex-col-reverse lg:container
            '
        >
            {/* content  */}
            <div style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.3)"}} 
            className={`relative p-6 rounded-l-xl bg-white dark:bg-gray-500 w-full
            max-sm:p-2 max-sm:rounded-b-xl max-sm:rounded-tl-none  
            max-lg:p-2 max-lg:${resposive ? " " : "w-full" } 
            `}>
                <NavLink to={"/"}>
                    <img src={home}/>
                </NavLink>
                <Outlet/>
            </div>

            {/* menu  */}
            <div 
            className={`right-0 bg-primary font-red-500 rounded-r-xl py-6 z-40
            lg:w-[400px] 
            max-lg:${resposive ? "w-[300px] " : "w-[25px] " } 
            max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-br-none max-sm:${resposive ? "h-[35%]" : "h-2"} 
            `} >
                {/* responsive icon  */}
                <IoIosMenu onClick={()=>setResposive(HandeleResposive)} className={`hidden w-6 h-6 hover:cursor-pointer text-teal-900
                ${resposive ? "rotate-0" : "rotate-90"} transition duration-500 
                    max-lg:block 
                    max-sm:ml-[90%]
                    max-lg:absolute max-lg:right-4           
                `}/>
                {/* profile section: */}
                <div className={`border-b-[1.5px] border-gray-200/60 mx-4 py-6
                    max-sm:mx-0 max-sm:block
                    max-lg:${resposive ? "block" : "hidden"}
                `}>
                    <img src={userProfile.data?.currentPictureAddress} onError={ImageErrore} className='w-[130px] h-[130px] rounded-full mx-auto
                    max-md:w-[100px] max-md:h-[100px]  max-lg:w-24  max-lg:h-24
                    '/>
                    <p className='mt-4 text-center text-teal-900 font-bold
                        max-lg:text-sm 
                    '>{userProfile.data?.fName}{userProfile.data?.lName} خوش آمدید
                    </p>
                </div>

                {/* menuBar */}
                <ul className={`my-8 mr-8
                    max-lg:mr-1 
                    max-md:mr-0 
                    max-sm:${resposive ? "block " : "hidden"}
                `}>
                    {dashboard.map((items)=>(
                        <NavLink to={items.link}  key={items.id}
                        className={({isActive})=>`${isActive ? "bg-white border-l-4 border-l-orange" :" "}
                                group flex flex-row-reverse font-semibold text-teal-900 my-2 py-3 px-4
                                gap-4 rounded-r-full hover:bg-white hover:border-l-4 hover:border-l-orange
                                transition-all duration-300 cursor-pointer                        
                                max-lg:gap-0 
                                max-md:gap-0 max-md:text-sm 
                                max-lg:${resposive? " " : " max-lg:hover:border-l-0 max-lg:hover:rounded-full" }
                        
                        `}
                           
                        >
                            <NavLink to={items.link} 
                            className=" flex flex-row-reverse gap-1 max-sm:gap-4 w-full"> 

                                <img src={items.icon} className={`hidden group-hover:block w-6 h-6
                                max-lg:${resposive ? "hidden" : "block"} 
                                max-sm:hidden max-sm:group-hover:block max-lg:w-4 max-lg:h-4                         
                            `}/>
                            <p className={`${resposive? "max-lg:block" : "max-lg:hidden" } `}> {items.title} </p>

                            </NavLink>
                        
                        </NavLink>
                    ))}
                </ul>

                {/* logout section    */}
                <NavLink to={"/"} className={`flex flex-row gap-1 text-teal-900 text-sm font-semibold my-8 mx-[23%]
                    max-sm:${resposive ? " " : "hidden"} max-sm:mx-[35%] 
                    max-md:mx-[5%] max-md:gap-0
                    max-lg:mx-[10%] max-md:gap-0
                    `}>                         
                    <div className={`max-lg:${resposive ? "block" : "hidden"} 
                    max-sm:${resposive ? "block" : "hidden"} 
                    `}>خروج از حساب</div>               
                    <img src={logout}/>
                </NavLink>
            </div>

        </div>
    </div>
  )
}

export default DashPanel