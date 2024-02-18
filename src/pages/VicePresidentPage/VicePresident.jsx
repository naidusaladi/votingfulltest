import React from 'react'
import './VicePresident.css'
import Card from  '../../components/card/Card'

const VicePresident = ({id}) => {
  const data="GvicePresident"
  const candidates=["candidate1","candidate2","candidate3","candidate4","candidate5"]
  return (
    <div className='vicepresidentContainer'>
      <h1>Vice-President</h1>
      <div className='vicecardsContainer'>
        {
            candidates.map((name,index)=>(
              <Card data={data} member={"vicepresident"} id={id} index={index} key={index} />
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

export default VicePresident
