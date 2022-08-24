import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

//import NavBar from '../NavBar/NavBar';


//HERE 
const Upvote = ({BLOG_ID})=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const [bloginfo,setBlogInfo] = useState({})

    
    const demo = async () => {
        console.log("in demo")
       
        const x = {...bloginfo} ; 
        x['BLOG_ID'] = BLOG_ID ; 
        setBlogInfo(x) ;  
       
        console.log(bloginfo) ; 
    const res = await fetch('http://localhost:3000/proc/blgupvotes',{
      method : 'POST' ,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(x)
    }
     
    );
   
    window.location.reload(false);
    
    
  
  }      
  

   
return (
    <div>
        <div>
            <p>
            <input type="submit" value="upvote" className='createpostBtn' onClick={demo} />
            { }
            </p>
           </div>
    
    </div>
        );
    };
    
    export default Upvote;