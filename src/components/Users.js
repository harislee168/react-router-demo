import React from 'react'
import {Link} from 'react-router-dom'

export const Users = () => {
  return (
    <div className='main-body'>
      <Link to='/user/1'>User 1</Link><br />
      <Link to='/user/2'>User 2</Link><br />
      <Link to='/user/3'>User 3</Link><br />
    </div>
  )
}
