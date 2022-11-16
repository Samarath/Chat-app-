import {useSelector} from 'react-redux'

const Chatbody = ({getMessage}) => {

    const Username = useSelector((state) => state.Username);
    // console.log(getMessage, 'inside chat body')

    return(
        <div className='message_body'>

            <div className='message_status'>
                <h3>{Username}</h3>
                <button>Leave chat</button>
            </div>

            <div className='others_message'>
                <p>other's name</p>
                <p>Message sent by others</p>
            </div>

            <div className='your_message'>
                <p>you</p>
                <p>your message</p>
            </div>
        </div>
    )
}

export default Chatbody;