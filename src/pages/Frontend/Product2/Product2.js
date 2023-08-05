import React, { useEffect, useRef } from 'react'

import { FaStar } from "react-icons/fa";
// import { FiPlus } from 'react-icons/fi';
// import { HiMinusSm } from 'react-icons/hi';

import { furniture } from '../../../data/furniture';
import Topbar from '../../../components/Header/Topbar';
import { Link, useParams } from 'react-router-dom';
import FormatPrice from '../../../helpers/formatPrice';
import { useCartContext } from '../../../contexts/CartContext';

export default function Product2() {

    let id = useParams().id
    const { addToCart } = useCartContext()

    let singleProduct = furniture?.find(curElem => {
        return curElem.id === id
    })

    const { name, description, image, price } = singleProduct

    let ratingStar = Array.from({ length: 5 }, curElem => {
        return (
            <FaStar />
        )
    })


    const messageEndRef = useRef()
    const scrollBehavior = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollBehavior()
    }, [])


    return (
        <>

            <div ref={messageEndRef}></div>
            <Topbar name='PRODUCT DETAILS' home='Product Details' link='product2' />

            <div className="container py-5">
                <div className="row align-items-center">

                    <div className="col-12 col-md-6 text-center product2-images">
                        <div className="row">
                            <div className="col">
                                <img src={image} loading='lazy' style={{ width: '80%' }}
                                    alt={name} />
                            </div>
                        </div>
                        {/* <div className="row mt-2">
                            <div className="col">
                                <img src="/images/backgroundImg.jpg" alt="Background-Img" />
                                <img src="/images/backgroundImg.jpg" className='mx-2 mx-sm-3' alt="Background-Img" />
                                <img src="/images/backgroundImg.jpg" alt="Background-Img" />
                                <img src="/images/backgroundImg.jpg" className='ms-2 ms-sm-3' alt="Background-Img" />
                            </div>
                        </div> */}
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="row pt-4 pt-md-0 px-3 px-md-0">

                            <div className="col">
                                <h4 className='fw-bold'>{name}</h4>
                                <h4 className='fw-bold text-warning'><FormatPrice price={price} /></h4>
                            </div>

                            <div className="row mt-2" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Category:</span><span className='ms-3 text-warning'>Household</span>
                                </div>
                            </div>

                            <div className="row" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Availabilty:</span><span className='ms-3 text-warning'>In Stock</span>
                                    <hr className='w-75 mt-3' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className='txt-justify' style={{ fontSize: '15px' }}>{description}</p>
                                </div>
                            </div>

                            {/* <div className="row mt-3">
                                <div className="col">
                                    <div className='product2-addbtn content-center p-1'>
                                        <span><HiMinusSm /></span><span className='mx-3'>1</span><span><FiPlus /></span>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row mt-4">
                                <div className="col">
                                    <Link to='/cart' className='btn btn-bg' onClick={() => { addToCart(singleProduct) }}>
                                        ADD TO CART</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <div className="container my-5">

                <div className="row mb-3">
                    <div className="col">
                        <span style={{ color: 'red', fontSize: '14px' }}>Note: Reviews Method is Under Development</span>
                    </div>
                </div>

                <div className="row product2-reviews px-3 px-md-0">

                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="border bg-light p-2 content-center flex-column review-center">
                                    <h5 className='fw-bold mb-0'>Overall</h5>
                                    <h1 className='text-warning mb-0 fw-bold py-2'>4.0</h1>
                                    <p className='mb-0'>(03 Reviews)</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 my-3 my-sm-0 review-center">
                                <h6 className='fw-bold'>Based on 3 Reviews</h6>
                                <p className='stars'>5 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars'>4 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars'>3 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars'>2 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars'>1 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/images/dp.jpg" loading='lazy' alt="internet-error" width={50} />
                            <div className='ms-3'>
                                <h6>Ali Haider</h6>
                                <p className='stars'><span>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/images/dp.jpg" loading='lazy' alt="internet-error" width={50} />
                            <div className='ms-3'>
                                <h6>Ali Haider</h6>
                                <p className='stars'><span>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/images/dp.jpg" loading='lazy' alt="internet-error" width={50} />
                            <div className='ms-3'>
                                <h6>Ali Haider</h6>
                                <p className='stars'><span>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <div className="row">
                            <div className="col">
                                <h4 className='fw-bold'>Add a Review</h4>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col">
                                <p className='stars' style={{ fontSize: '12px' }}>Your Rating: <span className='mx-2'>
                                    {ratingStar}</span> Outstanding</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input type="text" className='form-control py-2' placeholder='Your Full Name' />
                                <input type="email" className='form-control py-2' placeholder='Email Address' />
                                <input type="text" className='form-control py-2' placeholder='Phone Number' />
                                <textarea name="review" style={{ resize: 'none' }} className='form-control'
                                    placeholder='Review' rows="3"></textarea>
                            </div>
                        </div>

                        <div className="row mt-3 text-end">
                            <div className="col">
                                <button className='btn btn-bg'>Submit Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
