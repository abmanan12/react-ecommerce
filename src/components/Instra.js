import React from 'react'
import { Link } from 'react-router-dom'

export default function Instra() {
    return (
        <>

            <div className="container-fluid mt-5">
                <div className="row d-flex align-items-center">

                    <div className="col-12 col-md-12 col-lg-4 p-3 p-sm-5">
                        <img src="/images/instra-logo.jpg" style={{ height: '50px' }} alt="Instragram Picture" />
                        <h3 className='fw-bold mt-4'>GET INSPIRED WITH INSTRAGRAM</h3>
                        <p className='txt-justify'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                            quis viverra ornare, eros dollar interdum nulla.</p>
                            <Link to='/product1' className='btn btn-bg'>DISCOVER MORE</Link>

                    </div>
                    <div className="col-12 col-md-6  col-lg-4 p-0">
                        <img src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ height: '350px', width: '100%' }} alt="Background-Img" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-0">
                        <img src="https://images.pexels.com/photos/12155610/pexels-photo-12155610.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ height: '350px', width: '100%' }} alt="Background-Img" />
                    </div>
                </div>
            </div>

        </>
    )
}
