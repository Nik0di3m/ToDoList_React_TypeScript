import React from 'react'
import { ButtonContainerBig } from './ButtonElements'

interface CoolProps {
    text: string
    color: string
    onClick: any
}

const Button = ({ text, color, onClick }: CoolProps) => {
    return (
        <ButtonContainerBig color={color} onClick={() => onClick()}>
            {text}
        </ButtonContainerBig>
    )
}

export default Button
