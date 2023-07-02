import React from 'react'
import Topbar from '../../../components/Header/Topbar'

export default function Cart() {
    return (
        <>

            <Topbar name='CART LIST' home='Cart List' link='cart' />

            <div className="container py-5">

                <div className="row">
                    <div className="col-10 offset-1 border-bottom">
                        <div className="row">
                            <div className="col-6">
                                <p>Product</p>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 text-center text-md-start">
                                <p>Price</p>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2">
                                <p>Quantity</p>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 text-center">
                                <p>Total</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-end mt-5 mb-4">
                    <div className="col-10 offset-1 border-bottom">

                        <div className="row">
                            <div className="col">
                                <p>Shipping</p>
                                <div className="row">
                                    <div className="col">
                                        <p className='mb-0'>Flate Rate: $--- <input type="radio" /></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className='mb-0'>Free Shipping: $--- <input type="radio" /></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className='mb-0'>Flate Rate: $--- <input type="radio" /></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className='mb-0'>Local Deleviry: $--- <input type="radio" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-2 mb-4">
                            <div className="col">
                                <p>Calculate Shipping</p>
                                <div className="row">
                                    <div className="col">
                                        <select name="">
                                            <option value="">Pakistan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        <select name="">
                                            <option value="">Select a State</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder='Postalcode/Zipcode' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button className='btn rounded-0' style={{ backgroundColor: '#FD8F5E' }}>UPDATE DETAILS</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-5 text-center text-sm-end">
                    <div className="col-10 offset-1">
                        <button className='btn rounded-0 me-sm-2 mt-2 mt-sm-0' style={{ backgroundColor: '#FD8F5E' }}>CONTINUE SHOPPING</button>
                        <button className='btn rounded-0' style={{ backgroundColor: '#FD8F5E' }}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>

            </div>

        </>
    )
}
