import React from 'react';
import { Link} from 'react-router-dom';
import './showProb.css'

const Problem = ({problem}) => {


    return (
        <div>
            <Link to={'problem/' + problem.ID} className='prob-link' >
                <div className='prob-container'>

                    <div className='prob-title'>
                        <h1>Problem Title : {problem.TITLE}</h1>
                    </div>
                    <div className='prob-tag'>
                        <div className='tag'>
                            <h6>Type of the Problem : {problem.CATEGORY}</h6>
                        </div>
                        <br></br>
                        <div className='difficulty'>
                        <h6>Problem Rank : {problem.RANK}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Problem;