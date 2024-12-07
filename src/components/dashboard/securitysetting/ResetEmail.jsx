import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from "yup";
import { recoveryEmail } from '../../../core/services/DashApi';
import { useGetSecurityInfo } from '../../../core/services/query/queries';

const ResetEmail = () => {

  const GetSecurityInfo = useGetSecurityInfo();

  const [isChecked, setIsChecked] = useState(
    GetSecurityInfo?.data?.twoStepAuth
  );


  const validation = yup.object().shape({
    email: yup
      .string()
      .email('ایمیل وارد شده معتبر نیست')
      .required('این فیلد را پر کنید'),
  });


  const handleSubmit = async (values) => {
    const data = {
      "twoStepAuth": isChecked,
      "recoveryEmail": values.email,
      "baseUrl": "http://localhost:5173/settings/recovery/:id",
    };

    try {
      const response = await recoveryEmail(data);
      console.log("Response from API:", response);
      alert("عملیات با موفقیت انجام شد.برای نشانی ایمیل saramoslemi2009@gmail.com اطلاعات ارسال شد. لطفا ایمیل خود را چک کنید.");
    } catch (error) {
      console.error("Error updating recovery email:", error);
      alert("خطا در به‌روزرسانی ایمیل. دوباره تلاش کنید.");
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            {/* Body */}
            <div className="pb-4 text-right text-xs flex mx-auto text-gray-400 my-8">
              <label className="relative mx-auto">
                <p className="py-2 px-4 text-xs text-gray-400">ایمیل </p>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  style={{ boxShadow: "0px 1px 3px 0px #00000033 inset" }}
                  className="px-4 pt-1 rounded-md bg-gray-50 leading-8 text-teal-800 w-64 placeholder-gray-300"
                />
                {errors.email && (
                  <p className="text-red-300 absolute grid right-0 top-[69px]">
                    {errors.email}
                  </p>
                )}
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white py-2 px-4 rounded-md"
              >
                ارسال
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetEmail;
