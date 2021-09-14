import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/features/userSlice'
import { HeaderContainer, Logo, LogOutIcons } from './HeaderElements'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <HeaderContainer>
            <Logo>To-Do-List</Logo>
            <LogOutIcons onClick={() => dispatch(logout())}>
                <img src="/icons/logoutIcon.svg" alt="logout" />
            </LogOutIcons>
        </HeaderContainer>
    )
}

export default Header
