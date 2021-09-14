import React, { Dispatch, SetStateAction } from 'react'
import { Input } from './TextInputElements'

interface CoolProps {
    placeholder: string
    value: string
    type: string
    width: string
    onChange: Dispatch<SetStateAction<string>>
}

const TextInput = ({
    placeholder,
    value,
    type,
    width,
    onChange,
}: CoolProps) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            width={width}
        />
    )
}

export default TextInput
