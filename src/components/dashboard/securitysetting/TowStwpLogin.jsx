import { Field, Form, Formik } from 'formik';
import React from 'react'
import { BsCheck } from 'react-icons/bs';

import { IoIosArrowDown } from 'react-icons/io'

const TowStwpLogin = () => {
  return (
    <>
        <Formik
         initialValues={{
          toggle: false,
        }}
        onSubmit={(toggle) => {
            console.log("values",toggle);
            
          }}
        >
            <Form>
                    {/* Body  */} 
                    <button type='submit' className='flex mx-auto my-6 px-3 pb-6'>
                        <label className='relayive flex flex-row gap-2'>
                            <Field type="checkbox" name="toggle" style={{boxShadow:" 0px 1px 3px 0px #00000033 inset"}}
                                className="appearance-none w-5 h-5 mt-1 rounded-md bg-gray-50 checked:bg-darkgreen dark:checked:bg-teal-500 transition duration-300 "/>
                                <BsCheck  className='absolute mx-0.25 mt-1 text-white text-xl '/>
                            <p className='text-darkgreen text-sm'>مایل به ورود دومرحله ای هستم</p>
                        </label>
                    </button>
            </Form>
        </Formik>
    </>
  )
}

export default TowStwpLogin