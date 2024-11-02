import { useState } from 'react'
// import { Field, Form, Formik } from 'formik'
import * as yup from "yup";
import { FaRegEyeSlash } from 'react-icons/fa';

import save from '../../../assets/dashboard/save.svg'
import { IoEyeOutline } from 'react-icons/io5';
import { passwordDash } from '../../../core/services/DashApi';


const ChangPassword = () => {


  const [oldPassword , setOldPassword] = useState()
  console.log(oldPassword)

  const [newPassword , setNewPassword] = useState()
  console.log(newPassword)

 const pass = {
    oldPassword : oldPassword,
    newPassword : newPassword
  }


  const onSubmit =async (e)=>{
    e.preventDefault();


  const changePassword = passwordDash(pass)
  console.log(changePassword)


  }


  const validation = yup.object().shape({
    previousPassword:yup.string()
    .required('Required'),

    password: yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, { message:'Password requires a number'})
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Required'),

    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value')
    .required('Required'),
  });

  const [showHidePrevPassword, setShowHidePrevPassword] = useState(false);
  const [showHideNewPassword, setShowHideNewPassword] = useState(false);
  // const [showHideRepitPassword, setShowHideRepitPassword] = useState(false);
  return (
   <>
      <form
           onSubmit={(values) => onSubmit(values)}

        validationSchema={validation}

      >

        <div>             
              {/* Body  */}
              <div className='grid grid-cols-2 gap-1  my-8
                max-xl:grid-cols-1
                 max-lg:grid max-lg:grid-cols-3
                max-md:grid-cols-1  
                
              '>

                <div className='text-right text-xs grid-col-1 text-gray-400 max-md:mx-auto pl-[50px]'>
                  <label className='relative'>
                    <p className='py-2 px-4'>رمز عبور جدید</p>  
                    {/* show/hide icon  */}
                    <i onClick={() => setShowHideNewPassword(!showHideNewPassword)} className='absolute right-6 top-[55px]'>                      
                         {showHideNewPassword?<IoEyeOutline className='text-green'/>: <FaRegEyeSlash className='text-green'/> }                      
                    </i>
                    <input 
                     onChange={(e)=>setNewPassword(e.target.value)}
                    type={showHideNewPassword ? 'text' : 'password'} name="password" placeholder="*****" 
                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                    className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 
                    placeholder-md placeholder-green'/>
                  </label>
                                   
                </div>

                <div className='text-right text-xs grid-col-1 text-gray-400 max-md:mx-auto pr-[240px]'>
                  <label className='relative'>
                    <p className='py-2 px-4'>رمز عبور فعلی  </p>
                    {/* show/hide icon  */}
                    <i onClick={() => setShowHidePrevPassword(!showHidePrevPassword)} className='absolute right-6 top-[55px]'>                      
                         {showHidePrevPassword?<IoEyeOutline className='text-green'/>: <FaRegEyeSlash className='text-green'/> }                      
                    </i>
                    <input
                        onChange={(e)=>setOldPassword(e.target.value)}
                    type={showHidePrevPassword ? 'text' : 'password'} name="previousPassword" placeholder="*****" 
                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                    className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-green 
                    placeholder-md placeholder-green'/>
                    
                  </label>
                 
                </div>   

              </div>

              <button type="submit" className='flex flex-row gap-2 mx-auto text-sm text-green rounded-full
               bg-primary px-3 py-1 
              '>
                <img src={save}/>
                ذخیره تغییرات
              </button>              
        </div>
              
      </form>
   </>
  )
}

export default ChangPassword