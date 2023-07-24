import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const params = useParams()
  return (
    <div className='main-body'>Details about users: {params.userId}</div>
  )
}
