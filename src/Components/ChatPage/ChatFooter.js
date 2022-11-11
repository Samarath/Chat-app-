import { useState } from "react"

const ChatFooter = ({socket}) => {

    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if(message.trim()){
          socket.emit('message', {
            text:message,
            name: localStorage.getItem('user'),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
          })
        }

        setMessage('');
        
    }

    return(
      <div>
        <form className="chat_form" onSubmit={sendMessage}>
            <input 
               type='text'
               placeholder='write message'
               value={message}
               onChange={(e) => setMessage(e.target.value)} 
               className='chat_input'
            />
            <button className="send_btn">SEND</button>
         </form>
       </div>
    )
}

export default ChatFooter;