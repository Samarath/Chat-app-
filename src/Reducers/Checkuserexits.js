const initialState = [];

const Checkuserexits = (state=initialState, action) => {
    switch(action.type){

        case 'USER_EXITS':
            console.log(action.value, 'inside reducesr')
            return action.value;
        
        default: return state
    }
}

export default Checkuserexits;