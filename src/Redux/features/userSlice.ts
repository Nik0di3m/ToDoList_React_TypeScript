import { createSlice } from '@reduxjs/toolkit'

interface CoolState {
    user: string | null
    jwt: string | null
}

const initialState: CoolState = {
    user: null,
    jwt: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.jwt = action.payload.jwt
        },
        logout: (state) => {
            state.user = null
            state.jwt = null
        },
    },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: any) => state.user

export default userSlice.reducer
