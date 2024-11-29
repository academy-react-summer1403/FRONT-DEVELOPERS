import React, { useState } from 'react'
import { HiXCircle } from "react-icons/hi";
import * as yup from "yup";
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { NavLink ,useNavigate} from 'react-router-dom';


import http from "../../core/services/interceptor";
import { useDispatch } from 'react-redux';
import { handleToken } from '../../core/redux/slices/QueryState/TokenSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginModal = () => {

    const [Open, setOpen] = useState(false)
   


    const [phoneOrGmail , setPhoneOrGmail] = useState("");
    const [password , setPassword] = useState("");
  
  
    const navigate = useNavigate()
  
  console.log(phoneOrGmail)
  console.log(password)
  
  
  const dispatch = useDispatch()
  
  
    const onSubmit =async (e)=>{
      e.preventDefault();
      const user = {
        
        phoneOrGmail,
        password,
        rememberMe:true
      };
      console.log(user)
  
  
        const data = await http.post("/Sign/Login" , user)
          console.log(data)
  
        const token = data.token
        console.log(token)
    
        
    
        localStorage.setItem("token" , token); 
  
  
            dispatch(handleToken(token))
  
    
  
  
  
  
    if(data.success == true){
  
        toast.success("ورود با موفقیت انجام شد" , {
  theme:"colored",
   className:"custom-toast"
  })
  navigate("/")
    }else{
      toast.error("اطلاعات ورودی نادرست است" , {
        theme:"colored",
         className:"custom-toast"
        })
    }
  
  }
      
  
  
   
      
  
    
  
   
  
  
    
  const [showHidePassword, setShowHidePassword] = useState(false);
  
  
  
    const validation = yup.object().shape({
      email: yup.string().email("InvalidEmail").required("پر کردن این فیلد اجباریست"),
      
      password: yup.string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
  
    return (
        <>
            {/* open modal  */}
            <div onClick={()=>setOpen(true)} className='p-4 rounded-xl bg-primary/60 w-20 cursor-pointer'>
                    open
            </div>
        
            {/* modal:  */}
            
            <div style={{backdropFilter: "box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) "}}
            className={`fixed top-[100px] w-[58%] h-[75%] flex flex-col justify-center gap-14 items-center left-[250px] bg-neutral-600/80 z-[9999] rounded-xl
                ${Open ? "block" : "hidden "} transition-all duration-700 ease-in-out  backdrop-blur-sm
            `}>
                {/* close modal    */}
                <HiXCircle onClick={()=>setOpen(false)} className='absolute right-4 top-4 w-8 h-8 cursor-pointer text-gray-200 opacity-100'/>
                
                <div className="relative w-[300px]  bg-white py-6 rounded-xl">
              {/* text section  */}

              <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center font-semibold">
                ورود به حساب کاربری
              </h1>

              {/* form  */}

              <form
                // initialValues={{ title: "", desc: "" }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}
              >
                <div className='relative flex flex-col gap-4'>
                  <input
                     id="email"
                     name="email"
                     placeholder="ایمیل یا شماره همراه"
                     onChange={(e)=>setPhoneOrGmail(e.target.value)}
                    className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                    text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                   
                    required
                  />
              
                  {/* <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap left-[50px] top-[35px]"
                  /> */}

                  <i onClick={() => setShowHidePassword(!showHidePassword)} className='absolute right-16 bottom-[130px]'>                      
                    {showHidePassword?<IoEyeOutline className='text-green'/>: <FaRegEyeSlash className='text-green'/> }                      
                  </i>
                  <input
                    type={showHidePassword ? 'text' : 'password'}
                    placeholder="رمز عبور"
                    name="password"
                    className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                    text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    // value={item.title}
                    required
                  />
                  {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap left-[50px] top-[93px]"
                  /> */}
                <h1 className='w-[60px] h-[10px]   ml-[55px]  text-[8px] font-semibold text-orange
               text-center whitespace-nowrap'>فراموشی رمز عبور</h1>
                  <button 

                    type="submit"
                    className="w-[90px] h-[30px] rounded-2xl bg-orange  mx-auto text-white text-[10px] font-semibold"
                  >
                    ورود به حساب
                  </button>
          

                  <NavLink to={"/auth"} 
                                    
                    className="w-[90px] h-[30px] rounded-2xl mx-auto text-center pt-1.5 text-green text-[10px] font-semibold"
                  >
                    ثبت نام
                  
                  </NavLink>   
                </div>
              </form>

                </div>
                
                
            </div>
        </>
          )
}

export default LoginModal


