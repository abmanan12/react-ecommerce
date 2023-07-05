import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { CiMobile4 } from 'react-icons/ci';
import { BiMessageDetail } from 'react-icons/bi';
import Topbar from '../../../components/Header/Topbar';

export default function Contact() {
    return (
        <>

            <Topbar name='CONTACT US' home='Contact' link='contact' />

            <div className="container-fluid mb-3 pt-5 contact-width">
                <div className="row">
                    <div className="col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13596.776216917506!2d73.47694544999999!3d31.573725999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1688274322305!5m2!1sen!2s"
                            width="100%"
                            height="300"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy='no-referrer-when-downgrade'>
                        </iframe>
                    </div>
                </div>
            </div>


            <div className="container-fluid pt-4 contact-width">

                <div className="row">
                    <div className="col">
                        <h4 className='fw-bold'>Get in Touch</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-7 col-lg-8">

                        <div className="row pt-2">
                            <div className="col">
                                <textarea style={{ resize: 'none' }} className='form-control text-muted'
                                    rows="6" placeholder='Enter Message'></textarea>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" className='form-control text-muted' placeholder='Enter your name' />
                            </div>
                            <div className="col-12 mt-3 mt-sm-0 col-sm-6">
                                <input type="email" className='form-control text-muted' placeholder='Email' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className='form-control text-muted' placeholder='Enter Subject' />
                            </div>
                        </div>
                        <div className="row mt-4 mb-5">
                            <div className="col">
                                <button className='btn btn-outline px-4 py-2'>SEND</button>
                            </div>
                        </div>

                    </div>


                    <div className="col-12 col-md-5 col-lg-4 mt-2 mt-md-0 mb-5 mb-md-0">

                        <div className="d-flex align-items-center">
                            <div className="text-muted contact-icon">
                                <AiOutlineHome />
                            </div>
                            <div>
                                <h6 className='mb-0 text-muted'>Buttonwood, California</h6>
                                <p className='mb-0 text-muted'>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-4">
                            <div className="text-muted contact-icon">
                                <CiMobile4 />
                            </div>
                            <div>
                                <h6 className='mb-0 text-muted'>+1 253  565 2365</h6>
                                <p className='mb-0 text-muted'>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="text-muted contact-icon">
                                <BiMessageDetail />
                            </div>
                            <div>
                                <h6 className='mb-0 text-muted'>support@ourweb.com</h6>
                                <p className='mb-0 text-muted'>Send us your query anytime!</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
