import React from 'react'
import Img1 from "../../assets/landing/items1.png";
import Img2 from "../../assets/landing/items2.png";
import Img3 from "../../assets/landing/items3.png";
import Img4 from "../../assets/landing/items4.png";
import Img5 from "../../assets/landing/items5.png";
import Img6 from "../../assets/landing/items6.png";
import { IoIosArrowBack } from "react-icons/io";


const News = () => {
  return (
    <div className='max-md:px-5 max-sm:px-1 flex items-center flex-col mt-[170px] h-[700px] max-md:h-[870px]'>

    {/* text section  */}
    <h1 className=' head1'>اخبار و مقالات
          <div className='head2'></div> </h1>
          <h3 className=' head3'>خـــودت رو با خـــبر کن !</h3>

    {/* body section  */}
        <div className='flex   h-[474px] max-md:h-[870px] w-[1068px] max-md:w-full  justify-between max-xl:justify-center mt-10 '>

          <div  className=' w-[522px] max-xl:w-[500px] max-md:w-full relative h-full flex justify-between max-xl:justify-center flex-wrap gap-5 max-xl:gap-3'>

         

            <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",
              background:"url(https://s3-alpha-sig.figma.com/img/9c30/dd1c/f8af56fc7574b0826c5cc94ef1f6daf9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlbfBrFUFbneiKq9-kkSkr-~pORhXoGRa3tVnfl5nfurLlir-qKH91LGJ4f8zfoImp8p~EbD1AkBLiXXu4-7Jl25bbYQlFdr~P46WuBEILli6x0o7gbmDDk12xmKTJIDxBM8h3KJAwZ~tUvd9RJNA8Y23X7JFbnKVVG0NMMG1qAEibybzoFS5NjbJDMzWIWnfWUbe~qlW4FM47QMn3bA9XxjxbwUh5aSUWOLL5dgNhAuNfWXwfRn0~XjMmRA7TqU64Fp2oodnjGfmporR9Cm06Mz-9xxDo8hHaabtt65g7JtAzY4~GU~Pyk7Gxcz0AmbfbQEfkArsECluIqxOohu-A__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"
            }}
             className=' rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:absolute max-md:left-0 max-md:top-0 max-md:w-[280px] '  >
              <div className=' border max-xl:w-[228px] max-xl:h-[228px]  border-[#b8b7b7] transform transition-all hover:backdrop-blur-sm rounded-[15px] max-md:w-[280px] w-[250px] h-[250px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                 <h3 className='mt-[85%] mr-[6%] max-md:mt-[60%] max-xl:text-[13.5px] transform transition-all  group-hover:opacity-0 text-[14px] text-right font-semibold text-[#005B58] font-Yekan'>دنیای آنلاین؛ راهی برای افزایش فروش</h3></div>
               
                 <h3 className=' relative opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%] max-md:mt-[-45%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

           </div>

           <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/fb1f/2e12/fa271ebbdbed9dd068b976a36a369454?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mr4fc25N06tGed0ePlCi4mq6X2v5m31vCN4YOPgi8YhgrH-lfChmrWvQPFEJG2LbWaG11ZpdBKFk3nD69RI9RLZBq45y1HP5GGg7xe8jfcq-U1P0T5q5W8KpBJDWkHsyr1q3K-JSAs8GAIbEvOG5OmVzPxIDODzU7hK23kyjKY4JLE~htNmX2aZZTAjDf7s4XzIkkvgV7Xpn6-M1YfV8ffW3upRy1oK0b6qqAmAhbpwsKsjPbAsMUvsVtFpAKLKaPvdYb160Rp7rNRXowrKU4aDZiorAypX7dbL6-vcbtrLT1R73Lfr5SDo8mIXV2wzJkBWqPrfzJ-H6PtAmWyCUxg__)",
              backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
            }}
             className='  max-lg:absolute max-lg:bottom-0 max-md:left-0 max-md:bottom-0 rounded-[15px] max-md:top-60 max-md:w-[280px]   w-[250px] max-xl:w-[228px] max-xl:h-[228px] h-[250px] group'  >
              <div className=' border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  max-md:w-[280px]  rounded-[15px]  w-[250px] h-[250px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
              <h3 className='mt-[80%] max-md:mt-[60%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>بازاریابی حسی راهی ساده و کم هزینه 
              برای افزایش فروش</h3>
              <h3 className=' max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

              </div>
           </div>


           <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/e327/308d/e71a796e2829aac9eb9d6e5a7221b150?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ng894kpvEHWdY5OomSjDU06GtY3LN1zIxmkUTERYK3pB7UFMrP3KuMuV2A2pZxaq~7pO77nVzTSfhyLAr3IVw2T16SHTvaznCcMOT08f6bcGbNfFj5YdlYOXR-Xx-MDxgqMEVcCAEgDpjvPCJ08HbAMs50EFkDdiqXW~G9jk7mHD6Bg5N5fE5jepmtsqrxsSYg65K9Sgp2yQiNJXu4-wFyafQmtAs-mRJ1B98vswiCI0GPZ2Cnqhq5j3bIIOnxL82o25LVVTVZVKQUdPn3PF3Xvy8m04kKBXKs5XGf6TlrbZcedOQZpOQ71FcRJU0EDqGTW9xImghuYRJofHzu33~Q__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"0%"
            }}
             className='   max-lg:absolute max-lg:bottom-0  max-md:-bottom-0  max-lg:left-96  max-md:left-0   max-md:w-[280px] rounded-[15px] max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px] w-full h-[200px] group'  >
              <div className=' border border-[#b8b7b7] max-lg:w-[228px]  max-lg:h-[228px]  max-md:w-[280px] transform transition-all hover:backdrop-blur-sm rounded-[15px]  w-full h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
              <h3 className='mt-[30%] mr-[6%] max-md:mt-[60%]  max-xl:mt-[35%] max-lg:mt-[78%] text-[15px] transform transition-all  text-right group-hover:opacity-0 font-semibold text-[#005B58] font-Yekan leading-[21px]'>نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود</h3>
              <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

              </div>
           </div>




    
            
          </div>

          <div className=' w-[522px] max-xl:w-[500px]  relative max-xl:gap-3 max-xl:justify-center h-full flex justify-between flex-wrap gap-5'>

          <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5e73/b991/2271dcd8eb60c42cda58f1642e6503a8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLajWHkUC53mchNyiA4D-NY5WtGmI5OXR4Q8XjgUFuUL7TlFTpD1OkGXTY4toAQq9ZH06m6Vs~8e7IiQWRWla6VXA6HGbP~GHmJivXsQE-O0jHRqIiB4fTGyQFsxwPANqD1t9Mfjwf1WWgGJy6zsjE0f00w0EdRlNhHg2S9SbZubD7qobU6I8o36iBGYkV2ExZuhE7crByk1kxhkUFuciaciOUKmO~n2ddAkLEEaWITJB3FMkBT3XvCTejcsk2Ak1xTg-biUghKVuFl5SIbGDbHKjP9zwkWTpfj2yPfInm6NPQV-qmWsG5MSx1GbN7XHmrEWLnWYu8Eo8hdfl2kx6A__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
            }}
             className='   max-lg:absolute max-lg:left-32 max-md:left-0  max-md:w-[280px] max-lg:bottom-0  rounded-[15px]  max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px]  w-full h-[200px] group '   >
              <div className=' border max-lg:w-[228px]  max-lg:h-[228px] max-md:w-[280px] border-[#b8b7b7] rounded-[15px] transform transition-all hover:backdrop-blur-sm w-full h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
               
                <h3 className='max-md:mt-[60%]  mt-[30%] max-xl:mt-[35%] max-lg:mt-[78%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود</h3>
                <h3 className='max-md:mt-[-40%]  opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
           
              </div>

           
           </div>

           <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5d93/e872/7f023368593e6eaee700ca9a187b7367?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hCzROFuwjB~tki57nORXSyiU4hkXGLNgzUTkigcU9QuMltREBVBEgc17VO5UpO1oo4qWhwsoDIloN0~QYh7AGOyvSvo~VXTFbAKfCR4vdIFPac9eaPKfSuszPY1R4rlOHdBll6TC2h-ynzbqvcN0VN2W1~63aHAJgvEZxhndTXMt5q2UWmyMlvr8GxvJhST9Gd4QMANVE0D3VKR~EXLs-CnEdjDyFeVzuxQ2JT204BLOCdh--uL6gFkX2zn12WJ~aYHrh-i0rifQ4mV8Tj4KD5Nyb5sJFcRpn8XLGdjgV~yXP1UJheMSGvWG2q79sZxJvn9I-Ir0RHPT~AM0qZVvsA__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"
            }}
             className='  max-lg:absolute max-lg:-left-[115px]  max-lg:top-0  max-md:left-0  rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px]'  >
              <div className=' border border-[#d8d6d6] max-xl:w-[228px] max-xl:h-[228px]  rounded-[15px]  transform transition-all hover:backdrop-blur-sm  w-[250px] h-[250px] max-md:w-[280px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}><h3 className='mt-[80%] max-md:mt-[60%] transform transition-all  group-hover:opacity-0 mr-[7%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>ورود به دنیای آنلاین؛ راهی مطمئن برای
              افزایش فروش</h3>
              <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
              </div>
           </div>

           <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5259/814f/8988440e86e65d5d8ca554513f16ef72?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRVfWfEiqF7KdgqviVaAu7zvKRb~DsKxhMAcNJ4LlAUvDlapp~ezIQL9EhRIGutZUIRh-uRP7Ojh54ev4QmlOnOOr48vijwx9QUt7g5nJBUjAeY~vQk3fGcayqtDgj3DSKlC0xmMWgak44zZcTMjchAIafaE~iXcyW4~G7SHXlXT3Ykl5qk1vU5O99MvJWS6G0LvOlPnlYL8RufLDQ5-nBBO~~ew-2kBJt5n7e9DoXugHvMN6CpJ55Nr-zASYgtJ9Q0ZyKu1A3nGOPTIdvEZZpKshLuz4H7XeGm~5v~TThh3YDFn3oOinnDpiNC7DRuJh209WtGgNDHOpCaEgsjOkg__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
            }}
             className='max-lg:right-36  max-lg:absolute  rounded-[15px] max-md:left-0 max-md:top-60 max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px]'  >
              <div className=' border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  rounded-[15px] max-md:w-[280px]  w-[250px] h-[250px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                
              <h3 className= 'transform max-md:mt-[65%] transition-al max-xl:text-[13.5px]  group-hover:opacity-0 mt-[85%] mr-[8%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan'>جذب مشتری با تبلیغات دهان به دهان</h3>
              <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all   group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
              </div>
           </div>








          </div>

           
            
            
            
        </div>   

        <div className='flex items-center gap-2    mx-auto mt-5 '>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

        <h3 className=' text-right font-normal font-Yekan text-[18px] text-[#AAAAAA]'> مشاهده بیشتر</h3>
     

       
        </div>

        
    </div>
  )
}

export default News
