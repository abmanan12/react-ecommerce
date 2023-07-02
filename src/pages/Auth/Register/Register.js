import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../../../config/firebase';

const initialState = {
  fullName: '',
  emailAddress: '',
  password: ''
}

export default function Register() {

  const [state, setState] = useState(initialState)
  const Navigator = useNavigate()

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { fullName, emailAddress, password } = state

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        console.log('User Regestered')

        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('Email verification sent!')
          });

        Navigator('/')

      })
      .catch((error) => {
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
                      <h3>Sign Up</h3>
                      <p>Create your account to get full access</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>

                    <div className="row auth-input">
                      <div className="col">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className='form-control shadow-none' name='fullName' id='name'
                        placeholder='Enter full name' onChange={handleChange} />
                      </div>
                    </div>
                    <div className="row auth-input mt-3">
                      <div className="col">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" className='form-control shadow-none' name='emailAddress' id='email'
                        placeholder='Enter email address' onChange={handleChange} />
                      </div>
                    </div>
                    <div className="row auth-input mt-3">
                      <div className="col">
                        <label htmlFor="password">Password</label>
                        <input type="Password" className='form-control shadow-none' name='password' id='password'
                          placeholder='Enter Password' onChange={handleChange} />
                      </div>
                    </div>
                    <div className="row auth-input mt-3">
                      <div className="col">
                        <label htmlFor="c-password">Confirm Password</label>
                        <input type="Password" className='form-control shadow-none' id='c-password'
                          placeholder='Confirm Password' onChange={handleChange} />
                      </div>
                    </div>

                    <div className="row mt-4 auth-button">
                      <div className="col-12 col-sm-8">
                        <p>Already have an account? <Link to='/Auth/login'>Login</Link> here</p>
                      </div>
                      <div className="col-12 col-sm-4 mt-2 mt-sm-0 text-end">
                        <button className='btn btn-warning px-3'>Sign Up</button>
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
