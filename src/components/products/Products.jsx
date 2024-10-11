import React from "react";
import ChatImg from "../../assets/landing/Chat.png";
import CerImg from "../../assets/landing/Certificate.png";
import JobImg from "../../assets/landing/New Job.png";

import BackProducts from "../../assets/landing/backproducts.png";

import BP1Img from "../../assets/landing/BProduct1.png";
import BP2Img from "../../assets/landing/BProduct2.png";
import BP3Img from "../../assets/landing/BProduct3.png";
import BP4Img from "../../assets/landing/BProduct4.png";

const Products = () => {
  return (
    <div>
      <div className="container relative mt-20 ">
        <img
          src={BackProducts}
          alt=""
          className="absolute left-[200px] top-[20px] rotate-180 w-[1000px] h-[600px] mx-auto opacity-[30%]"
        />

        {/* header section  */}
        <h1 className=" head1">
          خدمات ما
          <div className="head2"></div>{" "}
        </h1>
        <h3 className="head3">
          مجموعه ای از تمام آنچه شما نیاز دارید
        </h3>
        {/* body section  */}
        <div
          className="flex gap-20 max-xl:gap-10 items-center justify-center max-lg:gap-0 
           
        "
        >
          <div
            className="  group
    rounded-2xl 
     relative  duration-hight 
     w-[210px] h-[170px] mb-[50px] max-lg:left-48
                        "
          >
            <svg
              width="210"
              height="170"
              className=" fill-[#DDCAAD] dark:fill-[#f1f0ed]"
              viewBox="0 0 211 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_109_528)">
                <path
                  d="M0 15.1985C0 6.91422 6.71573 0.198486 15 0.198486H51.0909C58.5121 0.198486 64.8315 5.70889 67.9544 12.4409C72.8742 23.0464 83.4832 36.6985 105.5 36.6985C127.796 36.6985 138.777 22.6981 143.906 12.0391C147.058 5.48827 153.295 0.198486 160.565 0.198486H196C204.284 0.198486 211 6.91422 211 15.1985V155.198C211 163.483 204.284 170.198 196 170.198H105.5H15C6.71573 170.198 0 163.483 0 155.198V15.1985Z"
                  fill=""
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_109_528"
                  x="-5"
                  y="-4.80151"
                  width="221"
                  height="180"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_109_528"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_109_528"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* details section  */}
            <div className="p-4 text-center">
              {/* star rating  */}

              <h1 className="productstitle text-[#CC7A00] dark:text-[#4b3515] mt-[-140px] ">
                مشاوره
              </h1>
              <p
                className=" faketext group-hover:text-[#CC7A00] dark:group-hover:text-[#4b3515]
                                "
              >
                متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.
              </p>

              <button
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
                className=" bg-[#E48900] dark:bg-[#4b3515]    proimg
"
              >
                <img src={ChatImg} alt="" className="mx-auto" />
              </button>
            </div>
          </div>

          <div
            className="
                             group
    rounded-2xl 
     relative  duration-hight 
     w-[210px] h-[170px] mt-[300px]  max-lg:-left-5  max-lg:top-20
                        "
          >
            <svg
              width="210"
              height="170"
              viewBox="0 0 211 171"
              className="fill-[#EEEBD0] dark:fill-[#dde7e7]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bi_109_521)">
                <path
                  d="M0 15.1985C0 6.91422 6.71573 0.198486 15 0.198486H51.0909C58.5121 0.198486 64.8315 5.70889 67.9544 12.4409C72.8742 23.0464 83.4832 36.6985 105.5 36.6985C127.796 36.6985 138.777 22.6981 143.906 12.0391C147.058 5.48827 153.295 0.198486 160.565 0.198486H196C204.284 0.198486 211 6.91422 211 15.1985V155.198C211 163.483 204.284 170.198 196 170.198H105.5H15C6.71573 170.198 0 163.483 0 155.198V15.1985Z"
                  fill=""
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bi_109_521"
                  x="-4"
                  y="-3.80151"
                  width="219"
                  height="178"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_109_521"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_109_521"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_109_521"
                  />
                </filter>
              </defs>
            </svg>

            {/* image section  */}
            <div className="h-[100px]"></div>
            {/* details section  */}
            <div className="p-4 text-center">
              {/* star rating  */}

              <h1 className="productstitle text-[#AE9C00] dark:text-[#504a15]  mt-[-235px]">
                مدرک معتبر
              </h1>
              <p
                className="faketext group-hover:text-[#AE9C00] dark:group-hover:text-[#504a15]
                                "
              >
                متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.
              </p>

              <button
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
                className="proimg bg-[#CEB901] dark:bg-[#504a15]

                                "
              >
                <img src={JobImg} alt="" className="mx-auto" />
              </button>
            </div>
          </div>

          <div
            className="
                            group
    rounded-2xl 
     relative  duration-hight 
     w-[210px] h-[170px]  max-lg:-right-10  max-lg:-top-6
                        "
          >
            <svg
              width="210"
              height="170"
              className=" fill-[#C1E3F6] dark:fill-[#e7f0f5]"
              viewBox="0 0 211 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bi_109_514)">
                <path
                  d="M0 15.1985C0 6.91422 6.71573 0.198486 15 0.198486H51.0909C58.5121 0.198486 64.8315 5.70889 67.9544 12.4409C72.8742 23.0464 83.4832 36.6985 105.5 36.6985C127.796 36.6985 138.777 22.6981 143.906 12.0391C147.058 5.48827 153.295 0.198486 160.565 0.198486H196C204.284 0.198486 211 6.91422 211 15.1985V155.198C211 163.483 204.284 170.198 196 170.198H105.5H15C6.71573 170.198 0 163.483 0 155.198V15.1985Z"
                  
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bi_109_514"
                  x="-4"
                  y="-3.80151"
                  width="219"
                  height="178"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_109_514"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_109_514"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_109_514"
                  />
                </filter>
              </defs>
            </svg>

            {/* image section  */}
            <div className="h-[100px]"></div>
            {/* details section  */}
            <div className="p-4 text-center">
              {/* star rating  */}

              <h1 className="productstitle text-[#047DC1]  dark:text-[#214d66]  mt-[-240px] leading-6">
                فرصت های شغلی
              </h1>
              <p
                className="faketext group-hover:text-[#047DC1] dark:group-hover:text-[#214d66]
                                "
              >
                متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.
              </p>

              <button
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
                className=" proimg bg-[#0184CE] dark:bg-[#214d66]

                                "
              >
                <img src={CerImg} alt="" className="mx-auto" />
              </button>
            </div>
          </div>

          <div
            className=" group
    rounded-2xl 
     relative  duration-hight 
     w-[210px] h-[170px] mt-[300px]  max-lg:-left-[170px]    max-lg:top-20
                        "
          >
            <svg
              width="210"
              height="170"
              className=" fill-[#CBEEED] dark:fill-[#daeeed]"
              viewBox="0 0 211 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bi_109_507)">
                <path
                  d="M0 15.1985C0 6.91422 6.71573 0.198486 15 0.198486H51.0909C58.5121 0.198486 64.8315 5.70889 67.9544 12.4409C72.8742 23.0464 83.4832 36.6985 105.5 36.6985C127.796 36.6985 138.777 22.6981 143.906 12.0391C147.058 5.48827 153.295 0.198486 160.565 0.198486H196C204.284 0.198486 211 6.91422 211 15.1985V155.198C211 163.483 204.284 170.198 196 170.198H105.5H15C6.71573 170.198 0 163.483 0 155.198V15.1985Z"
                  fill=""
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bi_109_507"
                  x="-4"
                  y="-3.80151"
                  width="219"
                  height="178"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_109_507"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_109_507"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_109_507"
                  />
                </filter>
              </defs>
            </svg>

            {/* image section  */}
            <div className="h-[100px]"></div>
            {/* details section  */}
            <div className="p-4 text-center">
              {/* star rating  */}

              <h1 className="productstitle text-[#008A86] dark:text-[#123d3c] mt-[-240px]">
                مشاوره
              </h1>
              <p
                className="faketext group-hover:text-[#008A86] dark:group-hover:text-[#123d3c]
                                "
              >
                متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.
              </p>

              <button
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
                className=" proimg bg-[#01CEC9] dark:bg-[#123d3c]
                                "
              >
                <img src={ChatImg} alt="" className="mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
