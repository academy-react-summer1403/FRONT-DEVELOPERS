import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

// images:
import logout from '../../assets/dashboard/logout.svg'
// import setting from '../../assets/dashboard/Vector(1).svg'

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
import MenuBar from './MenuBar'


const DashPanel = () => {

    const [modal, setModal] = useState(false)

  
    const userProfile = useUserProfile()
  


    

    
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
                <MenuBar resposive={resposive}/>

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