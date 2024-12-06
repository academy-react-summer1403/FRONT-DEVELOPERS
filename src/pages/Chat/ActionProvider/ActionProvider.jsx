import React from 'react';
import { useGetTextUser } from '../../../core/services/Query3/ChatQuery';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const afterNameMessage = ()=>{

    const GetText = useGetTextUser()
    console.log(GetText)

    const message = createChatBotMessage(GetText?.data?.dataText?.text)
    updateState(message)
  }


  const updateState = (message)=>{
    setState((prev)=>({
      ...prev,
      messages:[...prev.messages , message]
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            afterNameMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;