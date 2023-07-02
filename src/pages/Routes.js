import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Frontend from './Frontend'
import Auth from './Auth'
import { AuthContext } from '../contexts/AuthContext'

export default function Index() {

    const { isAuthenticated } = useContext(AuthContext)

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
