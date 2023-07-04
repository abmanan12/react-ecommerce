import React, { useEffect, useRef } from 'react'
import Topbar from '../../../components/Header/Topbar'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Cart() {

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
            <Topbar name='CART LIST' home='Cart List' link='cart' />

            <div className="container py-5">
                <div className="row px-lg-5">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-light table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='align-middle'>
                                        <td className='content-center'>
                                            <img src="/images/Bed-1.jpg" alt="network-error" width={60} />
                                            <span className='ms-2'>Bed</span>
                                        </td>
                                        <td>100$</td>
                                        <td>2</td>
                                        <td>200$</td>
                                        <td><FaTrash className='text-warning' /></td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td className='content-center'>
                                            <img src="/images/Bed-1.jpg" alt="network-error" width={60} />
                                            <span className='ms-2'>Bed</span>
                                        </td>
                                        <td>100$</td>
                                        <td>2</td>
                                        <td>200$</td>
                                        <td><FaTrash className='text-warning' /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row pe-0">
                        <div className="col text-end pe-0">
                            <Link to='/checkout' className='btn btn-warning rounded-0 shadow-none text-white'>
                                PROCEED TO CHECKOUT</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
