import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '../Avatar/Avatar';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "Aria",
  customComponents:{
    botAvatar : (props)=> <Avatar {...props}/>
  }
};

export default config;