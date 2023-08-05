import React, { useEffect, useRef } from 'react'

import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Topbar from '../../../components/Header/Topbar'
import FormatPrice from '../../../helpers/formatPrice'
import { useCartContext } from '../../../contexts/CartContext'

export default function Cart() {

    const { cart, removeItem } = useCartContext()

    const messageEndRef = useRef()
    const scrollBehavior = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollBehavior()
    }, [])

    if (!cart?.length) {
        return <h6 className='content-center text-muted' style={{ height: '30vh' }}>No Item in Cart</h6>
    }

    return (
        <>

            <div ref={messageEndRef}></div>
            <Topbar name='CART LIST' home='Cart List' link='cart' />

            <div className="container py-5">

                <div className="row my-5">
                    <div className="col">
                        <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
                    </div>
                </div>

                <div className="row px-lg-5">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-light table-bordered text-center">

                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart?.map((curElem, i) => {
                                        return (
                                            <tr className='align-middle' key={i}>
                                                <td className='content-center'>
                                                    <img src={curElem.image} loading='lazy' alt={curElem.name} width={60} />
                                                </td>

                                                <td>{curElem.name}</td>

                                                <td>{<FormatPrice price={curElem.price} />}</td>

                                                <td onClick={() => removeItem(curElem.id)}>
                                                    <FaTrash className='text-warning' />
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className="row pe-0">
                        <div className="col text-end pe-0">
                            <Link to='/checkout' className='btn btn-bg'>PROCEED TO CHECKOUT</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
