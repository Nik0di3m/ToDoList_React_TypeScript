import React, { ReactChild } from 'react'
import { FormContainer, FormWrapper } from './FormElements'

interface CoolProps {
    children: ReactChild[]
}

const Form = ({ children }: CoolProps) => {
    return (
        <FormWrapper>
            <FormContainer>{children}</FormContainer>
        </FormWrapper>
    )
}

export default Form
