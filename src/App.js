import socketIO from 'socket.io-client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './Components/SignIn/Signin';
import ChatPage from './Components/ChatPage/ChatPage';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
       <div>
         <Routes>
           <Route path='/' element={<Signin socket={socket}/>}></Route>
           <Route path='/chats' element={<ChatPage socket={socket}/>}></Route>
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
