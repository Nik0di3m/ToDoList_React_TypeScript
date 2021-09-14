import React from 'react'
import Form from '../Components/Form/Form'
import Header from '../Components/Header/Header'
import LoginForm from '../Components/LoginForm/LoginForm'
import Wrapper from '../Components/Wrapper/Wrapper'

const LoginPage = () => {
    return (
        <Wrapper>
            <>
                <Header />
                <Form>
                    <LoginForm />
                </Form>
            </>
        </Wrapper>
    )
}

export default LoginPage
