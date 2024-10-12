import { Field, Form, Formik } from 'formik'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import * as yup from "yup";

const ResetEmail = () => {

  const validation = yup.object().shape({
    email: yup.string()
    .email('Invalid email')
    .required('Required'),
  })

  return (
    <>
      <Formik
      initialValues={{email:''}}
      validationSchema={validation}
      onSubmit={(values) => {
        console.log("values",values);
      }}
      >
      {({ errors }) => (
        <Form>        
            {/* Body  */} 
            <div className='text-right text-xs flex mx-auto text-gray-400 my-8'>
              <label className='mx-auto'>
              <p className='py-2 px-4 text-xs text-gray-400'>ایمیل جدید</p>
                <Field name="email" type="email" placeholder="example@gmail.com" style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                className='px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 w-64
                 placeholder-gray-300'/>
              </label>
              {errors.email && <p>{errors.email}</p>}
            </div>         
        </Form>
      )}  
      </Formik>
         
    </>
  )
}

export default ResetEmail