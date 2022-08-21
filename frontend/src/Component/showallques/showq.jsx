import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Questionlist from './queslist';
//import NavBar from '../NavBar/NavBar';
import './showq.css'


const Showq = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ques,setques] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 

   

    useEffect(()=>
    {
        
        let url = 'http://localhost:3000/showpost/showquestions' ;
        
            try
            {
                fetch(url) 
         .then(res => 
            {
                return res.json()
            }
            ) 
            .then(
                (data)=>
                {
                    setques(data)
                    //console.log(data)
                   
                }

                
            ).catch(err => 
            {
                console.log(err.message) ; 
            })
        
            }
            catch
            {
                console.log("eroro")
            }
         
            
       





      
        
    },[])
return (
    <div>
        <div className="profile-container">
            <div className="profile-left">
            </div>
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>Question Segment</h1>
                </div>
                <div className="profile-info">
                    
                
               
                    { ques && < Questionlist Questionlist={ques} title="All Questions asked by users"/>
                    } 
                    
                    
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    
    </div>
        );
    };
    
    export default Showq;