import { useEffect, useState } from "react";
import Chatbody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatStatus from "./ChatStatus";

const ChatPage = ({socket}) => {

  const [getMessage, setGetMessage] = useState([]);

  useEffect(() => {
    socket.on('sendMessagetoAll', data => setGetMessage([...getMessage, data]));
  }, [socket, getMessage]);

  // console.log(getMessage, 'chat page')

    return(
        <div className="chat">
          <ChatStatus />
          <div className="chat_messages">
            <Chatbody getMessage={getMessage}/>
            <ChatFooter socket={socket}/>
          </div>
        </div>
    )
}

export default ChatPage;