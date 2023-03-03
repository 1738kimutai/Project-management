import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ForgetPasswordPage from './components/ForgetPassword'
import './App.css'
export default function App() {
    return (
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path="/home" element={ <HomePage />} />
            "
                </Routes>
            </div>
        </Router>
        </>
    )
}