import React from 'react';
import './MidSection.css'

const MidSection = ({state,setState}) => {
    return (
        <div className='mid-container'>
            {state ===2 &&
                <div>
                    <div className='mid-1'>
                        <div className='mid1-right'>
                            <h1>Question Set</h1>
                        </div>
                        <div className='mid1-left'>
                            <h1>
                                Campaign
                            </h1>
                        </div>
                    </div>
                    <div className='mid-2'>
                        <div className='mid2-right'>
                            <h1>Problem Set</h1>
                        </div>
                        <div className='mid2-left'>
                            <h1>
                                LeaderBoard
                            </h1>
                        </div>
                    </div>
                </div>
            }
            {
                ( state === 1 || state === 0 ) &&
                <div className='fresher-description'>
                    <h1>Learn about Fornax</h1>
                    <h5>Basic Education for everyone , everywhere</h5>
                </div>
            }
            
        </div>
    );
};

export default MidSection;