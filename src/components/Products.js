import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Products = () => {
  return (
    <div>
      <div className='main-body'><input type='text' className='product' placeholder='Search product'></input></div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </div>
  )
}
