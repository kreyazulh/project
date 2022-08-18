import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header2 from '../header2';
import './profile.css'

const Profile2 = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        
        <div class="page-content page-container" id="page-content">
            <Header2></Header2>
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
        <div class="card user-card-full">
            <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                        
                        <div className='profile-picture'>
                        <img src={loggedInUser.IMAGE} onError="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" width="500" height="500"></img>
                        </div>


                        <h6 class="f-w-600">{loggedInUser.NAME}</h6>
                        <p>Student</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email</p>
                                <h6 class="text-muted f-w-400">{loggedInUser.EMAIL}</h6>
                            </div>
                            <br/>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Country</p>
                                
                                <h6 class="text-muted f-w-400">{loggedInUser.COUNTRY}</h6>
                            </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Posts</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Questions</p>
                                <h6 class="text-muted f-w-400"></h6>
                                <br/>
                            </div>
                            <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Blogs</p>
                                <h6 class="text-muted f-w-400"></h6>
                            </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    </div>


);
   
};

export default Profile2;