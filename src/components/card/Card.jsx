import React from 'react'
import { useNavigate } from "react-router-dom";
import './Card.css'
import Img from '../../assets/imgs/hi.jpeg'
import {getDocs,collection,updateDoc,doc} from 'firebase/firestore'
import { db } from '../../database/firebase'

const Card = ({id,data,member,index}) => {

  let navigate = useNavigate();

  const updateStatus=async()=>{
    const vote=doc(db,"votes2024",id)
    
    await updateDoc(vote,{[member]:index})
  }

  const handelMove=async()=>{
    await updateStatus()
    navigate(`/${id}/${data}`,{replace:true});
  }

  const handleClick=(index)=>{
    setMember(index)
    updateStatus()
  
  }
  return (
    <div className='cardContainer'>
        <div className='cardImg'>
            <img src={Img} alt='name'className='img'/>
        </div>
        <div className='cardData'>
            <h2 className='name'>Name</h2>
            <h3 className='year'>year</h3>
        </div>
        <button className='btn' onClick={handelMove}>Vote</button>

        
      
    </div>
  )
}

export default Card
