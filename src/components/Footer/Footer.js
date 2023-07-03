import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";

import TopFooter from './TopFooter';

export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <>

            <div className='py-5 top-footer'>

                <div className="container topfooter-width">
                    <TopFooter />
                </div>

            </div>


            <footer style={{ backgroundColor: '#F2E1D9' }}>
                <div className="text-center text-lg-start bg-dark text-muted pt-3" style={{ marginLeft: '16px' }}>

                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-5 col-xl-4 mx-auto mb-4 px-lg-4">
                                <h6 className="fw-bold mb-4 mb-md-2 mb-lg-4"><img src="/images/logo2.png" alt="Logo" width="60" height="60" /></h6>
                                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
                                <div className="col mt-5">
                                    <Link className="btn btn-outline-light btn-floating me-2" role="button"><AiOutlineTwitter /></Link>
                                    <Link className="btn btn-outline-light btn-floating me-2" role="button"><FaFacebookF /></Link>
                                    <Link className="btn btn-outline-light btn-floating" role="button"><TfiPinterest /></Link>
                                </div>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3 mt-lg-0">
                                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                                <p><Link to='/' className='text-reset text-decoration-none'>Image Licensin</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Style Guide</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Privacy Policy</Link></p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3 mt-lg-0">
                                <h6 className="text-uppercase fw-bold mb-4">Shop Category</h6>
                                <p><Link to='/' className='text-reset text-decoration-none'>Image Licensin</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Style Guide</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Privacy Policy</Link></p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3 mt-lg-0">
                                <h6 className="text-uppercase fw-bold mb-4">Pertners</h6>
                                <p><Link to='/' className='text-reset text-decoration-none'>Image Licensin</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Style Guide</Link></p>
                                <p><Link to='/' className="text-reset text-decoration-none">Privacy Policy</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-2 p-sm-4 ">Copyright &copy;{year}. All rights reserved | This
                        website is made with <span className='text-warning ms-1'>&hearts;</span> by <span
                            className='text-warning'>Abdul Manan</span>.</div>

                </div>
            </footer>

        </>
    )
}
