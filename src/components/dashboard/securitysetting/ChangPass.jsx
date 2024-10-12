import { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as yup from "yup";
import { FaRegEyeSlash } from 'react-icons/fa';

import save from '../../../assets/dashboard/save.svg'
import { IoEyeOutline } from 'react-icons/io5';


const ChangPassword = () => {
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
  const [showHideRepitPassword, setShowHideRepitPassword] = useState(false);
  return (
   <>
      <Formik
         initialValues={{
          previousPassword:'',
          password: '',
          confirmPassword:'',
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log("values",values);
          console.log("valid:",validation)
        }}
      >
      {({ errors }) => (
        <Form>             
              {/* Body  */}
              <div className='grid grid-cols-3 gap-1 justify-items-center my-8
                max-md:flex max-md:flex-col max-md:px-36
              '>

                <div className='text-right text-xs grid-col-1 text-gray-400'>
                  <label className='relative'>
                    <p className='py-2 px-4'>تکرار رمز عبور</p>  
                    {/* show/hide icon  */}
                    <i onClick={() => setShowHideRepitPassword(!showHideRepitPassword)} className='absolute right-6 top-[55px]'>                      
                         {showHideRepitPassword?<IoEyeOutline className='text-teal-700' />: <FaRegEyeSlash className='text-teal-700'/> }                      
                    </i>
                    <Field type={showHideRepitPassword ? 'text' : 'password'}  name="confirmPassword" placeholder="*****" 
                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                    className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 
                    placeholder-md placeholder-teal-800'/>
                  </label>
                  {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                <div className='text-right text-xs grid-col-1 text-gray-400'>
                  <label className='relative'>
                    <p className='py-2 px-4'>رمز عبور جدید</p>  
                    {/* show/hide icon  */}
                    <i onClick={() => setShowHideNewPassword(!showHideNewPassword)} className='absolute right-6 top-[55px]'>                      
                         {showHideNewPassword?<IoEyeOutline className='text-teal-700'/>: <FaRegEyeSlash className='text-teal-700'/> }                      
                    </i>
                    <Field type={showHideNewPassword ? 'text' : 'password'} name="password" placeholder="*****" 
                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                    className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 
                    placeholder-md placeholder-teal-800'/>
                  </label>
                  {errors.password && <p>{errors.password}</p>}                    
                </div>

                <div className='text-right text-xs grid-col-1 text-gray-400'>
                  <label className='relative'>
                    <p className='py-2 px-4'>رمز عبور فعلی  </p>
                    {/* show/hide icon  */}
                    <i onClick={() => setShowHidePrevPassword(!showHidePrevPassword)} className='absolute right-6 top-[55px]'>                      
                         {showHidePrevPassword?<IoEyeOutline className='text-teal-700'/>: <FaRegEyeSlash className='text-teal-700'/> }                      
                    </i>
                    <Field type={showHidePrevPassword ? 'text' : 'password'} name="previousPassword" placeholder="*****" 
                    style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                    className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 
                    placeholder-md placeholder-teal-800'/>
                    
                  </label>
                  {errors.previousPassword && <p>{errors.previousPassword}</p>}   
                </div>   

              </div>

              <button type="submit" className='flex flex-row gap-2 mx-auto text-sm text-teal-800 rounded-full
               bg-primary px-3 py-1 
              '>
                <img src={save}/>
                ذخیره تغییرات
              </button>              
        </Form>
      )}        
      </Formik>
   </>
  )
}

export default ChangPassword