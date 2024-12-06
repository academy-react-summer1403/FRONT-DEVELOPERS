import React from "react";
import { SendChatUserApi } from "../../../core/services/Api3/ChatApi";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const Send = SendChatUserApi(message, 7);

    actions.afterNameMessage();
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
