import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { auth } from '../config/firebase'

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
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                dispatch({ type: 'LOGIN', payload: { user } })
            } else {
                console.log('User Not Logged In')
            }
        });
    }, [])

    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch, user }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
