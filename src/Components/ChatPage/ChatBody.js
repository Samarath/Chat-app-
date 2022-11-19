import {useSelector} from 'react-redux'

const Chatbody = ({getMessage}) => {

    const Username = useSelector((state) => state.Username);
    console.log(getMessage, 'inside chat body') 

    return(
        <div className='message_body'>

            <div className='message_status'>
                <h3>{Username}</h3>
                <button>Leave chat</button>
            </div>

            {
                getMessage.map((item, i) => {
                    if(item.name === Username){
                        return (
                            <div className='your_message' key={i}>
                                <p>you</p>
                                <p>{item.text}</p>
                            </div>
                        )
                    }else{
                        return (
                            <div className='others_message' key={i}>
                                 <p>{item.name}</p>
                                 <p>{item.text}</p>
                             </div>
                        )
                    }
                })
            }

            
 
            {/* <div className='your_message'>
                <p>you</p>
                <p>your message</p>
            </div> */}
        </div>
    )
}

export default Chatbody;