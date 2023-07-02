import React, { useState } from 'react'

import HeroCard from '../Home/HeroCard'
import { Products } from '../../../data/products'
import Topbar from '../../../components/Header/Topbar'

export default function Product() {

    const [product, setProduct] = useState(Products)

    const filterProduct = category => {
        const productAfterDelete = Products.filter((elem) => {
            return elem.category == category
        })
        setProduct(productAfterDelete)
    }

    return (
        <>

            <Topbar name='PRODUCTS' home='Products' link='product' />

            <div className="container">
                <div className="row text-center">
                    <div className="col col-md-6 offset-md-3">

                        <div className="row my-5">
                            <div className="col">
                                <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique.
                                    Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between pb-3" style={{ borderBottom: '1px solid' }}>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('sofa') }}>Sofa</button>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('table') }}>Table</button>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('chair') }}>Chair</button>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('bed') }}>Bed</button>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('lightning') }}>Lightning</button>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2">
                                <button className='btn border-0' onClick={() => { filterProduct('decore') }}>Decore</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container hero-products py-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">

                        <div className="row text-center">
                            {
                                product.map((elem, i) => {
                                    return (
                                        <HeroCard key={i} name={elem.description} price={elem.price} link={elem.image} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className="row mt-3 text-center">
                    <div className="col">
                        <button className='btn btn-outline-warning rounded-0'>DISCOVER MORE</button>
                    </div>
                </div>

            </div>

        </>
    )
}
