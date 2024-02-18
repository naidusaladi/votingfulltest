import React, { useEffect, useState } from 'react'
import { db } from '../../database/firebase'
import {getDocs,collection,addDoc} from 'firebase/firestore'
const Firebase = () => {
    const [voteList,setVoteList]=useState([])
    const [voters,setVoters]=useState(0)
    const voteCollectionRef=collection(db,'votes2024')

    const getVoteList=async ()=>{
        try{

            //Read data
            const data=await getDocs(voteCollectionRef)
            const filtredData=data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id

            }))
            setVoteList(filtredData)
            console.log(filtredData)
        }catch(err){
            console.error(err)
        }

    }

    useEffect(()=>{
        getVoteList()

    },[])

    // Voter creation

    const voterCreation=async()=>{
        try{
            await addDoc(voteCollectionRef,{
                generalmanager: -1,
                gvicepresident: -1,
                president: -1,
                vicepresident: -1,
                voted: false  }
                )
        }catch(err){
            console.error(err)
        }
    }

    // for(let i=0;i<1;i++){
    //     voterCreation()
    //     i+=1
    // }

    const generateUsers=()=>{
        for(let i=0;i<voters;i++){
            voterCreation()
        }
           
    }


  return (
    <>
    {/* <div>
      {voteList.map((vote,index)=>(
        <div key={index}>gv:{vote.gvicepresident}</div>
        
      ))}
    </div> */}
    <div>
        Users Creation
        <input type='number' placeholder='enter no.of voters' onChange={(e)=>{setVoters(e.target.value)}}/>
        <button type='submit' onClick={generateUsers}>Submit</button>
    </div>
    </>
  )
}

export default Firebase
