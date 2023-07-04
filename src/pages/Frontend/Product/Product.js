import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import HeroCard from '../Home/HeroCard'
import { furniture } from '../../../data/furniture'
import Topbar from '../../../components/Header/Topbar'

export default function Product() {

    const [product, setProduct] = useState(furniture)

    const filterProduct = category => {
        const productAfterSearch = furniture.filter((elem) => {
            return elem.category === category
        })
        setProduct(productAfterSearch)
    }


    return (
        <>

            <Topbar name='PRODUCTS' home='Products' link='product' />

            <div className="container-fluid content-center">
                <div className="row product-width px-2 px-sm-3 px-md-4 px-lg-5">
                    <div className="col">

                        <div className="row my-5">
                            <div className="col">
                                <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique.
                                    Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between product-category"
                            style={{ borderBottom: '1px solid' }}>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Sofa') }}>Sofa</button>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Table') }}>Table</button>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Chair') }}>Chair</button>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Bed') }}>Bed</button>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Lighting') }}>Lightning</button>
                            <button className='btn border-0 fw-bold' onClick={() => { filterProduct('Decor') }}>Decor</button>
                            <button className='btn border-0 fw-bold' onClick={() => { setProduct(furniture) }}>All</button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid content-center py-4">
                <div className="row text-center product-width px-2 px-sm-3 px-md-4 px-lg-5">
                    {
                        product?.slice(0, 15).map((elem, i) => {
                            return (
                                <HeroCard key={i} description={elem.description} price={elem.price} link={elem.image} id={elem.id} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="container-fluid">
                <div className="row text-center mb-5">
                    <div className="col">
                        <Link to='/product1' className='btn btn-outline-warning rounded-0'>DISCOVER MORE</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
