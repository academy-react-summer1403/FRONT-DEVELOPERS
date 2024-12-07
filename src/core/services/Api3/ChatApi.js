import http3 from "../interceptor/indexLevel3"


export const SendChatUserApi  = async (message , id) => {
    const data = await http3.post(`help/TextHelpCreate/${id}/${message}`)
     
    console.log(data);
    return data;
  };

  export const GetChatUserApi  = async () => {
    const data = await http3.get("help/HelpById/")
     
    console.log(data);
    return data;
  };