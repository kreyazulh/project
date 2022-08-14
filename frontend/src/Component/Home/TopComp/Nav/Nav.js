import React from 'react';
import { Link , Navigate } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const logout = ()=>
    {
        window.localStorage.clear() ; 
        Navigate('/' , {replace:true}) ; 
        window.location.reload() ;
    }
    return (

        <div>
            <div className='state3-top'>
                <div className='navContain'>
                    <div className='navDiv nav1'> 
                        <Link to = '/problemset'><button className='topNavBtn'>Problemset</button></Link>
                    </div>
                    <div className='navDiv nav1'>
                        <Link to = '/showblogs'><button className='topNavBtn'>Blogs</button></Link>
                    </div>
                    <div className='navDiv nav1'> 
                        <Link to = '/ques'><button className='topNavBtn'>Questions</button></Link>
                    </div>
                </div>

                <div className="navContain">
                    <div className='navDiv nav2'>
                        <Link to = '/blog'><button className='topNavBtn'>Add Blog Post </button></Link>
                    </div>
                    <div className='navDiv nav2'>
                        <Link to = '/profile'><button className='topNavBtn'>profile</button></Link>
                    </div>
                    <div className='navDiv nav3'> 
                        <Link to = '/' onClick={logout}><button className='topNavBtn'>log out</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Nav;