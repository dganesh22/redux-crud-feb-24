import React from 'react'
import { NavLink } from 'react-router-dom'

function Users() {
  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
            <NavLink to={`/user/create`} className="btn btn-dark float-end">Add user</NavLink>
            <h3 className="display-3 text-success">Users</h3>
        </div>
      </div>
    </div>
  )
}

export default Users