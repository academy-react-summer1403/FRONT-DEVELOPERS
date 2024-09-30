import { div, image, title } from 'framer-motion/client'
import React from 'react'

const SameCourses = () => {

    const samecourses=[
        {title:"دوره تخصصی ترفند های طراحی فرانت اند",
        image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
        },
        {title:"دوره تخصصی ترفند های طراحی فرانت اند",
            image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
        },
        {title:"دوره تخصصی ترفند های طراحی فرانت اند",
                image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
        },
        {title:"دوره تخصصی ترفند های طراحی فرانت اند",
                    image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
        },
    ]


  return (
    <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white flex flex-wrap  mt-[35px]  rounded-[15px] w-[412px] h-[601px]  p-[23px]">

        <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className=' bg-[#E8E8E8] rounded-t-[10px]  w-[378px] h-[50px] pr-[25px] justify-end flex items-center
         text-right text-[#555555] font-Yekan font-normal text-[20px] '>دوره های مرتبط
            </div>


        {samecourses.map((data,index)=>( 

            <div>
            
            <div
                  key={index}
                  style={{boxShadow:" 0px 1px 1px 0 rgba(0, 0, 0, 0.25)"}}
                  className=" w-[378px] h-[112px]   bg-[#F8F8F8] rounded-[10px] flex   justify-end p-[15px] "
                >
                  <div>
                    <h3 className=" text-[#005653] font-Yekan font-normal text-[17px]  text-right mr-[15px] w-[198px] ">
                      {data.title}
                    </h3>
                    
                  </div>

                  <img style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className='w-[126px] h-[84px] rounded-[10px]' src={data.image} alt="" />
                  
                  </div><p className='  text-[#01B4AF] flex items-center  justify-between font-Yekan font-normal text-[12px] ml-[20px]  mt-[-40px]  text-right  w-[75px] h-[21px] '>
                  <svg width="10" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 8.75L1.125 5L4.875 1.25" stroke="#01B4AF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    مشاهده دوره</p>
                  

                  
                </div>
                
        ))}


        
           

       

        

    </div>
  )
}

export default SameCourses