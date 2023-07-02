import React from 'react'

export default function ResetPassword() {
    return (
        <>
            <div className="background">
                <div className="overlay">
                    <div className="container">
                        <div className="row vh-100 d-flex align-items-center">
                            <div className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                <div className="card p-3 p-sm-4 p-md-5 rounded-0">
                                    <div className="row text-center mb-3">
                                        <div className="col">
                                            <h3>Reset Password</h3>
                                            <p>Enter new password to get access</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="" className='fw-bold'>Password</label>
                                            <input type="password" className='form-control rounded-0 mt-1' placeholder='Enter Password' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <label htmlFor="" className='fw-bold'>Confirm Password</label>
                                            <input type="password" className='form-control rounded-0 mt-1' placeholder='Enter Confirm Password' />
                                        </div>
                                    </div>
                                    <div className="row mt-3 text-end">
                                        <div className="col">
                                            <button className='btn btn-warning rounded-0 py-2 px-4 text-white'>Reset Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
