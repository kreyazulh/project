import './App.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Component/Home/Home'
import Home from './Component/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Welcome from './Component/Welcome';
import HomePage from './Component/homepage';
import Profile2 from './Component/Profile/profile2';
import AskQues2 from './Component/askques/askques2';
import Login from './Component/login';
import LogIn2 from './Component/login2/login2';
import Signup from './Component/register2/signup';
import Profile from './Component/Profile/Profile';
import AskQues from './Component/askques/askques';
//import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
//import Signup from './Component/register2/signup';
import {createContext, useState} from 'react';
import Nav from './Component/Home/TopComp/Nav/Nav';
import Blog from './Component/BlogPost/blog';
import Showb from './Component/showblogpost/showb2';
import Showq from './Component/showallques/showq';
export const UserContext=createContext();

function App() {
 // const [loggedInUser, setLoggedInUser]=useState();
 const [loggedInUser, setLoggedInUser]=useState(JSON.parse(window.localStorage.getItem('token')));

  const [color, changeColor] = useState("white");
  

  document.body.style.backgroundColor = color;
  
  
  return (
    <div className="App">

<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
      <header >
        
      </header>

      <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LogIn2/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<LogIn2/>}/>
          <Route path='/profile' element={<Profile2/>}/>
          <Route path='/nav' element={<Nav/>}/>
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/questions' element={<AskQues2/>}/>
          <Route path='/showblogs' element={<Showb/>}/>
          <Route path='/showquestions' element={<Showq/>}/>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />   
        
        </Routes>



      

      </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
