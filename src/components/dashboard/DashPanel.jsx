import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Dashboard pages:
import StdDashboard from '../../pages/dashboard/content/StdDashboard'
import StdInformation from '../../pages/dashboard/content/StdInformation'
import StdSettings from '../../pages/dashboard/content/StdSettings'
import StdCourses from '../../pages/dashboard/content/StdCourses'
import ReservatCourses from '../../pages/dashboard/content/ReservatCourses'
import StdPointOfView from '../../pages/dashboard/content/StdPointOfView'
import StdFavorite from '../../pages/dashboard/content/StdFavorite'

// images:
import profile from '../../assets/dashboard/profile.png'
import logout from '../../assets/dashboard/logout.svg'
import home from '../../assets/dashboard/home.svg'
import dash from '../../assets/dashboard/Frame(1).svg'
import inform from '../../assets/dashboard/Frame(4).svg'
import courses from '../../assets/dashboard/book-02-solid-rounded 1.svg'
import resrvsC from '../../assets/dashboard/Group(1).svg'
import view from '../../assets/dashboard/111.svg'
import favorite from '../../assets/dashboard/Vector.svg'
import setting from '../../assets/dashboard/Vector(1).svg'
import { IoIosMenu } from 'react-icons/io'
import EditeProfileForm from './editeprofile/EditeProfileForm'




const DashPanel = () => {
    const [dashPage, setDashPage] = useState(<StdDashboard/>)
    const dashboard=[
        {
            id:1,
            icon:dash,
            title:"داشبورد",
            page:<StdDashboard/>,
            isOpen:false,
        },
        {
            id:2,
            icon:inform,
            title:"اطلاعات کاربری",
            page:<StdInformation/>,
            isOpen:false,
        },
        {
            id:3,
            icon:courses,
            title:"دوره های من",
            page:<StdCourses/>,
            isOpen:false,
        },{
            id:4,
            icon:resrvsC,
            title:"دوره های رزرو شده",
            page:<ReservatCourses/>,
            isOpen:false,
        },{
            id:5,
            icon:view,
            title:"دیدگاه های من",
            page:<StdPointOfView/>,
            isOpen:false,
        },{
            id:6,
            icon:favorite,
            title:"علاقه مندی ها",
            page:<StdFavorite/>,
            isOpen:false,
        },{
            id:7,
            icon:setting,
            title:"تنظیمات امنیتی",
            page:<StdSettings/>,
            isOpen:false,
        },

    ]
    const HandleDashContent =(id )=>{
        const ContentOpen =dashboard.map((data)=>{
            if(data.id === id){
                return {...data.page }
            }else{
              return ""
            }
            
        });
        
        setDashPage(ContentOpen)
    }


    const [resposive, setResposive] = useState(false)
    const HandeleResposive=()=>{
        if(resposive === false){return true}
        else{return false}
    }
   console.log(resposive)

  return (
    <div style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.3)"}}
        className='flex flex-row rounded-xl 
        max-sm:flex-col-reverse
        '
    >
        {/* content  */}
        <div className={`p-6 w-full rounded-l-xl bg-white dark:bg-gray-700 min-w-[458px]
        max-sm:p-2  
        max-lg:p-2
       
        `}>
            <NavLink to={"/"}>
                <img src={home}/>
            </NavLink>
            {dashPage}
        </div>

        {/* menu  */}
        <div className={`relative bg-primary font-red-500 rounded-r-xl py-6 w-[35%]
        max-lg:${resposive ? " " : "w-[10%]" } 
        max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-br-none max-sm:${resposive ? "h-[35%]" : "h-2"} 
        `} >
            {/* responsive icon  */}
            <IoIosMenu onClick={()=>setResposive(HandeleResposive)} className={`hidden w-6 h-6 text-teal-900
             ${resposive ? "rotate-0" : "rotate-90"} transition duration-500 
                max-lg:block 
                max-sm:ml-[90%]
                max-lg:absolute max-lg:right-4           
            `}/>
             {/* profile section: */}
            <div className={`border-b-[1.5px] border-gray-200/60 mx-4 py-6
                max-sm:mx-0 max-sm:block max-sm:${resposive ? "border-b-[1.5px]" : "border-none"}
                max-lg:${resposive ? "block" : "hidden"}
            `}>
                <img src={profile} className='w-[130px] h-[130px] rounded-full mx-auto
                max-md:w-[100px] max-md:h-[100px]  max-lg:w-24  max-lg:h-24
                '/>
                <p className='mt-4 text-center text-teal-900 font-bold
                     max-lg:text-sm 
                '>فلانیه فلانی خوش آمدید</p>
            </div>

            {/* menuBar */}
            <ul className={`my-8 mr-8 
                max-lg:mr-1 
                max-md:mr-0 
                max-sm:${resposive ? " " : "hidden"}
            `}>
                {dashboard.map((items)=>(
                    <li key={items.id} onClick={()=>HandleDashContent(items.id)}
                        className={`group flex flex-row-reverse font-semibold text-teal-900 my-2 py-3 p-4 
                            gap-4 rounded-r-full hover:bg-white hover:border-l-4 hover:border-l-orange
                            transition duration-300 cursor-pointer   
                            max-lg:${resposive ?" ":"hover:border-none hover:bg-white hover:rounded-full"}
                             
                            max-lg:gap-0
                            max-md:gap-0 max-md:text-sm
                            `}
                    >
                        <img src={items.icon} className={`hidden group-hover:block
                            max-lg:${resposive ? "hidden" : "block"}
                          
                         `}/>
                        <p className={`${resposive? "max-lg:block" : "max-lg:hidden" } `}> {items.title} </p>
                    </li>
                ))}
            </ul>

            {/* logout section    */}
            <NavLink to={"/"} className={`flex flex-row gap-2 text-teal-900 font-semibold my-8 mx-[23%]
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
  )
}

export default DashPanel