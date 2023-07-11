import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { auth } from '../../../config/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

const initialState = {
  email: ''
}

export default function ForgotPassword() {

  const Navigator = useNavigate()
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsProcessing(true)

    sendPasswordResetEmail(auth, state.email)
      .then(() => {
        alert('Password reset email sent!')
        setIsProcessing(false)
        Navigator('/auth/login')
      })
      .catch((error) => {
        setIsProcessing(false)
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
                      <h3>Forgot Password</h3>
                      <p>Enter your details to get access</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>

                    <div className="row auth-input">
                      <div className="col">
                        <label htmlFor='email'>Email Address</label>
                        <input type="text" className='form-control shadow-none' id='email'
                          name='email' placeholder='Email address' onChange={handleChange} />
                      </div>
                    </div>

                    <div className="row mt-4 text-end auth-button">
                      <div className="col">
                        <button className='btn btn-bg px-3' disabled={isProcessing}>
                          {!isProcessing
                            ? 'Send Link'
                            : <div className='spinner-grow spinner-grow-sm'></div>
                          }
                        </button>
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
