import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import {
    FormTitle,
    RegisterFormContainer,
    TextInputContainer,
} from './RegisterFormElements'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/features/userSlice'

const RegisterForm = () => {
    const [user, setUser] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordRepeate, setPasswordRepeat] = useState<string>('')

    const dispatch = useDispatch()

    const handleRegisterCilck = async () => {
        await axios
            .post('/auth/local/register', {
                username: user,
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res)
                dispatch(
                    login({
                        user: res.data.user.username,
                        jwt: res.data.jwt,
                    })
                )
            })
        console.log('register')
    }

    return (
        <RegisterFormContainer>
            <FormTitle>Login</FormTitle>
            <TextInputContainer>
                <TextInput
                    placeholder="Username"
                    type="text"
                    value={user}
                    onChange={setUser}
                    width="600px"
                />
                <TextInput
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    width="600px"
                />
                <TextInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    width="600px"
                />
                <TextInput
                    placeholder="Repeat password"
                    type="password"
                    value={passwordRepeate}
                    onChange={setPasswordRepeat}
                    width="600px"
                />
                <Button
                    color="#FF9900"
                    text="Create"
                    onClick={handleRegisterCilck}
                />
            </TextInputContainer>
        </RegisterFormContainer>
    )
}

export default RegisterForm
