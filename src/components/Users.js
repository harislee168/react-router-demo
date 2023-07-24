import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUser = searchParams.get('filter') == 'active'
  return (
    <div className='main-body'>
      <div>
        <Link to='/users/1'>User 1</Link><br />
        <Link to='/users/2'>User 2</Link><br />
        <Link to='/users/3'>User 3</Link><br />
      </div>
      <div>
        <button className='def' onClick={() => {setSearchParams({filter:'active'})}}>Active user</button>
        <button className='def' onClick={() => {setSearchParams({})}}>Reset</button>
      </div>
      <div>
        {showActiveUser? <h3>Show active users</h3>:<h3>Show all users</h3>}
      </div>
    </div>
  )
}
