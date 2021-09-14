import React from 'react'
import { Indicator, Input, Label } from './CheckBoxElements'

interface CoolProps {
    id: number
    value: string
    disabled: boolean
    checked: boolean
    onChange: any
}

const CheckBox = ({ id, value, disabled, checked, onChange }: CoolProps) => {
    return (
        <Label>
            <Input
                type="checkbox"
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <Indicator />
        </Label>
    )
}

export default CheckBox
