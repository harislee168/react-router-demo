import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='main-body'>
      <div>Home Page</div>
      <button onClick={() => {navigate('order-summary')}}>Place Order</button>
    </div>

  )
}
