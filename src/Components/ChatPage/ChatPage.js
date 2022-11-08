import ChatStatus from "./ChatStatus";

const ChatPage = ({socket}) => {

    return(
        <div className="chat">
          <ChatStatus />
          <div className="chat_messages">

          </div>
        </div>
    )
}

export default ChatPage;