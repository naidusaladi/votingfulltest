import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useParams  } from 'react-router-dom'

const PrivateRouters = ({auth}) => {
  console.log(auth)
  // const [auth,setAuth]=useState(true)
  // let { userId } = useParams();
  // console.log(userId>1)


  
  return (
      auth? <Outlet />:<Navigate to="/NotAValiedUser" />
  )
}

export default PrivateRouters
