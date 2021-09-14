import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { Link } from 'react-router-dom'
import {
    CreateAccountButton,
    FormTitle,
    LoginFormContainer,
    OrDiv,
    TextInputContainer,
} from './LoginFormElements'
import axios from '../../axios'
import { login } from '../../Redux/features/userSlice'

const LoginForm = () => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()

    const handleLoginClick = async () => {
        await axios
            .post('/auth/local', {
                identifier: user,
                password: password,
            })
            .then((res) => {
                dispatch(
                    login({
                        user: res.data.user.username,
                        jwt: res.data.jwt,
                    })
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <LoginFormContainer>
            <FormTitle>Login</FormTitle>
            <TextInputContainer>
                <TextInput
                    placeholder="Login"
                    type="text"
                    value={user}
                    onChange={setUser}
                    width="600px"
                />
                <TextInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    width="600px"
                />
                <Button
                    color="#FF9900"
                    text="Login"
                    onClick={handleLoginClick}
                />
                <OrDiv>
                    <span>or</span>
                </OrDiv>
                <Link to="/register">
                    <CreateAccountButton>
                        <span>create an account</span>
                    </CreateAccountButton>
                </Link>
            </TextInputContainer>
        </LoginFormContainer>
    )
}

export default LoginForm
