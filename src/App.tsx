import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import UserPage from './Pages/UserPage'
import { selectUser } from './Redux/features/userSlice'
const App = () => {
    const { user } = useSelector(selectUser)

    return (
        <Router>
            {!user ? (
                <>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </>
            ) : (
                <>
                    <UserPage />
                </>
            )}
        </Router>
    )
}

export default App
