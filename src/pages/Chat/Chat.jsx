
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import "./ChatCss/App.css"
import config from './Config/Config';
import MessageParser from "./MessageParser/MessageParser"
import ActionProvider from "./ActionProvider/ActionProvider"

const Chat = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center" , width:"900px" , height:"500px" , margin:"auto"}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chat