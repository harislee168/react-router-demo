import React from 'react'
import {useNavigate} from 'react-router-dom'

export const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <div className='main-body'>
      <div>Order Confirmed</div>
      <button onClick={() => {navigate(-1)}}>Back button</button>
    </div>
  )
}
