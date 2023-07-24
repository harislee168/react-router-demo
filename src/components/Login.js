import React, {useState} from 'react'
import { useAuth } from './auth'
import {useNavigate, useLocation} from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const userNameHandler = (e) => {
    setUser(e.target.value)
  }
  const loginHandler = () => {
    auth.login(user)
    navigate(redirectPath, {replace:true})
  }
  return (
    <div className='main-body'>
      <table>
        <tbody>
          <tr>
            <td className='td-padding'><label>User name:</label></td>
            <td className='td-padding'><input type='text' className='product' value={user} onChange={userNameHandler} placeholder='Enter user name'></input></td>
          </tr>
          <tr>
            <td className='td-padding'><label>Password:</label></td>
            <td className='td-padding'><input type='password' className='product' placeholder='Enter password'></input></td>
          </tr>
        </tbody>
      </table>
      <div><button className='def' onClick={loginHandler}>Login</button></div>
    </div>
  )
}
