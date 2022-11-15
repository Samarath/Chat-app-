const initialState = '';

const Username = (state=initialState, action) => {
    switch(action.type){
        case 'USER_NAME':
            return action.value;
        
        default: return state
    }
}

export default Username;