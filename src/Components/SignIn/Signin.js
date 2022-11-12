import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Signin = ({socket}) => {

    const [username, setUsername] = useState('');
    const [checkingUser, setCheckinguser] = useState('');
    const nevigate = useNavigate();

    const submitrequest = (e) => {
        e.preventDefault();
       
        socket.emit('username', username);
        socket.on('userExits', data => setCheckinguser(data));
            
        if(checkingUser[0] === 404){
            console.log('IDK its taken');
        }else{
            nevigate('/chats');
        }
        // localStorage.setItem('user', username);
    }

    return(
        <form className='signin' onSubmit={submitrequest}>
            <h2 className='signin_header'>SignIn to start the Chat</h2>
            <label htmlFor='username'>User Name</label>
            <input 
                 type='text'
                 name='username'
                 id='username'
                 minLength={4}
                 value={username}
                 className='user_input'
                 onChange={(e) => setUsername(e.target.value)}
            />
            <button className='submit_btn'>Let's Chat</button>
        </form>
    )
}

export default Signin;