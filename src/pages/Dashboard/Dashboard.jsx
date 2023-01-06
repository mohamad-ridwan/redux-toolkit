import React from 'react'
import {useSelector} from 'react-redux'
import './Dashboard.scss'

const Dashboard = () => {
  const users = useSelector((state)=>state.profile.users)

  return (
    <div className="wrapp-dashboard">
      <div className="dashboard">
        <div className="profile">
          <div className="item-profile">
            <span>Nama</span>
            <p>{users && users.nama}</p>
          </div>
          <div className="item-profile">
            <span>Gender</span>
            <p>{users && users.gender === 'Wanita' ? '🚺 Wanita' : users.gender === 'Pria' ? '🚹 Pria' : ''}</p>
          </div>
          <div className="item-profile">
            <span>Umur</span>
            <p>🗓️ {users && users.umur}</p>
          </div>
          <div className="item-profile">
            <span>Pasangan</span>
            <p>❤️ {users && users.pasangan}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard