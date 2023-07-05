import React, { useEffect, useRef } from 'react'
import Topbar from '../../../components/Header/Topbar'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../contexts/CartContext'
import FormatPrice from '../../../helpers/formatPrice'

export default function Cart() {

    const { cart, removeItem } = useCartContext()

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
                                    {
                                        cart?.map((curElem, i) => {
                                            return (
                                                <tr className='align-middle' key={i}>
                                                    <td className='content-center'>
                                                        <img src={curElem.image} alt={curElem.name} width={60} />
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
