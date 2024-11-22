import http from "./interceptor";

export const loginApi  = async (user) => {
  const data = await http.post("/Sign/Login" , user)
   
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




  