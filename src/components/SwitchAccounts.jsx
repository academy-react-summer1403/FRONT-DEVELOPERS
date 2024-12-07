import { Button } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { handleSwitch } from '../core/redux/slices/swetchLogin'

const SwitchAccounts = ({user , ImageProfile , t}) => {


    const dispatch = useDispatch()



    const handleCreateSubmit = (phoneOrGmail ,password )=>{

      console.log(phoneOrGmail ,password )
        

    }
    dispatch(handleSwitch("1" , "2"))
    console.log(dispatch)

    const logIn=[
        {
            name:"ملیکا بخشی ",
            phoneOrGmail:"09333125302" ,
            password:"12345" 
        },
        {
            name:"مصطفی انجین",
            phoneOrGmail:"mostafachronic@gmail.com" ,
            password:"123456" 
        }, {
            name:"سارا ",
            phoneOrGmail:"09112281241" ,
            password:"12345" 
        },
    ]
  return (
    <>
        <div 
            className='group relative w-36 max-md:w-[150px]  max-sm:w-[150px] z-[9999] 
            max-lg:w-[150px] max-xl:w-[200px] h-12 bg-primary
            mt-6 rounded-3xl hover:shadow-lg  dark:bg-orange 
            dark:hover:shadow-slate-700 dark:hover:shadow-md
            transition-shadow'
        >
            <NavLink to={user.token!==null ?  "/Dashboard" : "/auth"}  
            className=' flex justify-center items-center gap-1 h-12 w-full' >  
                <img src={ImageProfile ? ImageProfile.data?.currentPictureAddress : ""} alt="" 
                    className={`w-[40px]  ${user.token == null ? "hidden" : "block border border-white"} h-[40px] rounded-full 
                     top-[4px] left-2 `}
                />                            
                <h1 className={`text-sm  font-semibold text-white mt-5 pr-1   h-[40px] text-center ${user.token == null || user.token == undefined  ? "block" : "hidden"}`} > {t("person")} </h1> 
                <h1 className={`text-sm  font-semibold text-white  truncate  mt-5  w-[60%] h-[40px] ${user.token == null || user.token == undefined  ? "hidden" : "block"}`}>{t(ImageProfile.data?.fName)} {t(ImageProfile.data?.lName)}</h1>

            </NavLink>   

          
        </div>

       
    </>
  )
}

export default SwitchAccounts