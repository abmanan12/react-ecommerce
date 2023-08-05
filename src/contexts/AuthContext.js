import React, { createContext, useEffect, useReducer, useState } from 'react'

import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()
const initialState = { isAuthenticated: false }

const reducer = (state, option) => {
    switch (option.type) {
        case 'LOGIN':
            return { isAuthenticated: true }
        case 'LOGOUT':
            return { isAuthenticated: false }
        default:
            return state
    }

}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [screenLoader, setScreenLoader] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setScreenLoader(false)
                setUser(user)
                dispatch({ type: 'LOGIN', payload: { user } })
            } else {
                setScreenLoader(false)
                console.log('User Not Logged In')
            }
        });
    }, [])

    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch, user, screenLoader }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
