import { useSelector, useDispatch } from "react-redux";

import { messages } from "../../Actions";

const ChatFooter = ({socket}) => {

    // const [message, setMessage] = useState('');

    const Username = useSelector((state) => state.Username);
    const UserMessages = useSelector((state) => state.Message);

    const dispatch = useDispatch();


    const sendMessage = (e) => {
        e.preventDefault();

        if(UserMessages.trim()){

          socket.emit('message', {
            text:UserMessages,
            name: Username,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
          })
        }

        dispatch(messages(''));
        
    }

    return(
      <div>
        <form className="chat_form" onSubmit={sendMessage}>
            <input 
               type='text'
               placeholder='write message'
               value={UserMessages}
               onChange={(e) => dispatch(messages(e.target.value))} 
               className='chat_input'
            />
            <button className="send_btn">SEND</button>
         </form>
       </div>
    )
}

export default ChatFooter;