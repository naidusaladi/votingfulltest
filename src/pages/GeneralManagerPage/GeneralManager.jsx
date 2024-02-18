import React from 'react'
import './GeneralManager.css'
import Card from '../../components/card/Card'


const GeneralManager = ({id}) => {
  const data="ThankYou"
  const candidates=["candidate1","candidate2","candidate3","candidate4","candidate5"]
  return (
    <div className='gmContainer'>
      <h1>General Manager</h1>
      <div className='gmcardsContainer'>
      {
            candidates.map((name,index)=>(
              <Card data={data} member={"gvicepresident"} id={id} index={index} key={index} />
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

export default GeneralManager
