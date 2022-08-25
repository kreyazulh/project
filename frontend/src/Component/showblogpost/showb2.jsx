import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import BlogList from './bloglist';
import './showb.css';
import Header2 from '../header2';


//import NavBar from '../NavBar/NavBar';



const Showb = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [blogs,setPosts] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 

    

    useEffect(()=>
    {
        
        let url = 'http://localhost:3000/showpost/showblogs' ;
        
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
                    setPosts(data)
                    //console.log(data)
                }

                
            ).catch(err => 
            {
                console.log(err.message) ; 
            })
        
            }
            catch
            {
                console.log("error")
            }
                
    },[])
return (
    <div>
        <div className="profile-container" id="container">
            <Header2/>
            
            <div className="profile-right" id='right'>
                <div className="profile-right-header" id='header'>
                    <h1>BLOG POSTS</h1>
                </div>
                <div className="profile-info" id='profile'>
                    
                
                
                    { blogs && < BlogList blogs={blogs} title="All Blogs"/>
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
    
    export default Showb;