import './App.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Component/Home/Home'
import Login from './Component/login';
import Home from './Component/Home/Home';
import LogIn2 from './Component/login2/login2';
import Signup from './Component/register2/signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Register from './Component/Register/Register';
import { createContext, useState} from 'react';
export   const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState();

  const [color, changeColor] = useState("white");
  // const [color, changeColor] = useState("#ffffff");

  document.body.style.backgroundColor = color;
  
  
  return (
    <div className="App">

<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
      <header >
        
      </header>

      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LogIn2/>}/>

        </Routes>



      

      </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
