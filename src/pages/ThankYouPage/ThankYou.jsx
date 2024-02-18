import  {useState }from 'react'
import './ThankYou.css'
import { HiCheckCircle } from "react-icons/hi2";
import { db } from '../../database/firebase'
import {getDocs,collection,updateDoc,doc} from 'firebase/firestore'
const ThankYou = ({id,getVoteList}) => {
  const [thanks,isThanks]=useState(false)
  const updateStatus=async()=>{
      const vote=doc(db,"votes2024",id)
      await updateDoc(vote,{voted:true})
  }
  const handelClick=async()=>{
    await updateStatus()
    await getVoteList()
    isThanks(true)
  }
  return (
    thanks? <div className='thankyouContainer'>
        <HiCheckCircle className='tick'/>
      <h1>ThankYou For Voting....!</h1> 
    </div>:
    <div className='completVoting'>
      <button onClick={handelClick}>Complete Voting</button>
    </div>
  )
}

export default ThankYou
