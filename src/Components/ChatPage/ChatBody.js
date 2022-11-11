const Chatbody = ({getMessage}) => {
    console.log(getMessage)
    return(
        <div className='message_body'>

            <div className='message_status'>
                <h3>{localStorage.getItem('user')}</h3>
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