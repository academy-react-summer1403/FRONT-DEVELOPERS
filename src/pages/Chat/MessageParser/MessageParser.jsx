import React from "react";
import { SendChatUserApi } from "../../../core/services/Api3/ChatApi";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
<<<<<<< HEAD
    console.log(message);
    const id = 5

   const Send = SendChatUserApi(message , id)
   console.log(Send)


    actions.afterNameMessage()
=======
    const Send = SendChatUserApi(message, 7);

    actions.afterNameMessage();
>>>>>>> 4cd64b1acf10f5513199bed49a718d25809f25da
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
