import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

// images:
import logout from '../../assets/dashboard/logout.svg'
import setting from '../../assets/dashboard/Vector(1).svg'

import { IoIosMenu } from 'react-icons/io'
import DashNavbar from './DashNavbar'
import { useUserProfile } from '../../core/services/query/DashboardQuery'
import { ImageErrore } from '../ImageErrore'
import DarkMode from '../DarkMode'
import { removeItem } from '../../core/services/Storage/Storage.Services'
import { useDispatch, useSelector } from 'react-redux'
import { handleToken } from '../../core/redux/slices/QueryState/TokenSlice'


import { FaRobot } from "react-icons/fa6";
import { HiXCircle } from 'react-icons/hi2'


const DashPanel = () => {

    const [modal, setModal] = useState(false)

  
    const userProfile = useUserProfile()
  


    const dashboard=[
        {
            id:1,
            icon:<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5625 7.42187C1.5625 6.34271 2.4375 5.46875 3.51562 5.46875H9.76562C10.8448 5.46875 11.7188 6.34375 11.7188 7.42187V11.3281C11.7188 12.4073 10.8438 13.2812 9.76562 13.2812H3.51562C2.99762 13.2812 2.50084 13.0755 2.13456 12.7092C1.76828 12.3429 1.5625 11.8461 1.5625 11.3281V7.42187ZM14.0625 8.98437C14.0625 7.90521 14.9375 7.03125 16.0156 7.03125H21.4844C22.5625 7.03125 23.4375 7.90625 23.4375 8.98437V17.5781C23.4375 18.6562 22.5625 19.5312 21.4844 19.5312H16.0156C15.4976 19.5312 15.0008 19.3255 14.6346 18.9592C14.2683 18.5929 14.0625 18.0961 14.0625 17.5781V8.98437ZM3.125 16.7969C3.125 15.7177 4 14.8438 5.07812 14.8438H10.5469C11.626 14.8438 12.5 15.7188 12.5 16.7969V19.1406C12.5 20.2187 11.625 21.0937 10.5469 21.0937H5.07812C4.56012 21.0937 4.06334 20.888 3.69706 20.5217C3.33078 20.1554 3.125 19.6586 3.125 19.1406V16.7969Z" className='fill-darkgreen'/>
            </svg>          
            ,
            title:"داشبورد",
            link:"/Dashboard",
            isOpen:false,
        },
        {
            id:2,
            icon:<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.61207 16.5704C4.24969 17.3689 0.677638 18.9995 2.85326 21.0398C3.91603 22.0365 5.09968 22.7493 6.58782 22.7493H15.0795C16.5676 22.7493 17.7513 22.0365 18.814 21.0398C20.9897 18.9995 17.4176 17.3689 16.0552 16.5704C12.8605 14.6979 8.80681 14.6979 5.61207 16.5704Z" className='fill-darkgreen'/>
            <path d="M15.1667 7.58333C15.1667 9.97657 13.2265 11.9167 10.8333 11.9167C8.4401 11.9167 6.5 9.97657 6.5 7.58333C6.5 5.1901 8.4401 3.25 10.8333 3.25C13.2265 3.25 15.1667 5.1901 15.1667 7.58333Z" className='fill-darkgreen'/>
            <path d="M21.2569 4.94676C21.4992 4.68435 21.6202 4.55316 21.7489 4.47663C22.0594 4.29198 22.4417 4.28624 22.7574 4.46149C22.8882 4.53412 23.013 4.66162 23.2626 4.91663C23.5122 5.17164 23.6371 5.29914 23.7082 5.43278C23.8797 5.75525 23.8742 6.14579 23.6934 6.46296C23.6184 6.59441 23.49 6.71811 23.2332 6.96551L20.177 9.90913C19.6902 10.378 19.4468 10.6124 19.1426 10.7312C18.8384 10.85 18.5041 10.8412 17.8352 10.8238L17.7442 10.8214C17.5407 10.8161 17.4388 10.8134 17.3797 10.7462C17.3205 10.6791 17.3286 10.5754 17.3447 10.368L17.3535 10.2554C17.399 9.67163 17.4217 9.37977 17.5357 9.11741C17.6497 8.85503 17.8463 8.64201 18.2395 8.21594L21.2569 4.94676Z" className='fill-darkgreen'/>
            </svg>
            ,
            title:"اطلاعات کاربری",
            link:"/info",
            isOpen:false,
        },
        {
            id:3,
            icon:<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0127 1.09375H10.9864C12.5944 1.09374 13.8681 1.09372 14.8649 1.22775C15.8907 1.36567 16.7211 1.65627 17.376 2.31108C18.0307 2.96591 18.3213 3.79624 18.4593 4.82211C18.5933 5.81891 18.5933 7.09262 18.5933 8.70064V14.875C18.5933 14.9467 18.5817 15.0158 18.5605 15.0805C18.4681 15.4646 18.1223 15.75 17.7097 15.75C16.9848 15.75 16.3972 16.3377 16.3972 17.0625C16.3972 17.7873 16.9848 18.375 17.7097 18.375C18.193 18.375 18.5847 18.7667 18.5847 19.25C18.5847 19.7172 18.2187 20.0988 17.7577 20.1237C17.7455 20.1244 17.7331 20.1247 17.7208 20.1249L17.7097 20.125H5.43318C3.74731 20.125 2.40234 18.7418 2.40234 17.0625C2.40234 17.0134 2.4035 16.9647 2.40577 16.9161V8.70062C2.40575 7.09259 2.40574 5.81892 2.53976 4.82211C2.67768 3.79624 2.96829 2.96591 3.6231 2.31108C4.27792 1.65627 5.10826 1.36567 6.13412 1.22775C7.13092 1.09372 8.40461 1.09374 10.0127 1.09375ZM5.43318 15.75H14.942C14.753 16.1478 14.6472 16.5928 14.6472 17.0625C14.6472 17.5322 14.753 17.9772 14.942 18.375H5.43318C4.73778 18.375 4.15234 17.7994 4.15234 17.0625C4.15234 16.3256 4.73778 15.75 5.43318 15.75ZM13.1245 6.78125C13.4869 6.78125 13.7808 6.48743 13.7808 6.125C13.7808 5.76257 13.4869 5.46875 13.1245 5.46875H7.87452C7.51208 5.46875 7.21827 5.76257 7.21827 6.125C7.21827 6.48743 7.51208 6.78125 7.87452 6.78125H13.1245ZM10.4995 10.2812C10.8619 10.2812 11.1558 9.98742 11.1558 9.625C11.1558 9.26258 10.8619 8.96875 10.4995 8.96875H7.87452C7.51208 8.96875 7.21827 9.26258 7.21827 9.625C7.21827 9.98742 7.51208 10.2812 7.87452 10.2812H10.4995Z" className='fill-darkgreen'/>
            </svg>,
            title:"دوره های من",
            link:"/stdCourses",
            isOpen:false,
        },
        {
            id:4,
            icon:<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6875 4.03125H3.46875C3.0375 4.03125 2.75 3.74375 2.75 3.3125C2.75 2.88125 3.0375 2.59375 3.46875 2.59375H15.6875C16.1187 2.59375 16.4062 2.88125 16.4062 3.3125C16.4062 3.74375 16.1187 4.03125 15.6875 4.03125Z" className='fill-darkgreen'/>
            <path d="M15.6875 4.75H9.21875V14.0938L7.0625 13.375L4.90625 14.0938V4.75H3.46875C2.67812 4.75 2.03125 4.10313 2.03125 3.3125C2.03125 2.52187 2.67812 1.875 3.46875 1.875H15.6875C16.1187 1.875 16.4062 1.5875 16.4062 1.15625C16.4062 0.725 16.1187 0.4375 15.6875 0.4375H3.46875C1.8875 0.4375 0.59375 1.73125 0.59375 3.3125V17.6875C0.59375 19.2687 1.8875 20.5625 3.46875 20.5625H15.6875C16.1187 20.5625 16.4062 20.275 16.4062 19.8438V5.46875C16.4062 5.0375 16.1187 4.75 15.6875 4.75Z" className='fill-darkgreen'/>
            </svg>,
            title:"دوره های رزرو شده",
            link:"/reservCourses",
            isOpen:false,
        },
        {
            id:5,
            icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01953 9.53027C7.01953 9.63387 6.97838 9.73323 6.90512 9.80649C6.83186 9.87974 6.73251 9.9209 6.62891 9.9209C6.52531 9.9209 6.42595 9.87974 6.35269 9.80649C6.27944 9.73323 6.23828 9.63387 6.23828 9.53027C6.23828 9.42667 6.27944 9.32732 6.35269 9.25406C6.42595 9.1808 6.52531 9.13965 6.62891 9.13965C6.73251 9.13965 6.83186 9.1808 6.90512 9.25406C6.97838 9.32732 7.01953 9.42667 7.01953 9.53027ZM7.01953 9.53027H6.62891ZM10.9258 9.53027C10.9258 9.63387 10.8846 9.73323 10.8114 9.80649C10.7381 9.87974 10.6388 9.9209 10.5352 9.9209C10.4316 9.9209 10.3322 9.87974 10.2589 9.80649C10.1857 9.73323 10.1445 9.63387 10.1445 9.53027C10.1445 9.42667 10.1857 9.32732 10.2589 9.25406C10.3322 9.1808 10.4316 9.13965 10.5352 9.13965C10.6388 9.13965 10.7381 9.1808 10.8114 9.25406C10.8846 9.32732 10.9258 9.42667 10.9258 9.53027ZM10.9258 9.53027H10.5352ZM14.832 9.53027C14.832 9.63387 14.7909 9.73323 14.7176 9.80649C14.6444 9.87974 14.545 9.9209 14.4414 9.9209C14.3378 9.9209 14.2384 9.87974 14.1652 9.80649C14.0919 9.73323 14.0508 9.63387 14.0508 9.53027C14.0508 9.42667 14.0919 9.32732 14.1652 9.25406C14.2384 9.1808 14.3378 9.13965 14.4414 9.13965C14.545 9.13965 14.6444 9.1808 14.7176 9.25406C14.7909 9.32732 14.832 9.42667 14.832 9.53027ZM14.832 9.53027H14.4414ZM19.9102 9.53027C19.9102 14.2761 15.7122 18.124 10.5352 18.124C9.63639 18.1251 8.74144 18.0071 7.8737 17.773C6.65053 18.6332 5.15841 19.0241 3.67057 18.874C3.50515 18.8581 3.34043 18.8355 3.17682 18.8063C3.69023 18.2012 4.04085 17.4752 4.19557 16.6969C4.28932 16.2209 4.05703 15.7584 3.70911 15.4199C2.12891 13.8824 1.16016 11.8105 1.16016 9.53027C1.16016 4.78444 5.35807 0.936523 10.5352 0.936523C15.7122 0.936523 19.9102 4.78444 19.9102 9.53027Z" className='fill-darkgreen'/>
            <path d="M7.01953 9.53027C7.01953 9.63387 6.97838 9.73323 6.90512 9.80649C6.83186 9.87974 6.73251 9.9209 6.62891 9.9209C6.52531 9.9209 6.42595 9.87974 6.35269 9.80649C6.27944 9.73323 6.23828 9.63387 6.23828 9.53027C6.23828 9.42667 6.27944 9.32732 6.35269 9.25406C6.42595 9.1808 6.52531 9.13965 6.62891 9.13965C6.73251 9.13965 6.83186 9.1808 6.90512 9.25406C6.97838 9.32732 7.01953 9.42667 7.01953 9.53027ZM7.01953 9.53027H6.62891M10.9258 9.53027C10.9258 9.63387 10.8846 9.73323 10.8114 9.80649C10.7381 9.87974 10.6388 9.9209 10.5352 9.9209C10.4316 9.9209 10.3322 9.87974 10.2589 9.80649C10.1857 9.73323 10.1445 9.63387 10.1445 9.53027C10.1445 9.42667 10.1857 9.32732 10.2589 9.25406C10.3322 9.1808 10.4316 9.13965 10.5352 9.13965C10.6388 9.13965 10.7381 9.1808 10.8114 9.25406C10.8846 9.32732 10.9258 9.42667 10.9258 9.53027ZM10.9258 9.53027H10.5352M14.832 9.53027C14.832 9.63387 14.7909 9.73323 14.7176 9.80649C14.6444 9.87974 14.545 9.9209 14.4414 9.9209C14.3378 9.9209 14.2384 9.87974 14.1652 9.80649C14.0919 9.73323 14.0508 9.63387 14.0508 9.53027C14.0508 9.42667 14.0919 9.32732 14.1652 9.25406C14.2384 9.1808 14.3378 9.13965 14.4414 9.13965C14.545 9.13965 14.6444 9.1808 14.7176 9.25406C14.7909 9.32732 14.832 9.42667 14.832 9.53027ZM14.832 9.53027H14.4414M19.9102 9.53027C19.9102 14.2761 15.7122 18.124 10.5352 18.124C9.63639 18.1251 8.74144 18.0071 7.8737 17.773C6.65053 18.6332 5.15841 19.0241 3.67057 18.874C3.50515 18.8581 3.34043 18.8355 3.17682 18.8063C3.69023 18.2012 4.04085 17.4752 4.19557 16.6969C4.28932 16.2209 4.05703 15.7584 3.70911 15.4199C2.12891 13.8824 1.16016 11.8105 1.16016 9.53027C1.16016 4.78444 5.35807 0.936523 10.5352 0.936523C15.7122 0.936523 19.9102 4.78444 19.9102 9.53027Z" className=' stroke-primary' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            title:"دیدگاه های من",
            link:"/stdPointOfView",
            isOpen:false,
        },{
            id:6,
            icon:<svg width="16" height="18" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3939 0.907107C13.3564 1.01911 14.0625 1.84948 14.0625 2.81898V16.3754L7.5 13.0941L0.9375 16.3754V2.81898C0.9375 1.84948 1.64275 1.01911 2.60613 0.907107C5.85779 0.529662 9.14221 0.529662 12.3939 0.907107Z" className='fill-darkgreen'/>
            </svg>,
            title:"دوره های مورد علاقه",
            link:"/stdFavorite",
            isOpen:false,
        }

        ,{
            id:7,
            icon:<svg width="16" height="18" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3939 0.907107C13.3564 1.01911 14.0625 1.84948 14.0625 2.81898V16.3754L7.5 13.0941L0.9375 16.3754V2.81898C0.9375 1.84948 1.64275 1.01911 2.60613 0.907107C5.85779 0.529662 9.14221 0.529662 12.3939 0.907107Z" className='fill-darkgreen'/>
            </svg>,
            title:"اخبار مورد علاقه",
            link:"/stdFavoriteNews",
            isOpen:false,
        }
        ,{
            id:8,
            icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99957 0.145508C8.45847 0.145508 7.20551 0.666119 6.11273 1.23226C5.78251 1.40333 5.47575 1.57256 5.18262 1.73427C4.46537 2.12994 3.82962 2.48062 3.13152 2.70337C2.7215 2.83418 2.3583 2.95006 2.10078 3.05097C1.8584 3.14595 1.57034 3.27611 1.36595 3.50325C1.18236 3.70729 1.08805 3.93635 1.02551 4.15547C0.968745 4.35436 0.920216 4.62363 0.873668 4.88197C-0.261113 11.1755 2.2203 17.1378 8.2799 19.4577C8.87546 19.6858 9.31418 19.8538 10.0026 19.8538C10.6911 19.8538 11.1297 19.6858 11.7253 19.4577C17.7847 17.1377 20.2637 11.1752 19.1286 4.88192C19.082 4.62356 19.0334 4.35423 18.9767 4.15532C18.9141 3.93619 18.8197 3.7071 18.6361 3.50306C18.4317 3.27591 18.1437 3.14579 17.9012 3.05085C17.6437 2.94997 17.2806 2.83416 16.8705 2.70341C16.1721 2.48066 15.5359 2.1299 14.818 1.73417C14.5248 1.5725 14.2178 1.40327 13.8876 1.23225C12.7942 0.666129 11.5408 0.145508 9.99957 0.145508ZM7.70882 6.96322V7.93643C7.63995 7.9573 7.57153 7.98236 7.50355 8.01252C6.93506 8.26479 6.49783 8.74173 6.27302 9.32317C6.17594 9.57434 6.13863 9.8322 6.12131 10.1041C6.10464 10.3658 6.10464 10.6845 6.10465 11.0666V11.1098C6.10464 11.4918 6.10464 11.8106 6.12131 12.0723C6.13863 12.3442 6.17594 12.6022 6.27302 12.8533C6.49783 13.4348 6.93506 13.9116 7.50355 14.1639C7.75319 14.2747 8.00879 14.3165 8.27055 14.3357C8.51952 14.3538 8.8212 14.3538 9.17448 14.3538H10.8265C11.1799 14.3538 11.4815 14.3538 11.7304 14.3357C11.9922 14.3165 12.2478 14.2747 12.4974 14.1639C13.0659 13.9116 13.5032 13.4348 13.7279 12.8533C13.825 12.6022 13.8623 12.3442 13.8796 12.0723C13.8963 11.8106 13.8963 11.4918 13.8963 11.1098V11.0666C13.8963 10.6845 13.8963 10.3658 13.8796 10.1041C13.8623 9.8322 13.825 9.57434 13.7279 9.32317C13.5032 8.74173 13.0659 8.26479 12.4974 8.01252C12.4295 7.98236 12.361 7.9573 12.2922 7.93643V6.96322C12.2922 5.70585 11.2424 4.72884 10.0005 4.72884C8.75859 4.72884 7.70882 5.70585 7.70882 6.96322ZM10.0005 6.10384C9.47047 6.10384 9.08382 6.51195 9.08382 6.96322V7.8226L9.17448 7.82259H10.8265L10.9172 7.8226V6.96322C10.9172 6.51195 10.5305 6.10384 10.0005 6.10384Z" className='fill-darkgreen'/>
            </svg>,
            title:"تنظیمات امنیتی",
            link:"/settings",
            isOpen:false,
        },
       

    ]

    
    const [remove , setRemove] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const user = useSelector((state) => state.TokenSlice)

     
     const token = user?.token
  

     const handleLogout = (token)=>{
        localStorage.removeItem("token" , token);    
        setRemove(false)
        setModal(false)
        navigate("/")
        window.location.reload();
        
    }

    dispatch(handleToken(remove))
  

    



    const [resposive, setResposive] = useState(false)
    const HandeleResposive=()=>{
        if(resposive === false){return true}
        else{return false}
    }

  return (
    <div className='bg-gray-50 dark:bg-gray-900 py-4 px-5 h-screen
        max-lg:px-12   max-xl:h-full     
        max-md:px-8
        max-sm:px-4
        '>
       
        <DarkMode/>
        <div 
            className='relative flex flex-row rounded-xl 
            max-sm:flex-col-reverse lg:container h-[680px]
            '
        >
            {/* content  */}
            <div style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.3)"}} 
            className={`relative p-6 rounded-l-xl bg-white dark:bg-gray-500 w-full
            max-sm:p-2 max-sm:rounded-b-xl max-sm:rounded-tl-none overflow-auto
            max-lg:p-2 max-lg:${resposive ? " " : "w-full" } 
            `}>
               <DashNavbar />
                <Outlet/>
            </div>

            {/* menu  */}
            <div 
            className={`right-0 bg-primary font-red-500 rounded-r-xl py-[8px] z-40 relative
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
                <div className={`border-b-[1.5px] border-gray-200/60 mx-4 py-4
                    max-sm:mx-0 max-sm:block
                    max-lg:${resposive ? "block" : "hidden"}
                `}>
                    <img src={userProfile.data?.currentPictureAddress} onError={ImageErrore} className='w-[120px] h-[120px] rounded-full mx-auto
                    max-md:w-[100px] max-md:h-[100px]  max-lg:w-24  max-lg:h-24
                    '/>
                    <p className='mt-4 text-center text-darkgreen font-bold
                        max-lg:text-sm 
                    '>{userProfile.data?.fName}{" "} {userProfile.data?.lName} خوش آمدید
                    </p>
                </div>

                {/* menuBar */}
                <ul className={`my-1 mr-8 
                    max-lg:mr-1 max-lg:my-12  
                    max-md:mr-0 
                    max-sm:${resposive ? "block " : "hidden"}
                `}>
                    {dashboard.map((items)=>(
                        <NavLink to={items.link}  key={items.id}
                        className={({isActive})=>`${isActive ? "bg-white border-l-4 border-l-orange" :" "}
                                group flex flex-row-reverse font-semibold text-darkgreen my-1 py-2.5 px-4
                                gap-4 rounded-r-full hover:bg-white hover:border-l-4 hover:border-l-orange
                                transition-all duration-300 cursor-pointer                        
                                max-lg:gap-0 
                                max-md:gap-0 max-md:text-sm 
                                max-lg:${resposive? " " : " max-lg:hover:border-l-0 max-lg:hover:rounded-full" }
                        
                        `}
                           
                        >
                            <NavLink to={items.link} 
                            className="relative flex flex-row-reverse gap-1 max-sm:gap-4 w-full"> 
                                <p className={` w-6 h-6
                                    max-lg:w-5 max-lg:h-5  
                                    max-sm:w-6 max-sm:h-6                         
                                `}>
                                    {items.icon}
                                 </p>                                
                            <p className={`${resposive? "max-lg:block" : "max-lg:hidden" } `}> {items.title} </p>

                            </NavLink>
                        
                        </NavLink>
                    ))}
                </ul>

                {/* logout section    */}
                <div onClick={()=>setModal(true)}
                     className={`flex flex-row gap-1 text-darkgreen text-sm font-semibold bottom-5 right-12 absolute cursor-pointer
                    max-sm:${resposive ? " " : "hidden"}  
                    max-md:gap-0
                    max-lg:right-6                    
                    `}>  

                    <div className={`max-lg:${resposive ? "block" : "hidden"} max-sm:${resposive ? "block" : "hidden"} `}>                                         
                        خروج از حساب
                    </div>               
                    <img src={logout}/>
                </div>
                {/* log Out Modal  */}
                <div className={`${modal == true ? "block": "hidden"} fixed left-0 top-0 w-screen h-screen bg-black/70 z-[9999]
                                    backdrop-blur-sm transition-all duration-700`}
                    >
                        <div className='bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40'>
                        <HiXCircle onClick={()=>setModal(false)} 
                            className=' right-4 top-4 w-5 h-5 cursor-pointer text-secondary opacity-100 justify-self-end '
                        />                                
                        <p className='dark:text-gray-950 text-[20px] text-center'> آیا میخواهید از حسابتان خارج شوید؟ </p>
                        <NavLink to={"/"} onClick={handleLogout}  className='bg-secondary p-2 rounded-md text-sm w-20 hover:scale-110
                            transition duration-500 hover:shadow-md mx-auto text-center'>بله</NavLink>
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default DashPanel