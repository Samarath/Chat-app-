import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getUsername, userexits} from '../../Actions/index';

const Signin = ({socket}) => {

    // const [username, setUsername] = useState('');
    const nevigate = useNavigate();
    const dispatch = useDispatch();

    const Username = useSelector((state) => state.Username);
    const Checkuserexits = useSelector((state) => state.Checkuserexits);

    const submitrequest = (e) => {
        e.preventDefault();
       
        socket.emit('username', Username.toLowerCase());// sending the username to the server

        socket.on('userExits', data => dispatch(userexits(data)));
            
        if(Checkuserexits[0] !== 404){
            nevigate('/chats');
        }else if(Checkuserexits[0] === 404){
            alert('user already here')
           console.log('user already here'); 
        }
        
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