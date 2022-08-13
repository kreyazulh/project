import React, { useState } from 'react';
//import Footer from '../Footer/Footer';
//import Header from '../Header/Header';
import TopComp from './TopComp/TopComp';
import './Home.css'
import MidSection from './MidSection/MidSection';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Home = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    const [state,setState] = useState(loggedInUser?.USERNAME? 2:0);
    
    //const {state} = useLocation() ; 
    console.log(loggedInUser)

    return (
        <div>
        

        <div className="profile-container">
            <div className="profile-left">
            </div>
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>Profile</h1>
                </div>
                <div className="profile-info">
                    
                    <div className='inside-profile-info'>
                        <h1>{loggedInUser.FIRST_NAME} {loggedInUser.LAST_NAME}</h1>
                        <h3>{loggedInUser.MEMBER_TYPE}</h3>
                    </div>
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

export default Home;