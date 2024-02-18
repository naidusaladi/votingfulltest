import React, { useState } from 'react'
import './President.css'
import Card from '../../components/card/Card'


const President = ({id}) => {



 const candidates=["candidate1","candidate2","candidate3","candidate4","candidate5"]
 const data="vicepresident"
//  const member="president"
  return (
    <div className='presidentContainer'>
      <h1>President</h1>
      <div className='cardsContainer'>
        {
          candidates.map((name,index)=>(
            <Card data={data} member={"president"} id={id} index={index} key={index} />
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

export default President
