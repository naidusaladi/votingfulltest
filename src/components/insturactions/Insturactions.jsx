import React from 'react'
import './Insturactions.css'
import {Link} from "react-router-dom";
const Insturactions = ({waitforauth}) => {
  return (
    <div className='insturactionsContainer'>
      In1
      In2
      <button className='votebtn' onClick={waitforauth}>
        <Link to='President'>Start Voting</Link>
        </button>
      
    </div>
  )
}

export default Insturactions
