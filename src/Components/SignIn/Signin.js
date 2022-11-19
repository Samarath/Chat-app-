import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getUsername, userexits} from '../../Actions/index';
import { useEffect } from 'react';

const Signin = ({socket}) => {

    useEffect(() => {
        socket.on('userExits', data => dispatch(userexits(data)))
    }, [socket])

    const nevigate = useNavigate();
    const dispatch = useDispatch();

    const Username = useSelector((state) => state.Username);
    const Checkuser = useSelector((state) => state.Checkuserexits);

    const submitrequest = (e) => {
        e.preventDefault();
       
        socket.emit('username', Username.toLowerCase());// sending the username to the server
            
        // if(Checkuser[0] === 404 && Checkuser[1] === Username){
  
        //     alert('you was her already');
        // }else if(Checkuser[0] !== 404){
        //     nevigate('/chats');
        // }
            nevigate('/chats');

        // console.log(Checkuser);    
        
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