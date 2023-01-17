import React from 'react'
import './Input.scss'

const Input = ({labelFor, inputName, inputType, placeholder, value, changeInput}) => {
  return (
    <>
    <label htmlFor={labelFor}>
        <span>{inputName}</span>
        <input id={labelFor} name={labelFor} type={inputType} placeholder={placeholder} value={value} onChange={changeInput}/>
    </label>
    </>
  )
}

export default Input