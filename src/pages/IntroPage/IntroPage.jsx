import React, { useEffect,useState } from 'react'
import Events from "../../components/events/Events"
import Insturactions from '../../components/insturactions/Insturactions'
import './IntroPage.css'
import {slides} from '../../data/corouselData.json'
import {useParams} from "react-router-dom";
import { db } from '../../database/firebase'
import {getDocs,collection} from 'firebase/firestore'


const IntroPage = ({authFun,voteList}) => {
    let {userId}=useParams()
    


    const waitforauth=async()=>{
        for(let i=0;i<voteList.length;i++){
            console.log(userId, voteList[i].id)
            if(voteList[i].id === userId && voteList[i].voted === false){
                await authFun(userId,true)
            }
        }


    }



  return (
    <div className='intro'>
        <div className='headder'>
            <h1>SAC</h1>
            <h2>Elections 2024</h2>
        </div>

        <div className='headdercontainer'>
            <div>
                <h2 style={{textAlign:"center"}}>Events 2023</h2>
                <Events data={slides}/>
            </div>
            <div>
                <h2 style={{textAlign:"center"}}>Insturactions</h2>
                <Insturactions waitforauth={waitforauth}/>
            </div>
        </div>
        


    </div>
  )
}

export default IntroPage
