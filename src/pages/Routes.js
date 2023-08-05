import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Auth from './Auth'
import Frontend from './Frontend'
import { AuthContext } from '../contexts/AuthContext'
import ScreenLoader from '../components/ScreenLoader/ScreenLoader'

export default function Index() {

    const { screenLoader, isAuthenticated } = useContext(AuthContext)

    if (screenLoader) {
        return <ScreenLoader />
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Frontend />} />
                    <Route path='/auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
