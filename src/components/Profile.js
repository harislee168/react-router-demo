import React from 'react'
import { useAuth } from './auth'
import {useNavigate} from 'react-router-dom'



export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const logoutHandler = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div className='main-body'>
      <div>Welcome {auth.user}</div>
      <div><button className='def' onClick={logoutHandler}>Logout</button></div>
    </div>
  )
}
