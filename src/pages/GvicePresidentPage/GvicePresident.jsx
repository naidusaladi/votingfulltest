import React from 'react'
import Card from  '../../components/card/Card'
import './GvicePresident.css'

const GvicePresident = ({id}) => {
  const data="GeneralManager"
  const candidates=["candidate1","candidate2","candidate3","candidate4","candidate5"]
  return (
    <div className='GvicepresidentContainer'>
      <h1>Girl Vice-President</h1>
      <div className='GvicecardsContainer'>
      {
            candidates.map((name,index)=>(
              <Card data={data} member={"generalmanager"} id={id} index={index} key={index} />
            ))
          }
          
        {/* <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/> */}
      </div>
      
    </div>
  )
}

export default GvicePresident
