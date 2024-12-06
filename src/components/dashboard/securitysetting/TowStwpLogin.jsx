import {  useState } from "react";
import { useGetSecurityInfo } from "../../../core/services/query/queries";
import { EditSecurity } from "../../../core/services/level2api";

const TwoStepLogin = () => {
  const GetSecurityInfo = useGetSecurityInfo();

  const [isChecked, setIsChecked] = useState(
    GetSecurityInfo?.data?.twoStepAuth
  );

  const handleupdateEditSecurity = (isChecked1) => {
    const Edit = {
      twoStepAuth: isChecked1,
      recoveryEmail: GetSecurityInfo?.data?.recoveryEmail,
      baseUrl: "https://classapi.sepehracademy.ir/api",
    };
    const updateEditSecurity = EditSecurity(Edit);
  };

  return (
    <>
      {/* Body */}
      <button
        type="submit"
        onClick={() => (
          setIsChecked(!isChecked),
          handleupdateEditSecurity(
            GetSecurityInfo?.data?.twoStepAuth == true ? false : true
          )
        )}
        className="flex mx-auto my-6 px-3 pb-6"
      >
        <label className="relative flex flex-row gap-2 items-center">
          <svg
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            id="check-mark-square"
            data-name="Flat Color"
            xmlns="http://www.w3.org/2000/svg"
            className="shadow-inner border rounded-md"
          >
            <rect
              id="primary"
              x={2}
              y={2}
              width={20}
              height={20}
              rx={2}
              style={{}}
              className={` shadow-inner ${
                isChecked == false
                  ? "fill-primary  dark:fill-orange"
                  : " fill-white "
              }`}
            />
            <path
              id="secondary"
              d="M11,15.5a1,1,0,0,1-.71-.29l-3-3a1,1,0,1,1,1.42-1.42L11,13.09l4.29-4.3a1,1,0,0,1,1.42,1.42l-5,5A1,1,0,0,1,11,15.5Z"
              className={` ${
                isChecked == false ? "fill-white  " : " fill-[#cccccc36] "
              }`}
            />
          </svg>
          <p className="text-darkgreen text-sm">مایل به ورود دومرحله‌ای هستم</p>
        </label>
      </button>
    </>
  );
};

export default TwoStepLogin;
