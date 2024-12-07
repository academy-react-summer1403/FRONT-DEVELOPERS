import secure from "../../../assets/dashboard/secure.svg";

import ChangPassword from "../../../components/dashboard/securitysetting/ChangPass";
import ResetEmail from "../../../components/dashboard/securitysetting/ResetEmail";
import TowStwpLogin from "../../../components/dashboard/securitysetting/TowStwpLogin";

import { IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const StdSettings = () => {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      className={"relative"}
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className={"relative"}>
          {header}
          <IoIosArrowDown
            className={`absolute left-8 top-2 text-md text-gray-400 transition-transform duration-500 ease-out ${
              isEnter && "rotate-180"
            }`}
          />
        </div>
      )}
    />
  );

  return (
    <div className="py-10 ">
      {/* title  */}
      <div className="relative gap-32 grid grid-cols-2 mb-12 justify-items-center ">
        <hr className="border grid-col-1 border-gray-100 w-full" />
        <h3 className="absolute place-self-center bottom-[-8px] text-lg text-gray-400">
          تنظیمات امنیتی
        </h3>
        <img
          className="absolute right-14 bottom-[-16px] max-sm:right-2 rounded-lg"
          src={secure}
        />
        <hr className="border grid-col-1 border-gray-100 w-full" />
      </div>

      {/* accardeion  */}
      <Accordion className="grid grid-cols-1 mx-auto ">
        {/* password */}

        {/* Title  */}
        <AccordionItem
          className="my-4"
          header={
            <div
              className="group relative grid-col-1 grid grid-cols-1 mx-8 pl-4 
              w-[780px] 
              max-xl:w-[500px]
              max-lg:w-[550px]
              max-md:w-[450px]
            "
            >
              <p className="absolute text-md text-gray-400 right-2">
                تغییر رمز عبور
              </p>
              <hr
                className="border border-gray-100 w-[86%] mt-4 
               max-xl:w-[74%]
               max-md:w-[73%] "
              />
            </div>
          }
        >
          {/* Body  */}
          <div>
            <ChangPassword />
          </div>
        </AccordionItem>

        {/* tow step login */}
        {/* Title  */}
        <AccordionItem
          className="my-4"
          header={
            <div
              className="group relative grid-col-1 grid grid-cols-1 mx-8 pl-4 
            w-[780px] 
            max-xl:w-[500px]
            max-lg:w-[550px]
            max-md:w-[450px]
          "
            >
              <p className="absolute text-md text-gray-400 right-2">
                تایید دو مرحله ای
              </p>
              <hr
                className="border border-gray-100 w-[83%] mt-4 
               max-xl:w-[74%]
               max-md:w-[70%] "
              />
            </div>
          }
        >
          {/* Body  */}
          <div>
            <TowStwpLogin />
          </div>
        </AccordionItem>

        {/* reset email   */}
        {/* Title  */}
        <AccordionItem
          className="my-4"
          header={
            <div
              className="group relative grid-col-1 grid grid-cols-1 mx-8 pl-4 
              w-[780px] 
              max-xl:w-[500px]
              max-lg:w-[550px]
              max-md:w-[450px]
            "
            >
              <p className="absolute text-md text-gray-400 right-2">
                ایمیل بازیابی
              </p>
              <hr
                className="border border-gray-100 w-[88%] mt-4 
               max-xl:w-[75%]
               max-md:w-[78%] "
              />
            </div>
          }
        >
          {/* Body  */}
          <div>
            <ResetEmail />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StdSettings;
