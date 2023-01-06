import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import './Navbar.scss'

const Navbar = () => {
  const users = useSelector((state)=>state.profile.users)

  return (
    <div className="wrapp-navbar">
      <div className="navbar">
        <div className="left">
          <h1>
            <Link className='link' to="/">{users && users.nama}</Link>
          </h1>
        </div>
        <div className="right">
          <button>
            <Link className='link' to="edit-profile">Edit your profile</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar