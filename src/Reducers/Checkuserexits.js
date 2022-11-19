const initialState = [];

const Checkuserexits = (state=initialState, action) => {
    switch(action.type){

        case 'USER_EXITS':
            return action.value;
        
        default: return state
    }
}

export default Checkuserexits;