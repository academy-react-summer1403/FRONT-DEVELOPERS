import React from "react";
import DonutBarChart from "../../../pages/dashboard/content/DonutBarChart";

const FirstPart = ({ getReservInfo, getMyCourses }) => {

  return (
    <>
      <div
        className="relative my-12 flex flex-row-reverse gap-6 px-2 
         max-xl:flex-col-reverse   max-xl:items-center  max-xl:gap-12
      "
      >
        <div className="flex flex-row-reverse gap-6 max-sm:gap-1">
          <div
            style={{ boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.1)" }}
            className="relative flex w-[180px] bg-gray-100 dark:bg-gray-400/40   text-right px-6 py-2 rounded-lg mt-12"
          >
            <svg
              className="absolute bottom-10"
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28.5" cy="28.5" r="28.5" className="fill-primary" />
              <path
                d="M16.0996 24.9123C15.6412 28.4216 15.3681 31.9526 15.2813 35.4906C20.0793 37.4948 24.6733 39.9561 28.9996 42.8406C33.3265 39.956 37.9211 37.4947 42.7196 35.4906C42.6328 31.9526 42.3597 28.4216 41.9013 24.9123M41.9013 24.9123C43.3596 24.4223 44.838 23.9689 46.3313 23.5556C40.8923 19.7427 35.0863 16.4821 28.9996 13.8223C22.913 16.4826 17.107 19.7438 11.668 23.5573C13.1568 23.9683 14.634 24.4201 16.098 24.9123C20.5457 26.4076 24.8611 28.2707 28.9996 30.4823C33.1375 28.2707 37.4541 26.4076 41.9013 24.9123ZM20.2496 33.0006C20.5812 33.0006 20.8991 32.8689 21.1335 32.6345C21.3679 32.4001 21.4996 32.0821 21.4996 31.7506C21.4996 31.4191 21.3679 31.1011 21.1335 30.8667C20.8991 30.6323 20.5812 30.5006 20.2496 30.5006C19.9181 30.5006 19.6002 30.6323 19.3658 30.8667C19.1313 31.1011 18.9996 31.4191 18.9996 31.7506C18.9996 32.0821 19.1313 32.4001 19.3658 32.6345C19.6002 32.8689 19.9181 33.0006 20.2496 33.0006ZM20.2496 33.0006V26.8756C23.0775 25.1178 25.9985 23.5144 28.9996 22.0723M17.3213 41.3223C18.2513 40.3946 18.9887 39.2923 19.4912 38.0787C19.9938 36.8651 20.2515 35.5641 20.2496 34.2506V31.7506"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="ml-8">
              <p className="text-xl text-primary font-semibold">
                {getMyCourses.data?.totalCount == 0
                  ? "0"
                  : getMyCourses.data?.totalCount}
                دوره
              </p>
              <p className="text-lg text-gray-400 ">شرکت کردید</p>
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.1)" }}
            className="relative flex w-[180px] bg-gray-100 dark:bg-gray-400/40  text-right px-6 py-2 rounded-lg mt-12"
          >
            <svg
              className="absolute bottom-10"
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28.5" cy="28.5" r="28.5" className="fill-secondary" />
              <path
                d="M15.0938 17.125H16.9995C17.7007 17.125 18.3126 17.5966 18.4941 18.2731L19.0207 20.249M19.0207 20.249C26.6804 20.0343 34.3327 20.8858 41.7578 22.779C40.6248 26.1532 39.2786 29.4313 37.7373 32.5938H22.3125M19.0207 20.249L22.3125 32.5938M22.3125 32.5938C21.2185 32.5938 20.1693 33.0283 19.3957 33.8019C18.6221 34.5755 18.1875 35.6247 18.1875 36.7188H39.8438M20.25 40.8438C20.25 41.1173 20.1414 41.3796 19.948 41.573C19.7546 41.7664 19.4923 41.875 19.2188 41.875C18.9452 41.875 18.6829 41.7664 18.4895 41.573C18.2961 41.3796 18.1875 41.1173 18.1875 40.8438C18.1875 40.5702 18.2961 40.3079 18.4895 40.1145C18.6829 39.9211 18.9452 39.8125 19.2188 39.8125C19.4923 39.8125 19.7546 39.9211 19.948 40.1145C20.1414 40.3079 20.25 40.5702 20.25 40.8438ZM37.7812 40.8438C37.7812 41.1173 37.6726 41.3796 37.4792 41.573C37.2858 41.7664 37.0235 41.875 36.75 41.875C36.4765 41.875 36.2142 41.7664 36.0208 41.573C35.8274 41.3796 35.7188 41.1173 35.7188 40.8438C35.7188 40.5702 35.8274 40.3079 36.0208 40.1145C36.2142 39.9211 36.4765 39.8125 36.75 39.8125C37.0235 39.8125 37.2858 39.9211 37.4792 40.1145C37.6726 40.3079 37.7812 40.5702 37.7812 40.8438Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="ml-14">
              <p className="text-xl text-secondary font-semibold">
                {getReservInfo.data?.length}دوره{" "}
              </p>
              <p className="text-lg text-gray-400">رزرو کردید</p>
            </div>
          </div>
        </div>

        <div
          className="flex gap-2 pl-0 xl:absolute xl:left-2 relative
        max-lg:mx-auto 
        "
        >
          <DonutBarChart />

          <p className="w-[150px] font-sm text-[14px] text-center text-gray-400 mt-8 ">
            برای شرکت در دوره ها باید حداحقل 80% پروفایل خود را کامل کنید
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
