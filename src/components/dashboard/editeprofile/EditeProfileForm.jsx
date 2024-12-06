import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import editeprof from "../../../assets/dashboard/edite2.svg";
import save from "../../../assets/dashboard/save.svg";
import { putUserInfo } from "../../../core/services/DashApi";
import { useSelector } from "react-redux";
import { useUserProfile } from "../../../core/services/query/DashboardQuery";
import { toast } from "react-toastify";
import AddProfImage from "./AddProfImage";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Map from "../../../pages/dashboard/content/Map";
import { ImageErrore } from "../../ImageErrore";
import { HiXCircle } from "react-icons/hi";
import { TiCameraOutline } from "react-icons/ti";
import { CiCircleRemove } from "react-icons/ci";

const EditeProfileForm = () => {
  const navigate = useNavigate();
  const userProfile = useUserProfile();
  const location = useSelector((state) => state.LocationSlice.location);

  const [gender, setGender] = useState(userProfile.data?.gender ? true : false);
  const [date, setDate] = useState(
    userProfile.data?.birthDay ? new Date(userProfile.data?.birthDay) : null
  );

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const validation = yup.object({
    FName: yup.string().required("این فیلد اجباری است"),
    LName: yup.string().required("این فیلد اجباری است"),

    NationalCode: yup
      .string()
      .matches(/^\d+$/, "کد ملی باید شامل عدد باشد")
      .length(10, "کد ملی باید  10 رقمی باشد")
      .required("این فیلد اجباری است"),
    HomeAdderess: yup.string().required("این فیلد اجباری است"),
    TelegramLink: yup.string().required("این فیلد اجباری است"),
    LinkdinProfile: yup.string().required("این فیلد اجباری است"),
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("FName", values.FName);
    formData.append("LName", values.LName);
    formData.append("UserAbout", values.UserAbout);
    formData.append("LinkdinProfile", values.LinkdinProfile);
    formData.append("TelegramLink", values.TelegramLink);
    formData.append("ReceiveMessageEvent", values.ReceiveMessageEvent === "on");
    formData.append("HomeAdderess", values.HomeAdderess);
    formData.append("NationalCode", values.NationalCode);
    formData.append("Gender", gender);
    formData.append("BirthDay", date ? date.toString() : "");
    formData.append("Latitude", location?.lat || "13");
    formData.append("Longitude", location?.lng || "12");

    try {
      const response = await putUserInfo(formData);

      toast.success("اطلاعات شما با موفقیت بروزرسانی شد.", {
        theme: "colored",
        className: "custom-toast",
      });
      navigate("/info");
    } catch (error) {
      toast.error("بروزرسانی اطلاعات با خطا مواجه شد. دوباره امتحان کنید.", {
        theme: "colored",
        className: "custom-toast",
      });
      console.error("Error updating user info:", error);
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="py-10 px-8 max-md:px-1 mt-[5px]  ">
      <div className="relative gap-28 grid grid-cols-2 mb-12">
        <div className="border border-gray-100 grid-col-1 w-[85%]"></div>
        <h3 className="absolute bottom-[-8px] left-[38%] text-lg text-gray-400 max-lg:left-[30%] max-md:left-[32%] max-md:text-[16px]">
          ویرایش اطلاعات کاربری
        </h3>
        <img
          className="absolute right-8 bottom-[-16px] rounded-lg max-md:right-4"
          src={editeprof}
        />
        <div className="border border-gray-100 grid-col-1 w-[90%] ml-8"></div>
      </div>

      <Formik
        initialValues={{
          FName: userProfile.data?.fName,
          LName: userProfile.data?.lName,
          NationalCode: userProfile.data?.nationalCode,
          HomeAdderess: userProfile.data?.homeAdderess,
          TelegramLink: userProfile.data?.telegramLink,
          PhoneNumber: userProfile.data?.phoneNumber,
          Email: userProfile.data?.email,
          LinkdinProfile: userProfile.data?.linkdinProfile,
          UserAbout: userProfile.data?.userAbout,
          ReceiveMessageEvent: userProfile.data?.ReceiveMessageEvent
            ? "on"
            : "",
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            {/* top : */}
            <div className="flex grid-cols-3 max-xl:flex max-xl:flex-col-reverse  border-b pb-8 px-2 ">
              {/* aboutme & profile Image */}
              <div className="grid-col-1 w-[100%]">
                <AddProfImage
                  allimages={userProfile?.data?.userImage}
                  currentImage={userProfile.data?.currentPictureAddress}
                />
                <div className="w-full">
                  <label className="relative text-right text-sm grid-col-1 text-gray-400">
                    <p className="py-2 px-4">درباره من</p>
                    <Field
                      as="textarea"
                      name="UserAbout"
                      placeholder="...درباره شما"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="rounded-md bg-gray-50 dark:bg-white text-darkgreen h-[150px] w-full text-right font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                    <ErrorMessage
                      name="UserAbout"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </label>
                </div>
              </div>

              {/* right list :  */}
              <ul className="grid-col-2 w-[100%] pl-4 justify-self-center max-xl:px-32 max-lg:px-20 max-md:px-10">
                <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">نام</p>
                    <Field
                      type="text"
                      id="FName"
                      name="FName"
                      placeholder="...نام خود را وارد کنید"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                    <ErrorMessage
                      name="FName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </label>

                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">نام خانوادگی</p>
                    <Field
                      type="text"
                      id="LName"
                      name="LName"
                      placeholder="...نام خانوادگی خود را وارد کنید"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 w-full pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-md text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                    <ErrorMessage
                      name="LName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </label>
                </li>

                <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">کد ملی</p>
                    <Field
                      type="text"
                      id="NationalCode"
                      name="NationalCode"
                      placeholder="...کدملی خود را وارد کنید"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 w-full pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                    <ErrorMessage
                      name="NationalCode"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </label>

                  <label className="relative text-right text-sm text-gray-400  w-full">
                    <p className="py-2 px-4">جنسیت</p>
                    <Field
                      as="select"
                      name="Gender"
                      onChange={(e) => setGender(e.target.value === "true")}
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 pt-1 h-[31px] w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    >
                      <option value="true">مرد</option>
                      <option value="false">زن</option>
                    </Field>
                  </label>
                </li>

                <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">تاریخ تولد</p>
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      format="YYYY/MM/DD"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                        width: "100%",
                        height: "31px",
                        border: "0px",
                        backgroundColor: "#f9fafb",
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                      }}
                    />
                  </label>

                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">شماره همراه </p>
                    <Field
                      type="text"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      disabled
                      className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                  </label>
                </li>

                <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">ایمیل </p>
                    <Field
                      type="text"
                      id="Email"
                      name="Email"
                      placeholder="ایمیل قابل تغییر نیست!"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      disabled
                      className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                  </label>

                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">تلگرام</p>
                    <Field
                      type="text"
                      id="TelegramLink"
                      name="TelegramLink"
                      placeholder="...لینک تلگرام را وارد کنید"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 w-full pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                  </label>
                </li>

                <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                  <label className="relative text-right text-sm text-gray-400 w-full">
                    <p className="py-2 px-4">لینک لینکدین</p>
                    <Field
                      type="text"
                      id="LinkdinProfile"
                      name="LinkdinProfile"
                      placeholder="...لینک لینکدین را وارد کنید"
                      style={{
                        boxShadow: "0px 1px 3px 0px #00000033 inset",
                      }}
                      className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                    />
                  </label>
                </li>
              </ul>
            </div>
            {/* Map & submit */}
            <div className="">
              <div className=" grid grid-cols-2 max-sm:grid-cols-1">
                {/* OpenModal  */}
                <div>
                  <div
                    onClick={() => setOpen(true)}
                    className="group relative flex mx-auto cursor-pointer rounded-full border w-40 h-40 mt-4 overflow-hidden"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIF6pXlKVoKbos-BYOtXcovKuOUfQUQYSI_w&s"
                      onError={ImageErrore}
                      className="absolute rounded-full w-40 h-40 "
                    />
                    <div className="absolute bottom-0 w-full h-10 bg-gray-600/40 z-40">
                      {" "}
                      <TiCameraOutline className="flex mx-auto text-white w-8 h-8" />
                    </div>
                  </div>
                  {/* Modal  */}
                  <div
                    style={{
                      backdropFilter:
                        "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) ",
                    }}
                    className={`fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-500/80 z-[9999] rounded-xl
                          ${
                            open ? "block" : "hidden "
                          } transition-all duration-700 ease-in-out  backdrop-blur-sm
                      `}
                  >
                    {/* close modal    */}
                    <HiXCircle
                      onClick={() => setOpen(false)}
                      className="absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100"
                    />

                    <Map />
                  </div>
                </div>
                <label className="relative text-right text-sm text-gray-400 h-40 w-full pt-8">
                  <p className="py-2 px-4">آدرس منزل</p>
                  <Field
                    as="textarea"
                    type="text"
                    id="HomeAdderess"
                    name="HomeAdderess"
                    placeholder="...آدرس را وارد کنید"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 w-full h-14 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                  <ErrorMessage
                    name="HomeAdderess"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </label>
              </div>

              <div className="flex mt-5 gap-2 ">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-7 rounded-full text-gray-400 bg-gray-200 hover:text-red-700  hover:bg-red-200 "
                >
                  <CiCircleRemove className="w-4 h-4" />
                  لغو
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 py-2 px-6 rounded-full bg-primary text-darakgreen  hover:bg-primary-dark"
                >
                  <img src={save} alt="Save" />
                  ذخیره تغییرات
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditeProfileForm;
