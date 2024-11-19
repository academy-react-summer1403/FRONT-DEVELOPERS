import React, { useState } from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';


const API_KEY = "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";

const ChatApp = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setTyping(true);

    await ProcessMessageToChatGPT(newMessages);
  };

  async function ProcessMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain like I am a 7 year old just learning about computers."
    };

    const apirequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apirequestBody)
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          },
          
        ]);
        console.log("messages",messages)
        setTyping(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTyping(false);
      });
  }

  return (
    <div>
      <div className='relative h-[545px] w-[100%] border-t'>
        <MainContainer responsive style={{ border: "0px" }}>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing..." /> : null}
            >
              {messages.map((m, i) => (
                <Message key={i} model={m} />
              ))}
            </MessageList>

            <MessageInput placeholder='Type Message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatApp;
