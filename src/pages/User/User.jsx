import React from 'react'
import './User.scss'
import { useSelector } from 'react-redux'

const User = () => {
  const user = useSelector((state) => state.user.user)
  const userToken = useSelector((state)=>state.token.userToken)
  return (
    <div className="wrapp">
      <div className="user">
        <h1 className='title'>Developer Profile</h1>
        <h1>Hi, Developer!</h1>
        {user && (
          <>
            <h3 className='job-title'>{user?.jobTitle}</h3>
            <span>{user?.email}</span>
            <p>{user?.name}</p>
            <span>{user?.age ? user.age + 'years': ''}</span>
          </>
        )}
        <span>Anda memiliki Token : {userToken}</span>
      </div>
    </div>
  )
}

export default User