import {combineReducers} from 'redux'

import Username from "./Username";
import Checkuserexits from './Checkuserexits';
import Message from './Message';


const rootReducers = combineReducers({
    Username,
    Checkuserexits,
    Message
})

export default rootReducers;

