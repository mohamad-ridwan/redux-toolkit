import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { tokenAction } from '../../redux/tokenReducer'
import { userAction } from '../../redux/userReducer'

const IsLoggedIn = () => {
  const navigate = useNavigate()
  const url = window.location.pathname
  const token = useSelector((state)=> state.token.userToken)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token === null){
      dispatch(userAction({}))
      dispatch(tokenAction(null))
  
      if(url !== '/login'){
          navigate('/login')
          return
      }
    }

    return ()=>token
  }, [token, url])
}

export default IsLoggedIn