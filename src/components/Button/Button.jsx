import React from 'react'
import './Button.scss'

const Button = ({clickBtn, value}) => {
    return (
        <button onClick={clickBtn}>
            {value}
        </button>
    )
}

export default Button