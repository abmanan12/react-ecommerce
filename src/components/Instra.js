import React from 'react'

export default function Instra() {
    return (
        <>

            <div className="container-fluid mt-5">
                <div className="row d-flex align-items-center">

                    <div className="col-12 col-lg-4 p-3 p-sm-5">
                        <img src="/images/instra-logo.jpg" style={{ height: '50px' }} alt="Instragram Picture" />
                        <h3 className='fw-bold mt-4'>GET INSPIRED WITH INSTRAGRAM</h3>
                        <p className='txt-justify'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                            quis viverra ornare, eros dollar interdum nulla.</p>
                        <button className='btn btn-outline-warning rounded-0'>DISCOVER MORE</button>

                    </div>
                    <div className="col-12 col-lg-4 p-0">
                        <img src="/images/backgroundImg.jpg" style={{ height: '350px', width: '100%' }} alt="Background-Img" />
                    </div>
                    <div className="col-12 col-lg-4 p-0">
                        <img src="/images/backgroundImg.jpg" style={{ height: '350px', width: '100%' }} alt="Background-Img" />

                    </div>
                </div>
            </div>

        </>
    )
}
