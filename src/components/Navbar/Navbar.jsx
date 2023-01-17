import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAction } from '../../redux/tokenReducer'
import { userAction } from '../../redux/userReducer'
import './Navbar.scss'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userToken = useSelector((state)=> state.token.userToken)

  function handleLogout(){
    if(userToken !== null){
      dispatch(userAction({}))
      dispatch(tokenAction(null))
    }
    return navigate('/login')
  }

  return (
    <nav className="wrapp-navbar">
      <div className="navbar">
        <Link className='link' to="/">
          <h1>Our Developer React JS</h1>
        </Link>

        <ul className="menu-page">
          <li>
            <Link className='link' to="/user">User</Link>
          </li>
          <li>
            <Link className='link' onClick={handleLogout}>{userToken !== null ? 'Logout' : 'Login'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar