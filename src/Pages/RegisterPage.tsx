import React from 'react'
import { Link } from 'react-router-dom'
import BackArrow from '../Components/BackArrow/BackArrow'
import Form from '../Components/Form/Form'
import Header from '../Components/Header/Header'
import RegisterForm from '../Components/RegisterForm/RegisterForm'
import Wrapper from '../Components/Wrapper/Wrapper'

const RegisterPage = () => {
    return (
        <Wrapper>
            <>
                <Header />
                <Form>
                    <RegisterForm />
                    <Link to="/">
                        <BackArrow />
                    </Link>
                </Form>
            </>
        </Wrapper>
    )
}

export default RegisterPage
