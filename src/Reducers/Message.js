const initialState = '';

const Message = (state=initialState, action) => {
    switch(action.type){

        case 'MESSAGE':
            return action.value;
        
        default: return state
    }
}

export default Message;