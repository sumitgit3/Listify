import React, { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
const ProtectedRoute = () => {
    const {user} = useContext(AuthContext);
  return (
    //replace remove previous history back button won't work
    user ? <Outlet/> : <Navigate to={'/'} replace/>
  )
}

export default ProtectedRoute
