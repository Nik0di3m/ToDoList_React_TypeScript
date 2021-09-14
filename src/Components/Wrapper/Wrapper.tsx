import React, { ReactChild } from 'react'
import { WrapperContainer } from './WrapperElements'

interface CoolProps {
    children: ReactChild
}

const Wrapper = ({ children }: CoolProps) => {
    return <WrapperContainer>{children}</WrapperContainer>
}

export default Wrapper
