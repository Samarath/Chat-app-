import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getUsername} from '../../Actions/index';

const Signin = ({socket}) => {

    // const [username, setUsername] = useState('');
    const [checkingUser, setCheckinguser] = useState('');
    const nevigate = useNavigate();
    const dispatch = useDispatch();

    const Username = useSelector((state) => state.Username);

    const submitrequest = (e) => {
        e.preventDefault();
       
        socket.emit('username', Username);
        socket.on('userExits', data => setCheckinguser(data));
            
        if(checkingUser[0] === 404){
            console.log('IDK its taken');
        }else{
            nevigate('/chats');
        }
        console.log(Username)
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
                 value={Username}
                 className='user_input'
                 onChange={(e) => dispatch(getUsername(e.target.value))}
            />
            <button className='submit_btn'>Let's Chat</button>
        </form>
    )
}

export default Signin;