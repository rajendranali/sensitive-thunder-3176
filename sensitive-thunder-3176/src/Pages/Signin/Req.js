import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const Req = ({children}) => {
  const Authenicate=useSelector((store)=>store.Authreducer)
  const loaction=useLocation()

  if(!Authenicate.isAuth) 
  {
    return <Navigate to="/signin" state={{from:loaction}}
    replace/>
  }
  
  return children
    
  
}

export default Req