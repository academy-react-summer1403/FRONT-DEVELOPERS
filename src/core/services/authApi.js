import instance from "./interceptor";
import http from "./interceptor";

export const loginApi  = async (user) => {
  const data = await http.post("/Sign/Login" , user)
   
  console.log(data);
  return data;
};

export const towStepLoginApi  = async (dataa ,verifyCode) => {
  const data = await instance.post(`/Sign/LoginTwoStep?VrifyCode=${verifyCode}` , dataa )   
  console.log(data);
  return data;
};


  export const postNumber  = async (number) => {
    const data = await http.post("/Sign/SendVerifyMessage" , number)
     
    console.log(data);
    return data;
  };


  export const postCode  = async (code) => {
    const data = await http.post("/Sign/VerifyMessage" , code)
     
    console.log(data);
    return data;
  };


  export const postRegister  = async (user) => {
    const data = await http.post("/Sign/Register" , user)
     
    console.log(data);
    return data;
  };

  // forget password

  export const postForgetPassword  = async (params) => {
    const data = await http.post("/Sign/ForgetPassword" , params)
     
    console.log(data);
    return data;
  };

  export const getConfigValue  = async (params) => {
    const { ConfigValue } = params;
    const data = await http.get(`/Sign/Reset/${ConfigValue}`, { params }); 
     
    console.log(data);
    return data;
  };

  export const postNewForgetPassword  = async (params) => {
    const data = await http.post("/Sign/Reset" , params)
    console.log(data);
    return data;
  };
