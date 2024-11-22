import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CiCircleRemove } from "react-icons/ci";
import editeprof from "../../../assets/dashboard/edite2.svg";
import save from "../../../assets/dashboard/save.svg";
import { putUserInfo } from "../../../core/services/DashApi";
import { useSelector } from "react-redux";
import { useUserProfile } from "../../../core/services/query/DashboardQuery";
import { toast } from "react-toastify";
import AddProfImage from "./AddProfImage";

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

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // اضافه کردن اطلاعات به فرمData
    formData.append("FName", formData.get("FName"));
    formData.append("LName", formData.get("LName"));
    formData.append("UserAbout", formData.get("UserAbout"));
    formData.append("LinkdinProfile", formData.get("LinkdinProfile"));
    formData.append("TelegramLink", formData.get("TelegramLink"));
    formData.append("ReceiveMessageEvent", formData.get("ReceiveMessageEvent") === "on");
    formData.append("HomeAdderess", formData.get("HomeAdderess"));
    formData.append("NationalCode", formData.get("NationalCode"));
    formData.append("Gender", gender);
    formData.append("BirthDay", date ? date.toString() : "");
    formData.append("Latitude", location?.lat || "13");
    formData.append("Longitude", location?.lng || "12");

    try {
      const response = await putUserInfo(formData);
      console.log("Response:", response);

      toast.success("اطلاعات شما با موفقیت بروزرسانی شد.", {
        theme: "colored",
      });
      navigate("/info");
    } catch (error) {
      toast.error("بروزرسانی اطلاعات با خطا مواجه شد. دوباره امتحان کنید.", {
        theme: "colored",
      });
      console.error("Error updating user info:", error);
    }
  };

  return (
    <div className="py-10 px-8 max-md:px-1 mt-[5px]">
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

      <form onSubmit={onSubmit}>
        <div>
          <div className="flex grid-cols-3 max-xl:flex max-xl:flex-col-reverse  border-b pb-8 px-2 ">
            <div className="grid-col-1 w-[100%]">
              <AddProfImage images={userProfile.data?.userImage	} />
              <div className="w-full">
                <label className="relative text-right text-sm grid-col-1 text-gray-400">
                  <p className="py-2 px-4">درباره من</p>
                  <textarea
                    type="text"
                    defaultValue={userProfile.data?.userAbout}
                    id="UserAbout"
                    name="UserAbout"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="rounded-md bg-gray-50 dark:bg-white text-darkgreen h-[150px] w-full text-right font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>
              </div>
            </div>
            <ul className="grid-col-2 w-[100%] pl-4 justify-self-center max-xl:px-32 max-lg:px-20 max-md:px-10">
              <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">نام</p>
                  <input
                    type="text"
                    id="FName"
                    name="FName"
                    defaultValue={userProfile.data?.fName}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>

                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">نام خانوادگی</p>
                  <input
                    type="text"
                    id="LName"
                    name="LName"
                    defaultValue={userProfile.data?.lName}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-md text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>
              </li>

              <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">کد ملی</p>
                  <input
                    type="text"
                    id="NationalCode"
                    name="NationalCode"
                    defaultValue={userProfile.data?.nationalCode}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>

                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">جنسیت</p>
                  <select
                    id="Gender"
                    name="Gender"
                    value={gender ? "true" : "false"}
                    onChange={(e) => setGender(e.target.value === "true")}
                    className="px-4 py-2 rounded-md bg-gray-50 dark:bg-white text-darkgreen placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  >
                    <option value="true">مرد</option>
                    <option value="false">زن</option>
                  </select>
                </label>
              </li>

              <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">آدرس منزل</p>
                  <input
                    type="text"
                    id="HomeAdderess"
                    name="HomeAdderess"
                    defaultValue={userProfile.data?.homeAdderess}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>

                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">لینک تلگرام</p>
                  <input
                    type="text"
                    id="TelegramLink"
                    name="TelegramLink"
                    defaultValue={userProfile.data?.telegramLink}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>
              </li>

              <li className="flex flex-row-reverse max-sm:flex-col gap-4">
                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">لینک لینکدین</p>
                  <input
                    type="text"
                    id="LinkdinProfile"
                    name="LinkdinProfile"
                    defaultValue={userProfile.data?.linkdinProfile}
                    placeholder="این فیلد اجباری است"
                    style={{
                      boxShadow: "0px 1px 3px 0px #00000033 inset",
                    }}
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>

                <label className="relative text-right text-sm text-gray-400">
                  <p className="py-2 px-4">تاریخ تولد</p>
                  <DatePicker
                    value={date}
                    onChange={handleDateChange}
                  
                    format="YYYY/MM/DD"
                    className="px-4 pt-1 rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
                  />
                </label>
              </li>

             
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="flex items-center gap-2 py-2 px-6 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark"
            >
              <img src={save} alt="Save" />
              ذخیره اطلاعات
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditeProfileForm;