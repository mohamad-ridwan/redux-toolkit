import React from 'react'
import './Input.scss'

const Input = ({ label, name, placeholder, value, type, id, labelRadio, displayLabelRadio, widthInput, classInput, changeInput, clickInput, cursorColInput }) => {
    return (
        <div className="input">
            <span>{label}</span>
            <div className="col-input" onClick={clickInput} style={{cursor: cursorColInput}}>
                <input type={type} id={id} className={classInput} name={name} placeholder={placeholder} value={value} style={{width: widthInput}} onChange={changeInput}/>
                <label htmlFor={id} style={{display: displayLabelRadio}}>{labelRadio}</label>
            </div>
        </div>
    )
}

export default Input