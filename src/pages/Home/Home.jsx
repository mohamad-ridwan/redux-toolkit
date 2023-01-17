import React from 'react'
import './Home.scss'
import {useSelector} from 'react-redux'

const Home = () => {
  const userName = useSelector((state)=> state.user.user?.name)

  return (
    <div className="wrapp">
      <div className="content">
        <h1>Hi Developers!</h1>
        <p><span>{userName}</span></p>
      </div>
    </div>
  )
}

export default Home