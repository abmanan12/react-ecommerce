import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../config/firebase'

const initialState = {
    userName: '',
    password: ''
}

export default function Login() {

    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { userName, password } = state

        signInWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                console.log('User Loggin In')
                navigate('/')
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });

    }

    return (
        <>
            <div className="background">
                <div className="overlay">

                    <div className="container vh-100 content-center">
                        <div className="row auth-width">
                            <div className="col">
                                <div className="card p-3 p-sm-4 rounded-0">

                                    <div className="row auth-title">
                                        <div className="col">
                                            <h3>Login</h3>
                                            <p>Enter Login details to get access</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit}>

                                        <div className="row auth-input">
                                            <div className="col">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" className='form-control shadow-none' id='email'
                                                    name='userName' placeholder='Email address' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row auth-input mt-3">
                                            <div className="col">
                                                <label htmlFor="password">Password</label>
                                                <input type="Password" className='form-control shadow-none' id='password'
                                                    name='password' placeholder='Enter Password' onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="row mt-4" style={{ fontSize: '12px' }}>
                                            <div className="col-12 col-sm-7 d-flex align-items-center">
                                                <input id='login' type="checkbox" />
                                                <label htmlFor='login' className='ms-2'>keep me logged in</label>
                                            </div>
                                            <div className="col-12 col-sm-5 text-start mt-2 mt-sm-0 text-sm-end ms-3 ms-sm-0">
                                                <Link to='/Auth/forgot-password'>Forgot Password?</Link>
                                            </div>
                                        </div>

                                        <div className="row mt-4 mt-sm-5 auth-button">
                                            <div className="col-12 col-sm-8">
                                                <p>Don't have an account? <Link to='/Auth/register'>Sign Up</Link> here</p>
                                            </div>
                                            <div className="col-12 col-sm-4 mt-2 mt-sm-0 text-end">
                                                <button className='btn btn-warning px-4'>Login</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
