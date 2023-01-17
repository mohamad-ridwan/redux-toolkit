import React, { useState } from 'react'
import './Login.scss'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { useDispatch } from 'react-redux'
import { userAction } from '../../redux/userReducer'
import { useNavigate } from 'react-router-dom'
import { tokenAction } from '../../redux/tokenReducer'

const Login = () => {
  const [value, setValue] = useState({
    jobTitle: '',
    email: '',
    name: '',
    age: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = new Date().getTime()

  function changeInput(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  function submit(e) {
    e.preventDefault()
    dispatch(userAction(value))
    dispatch(tokenAction(token))

    navigate('/')
  }

  return (
    <div className="login">
      <form onSubmit={submit}>
        <Input
          labelFor="jobTitle"
          inputName="Job Title"
          inputType="text"
          placeholder="Enter Your job title"
          value={value && value.jobTitle}
          changeInput={changeInput}
        />
        <Input
          labelFor="email"
          inputName="Email"
          inputType="email"
          placeholder="Enter Your Email"
          value={value && value.email}
          changeInput={changeInput}
        />
        <Input
          labelFor="name"
          inputName="Name"
          inputType="text"
          placeholder="Enter Your name"
          value={value && value.name}
          changeInput={changeInput}
        />
        <Input
          labelFor="age"
          inputName="Age"
          inputType="text"
          placeholder="Enter Your Age"
          value={value && value.age}
          changeInput={changeInput}
        />
        <Button
          value="Login"
          clickBtn={submit}
        />
      </form>
    </div>
  )
}

export default Login