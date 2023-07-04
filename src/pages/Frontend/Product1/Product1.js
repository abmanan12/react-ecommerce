import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFilter } from 'react-icons/bs';

import { Products } from '../../../data/products';
import { furniture } from '../../../data/furniture';
import Topbar from '../../../components/Header/Topbar';


export default function Product1() {

    const [range, setRange] = useState(0)


    const [product, setProduct] = useState(Products)

    // const filterProduct = category => {
    //     const productAfterDelete = Products.filter((elem, i) => {
    //         return elem.category == category
    //     })
    //     setProduct(productAfterDelete)
    // }


    const [value, setValue] = useState('');

    const handleType = (event) => {
        setValue(event.target.value)
        const productAfterChange = Products.filter((elem) => {
            return elem.category === event.target.value
        })
        setProduct(productAfterChange)
    }

    const handleSize = (e) => {
        setValue(e.target.value)
        const productAfterChange = Products.filter((elem) => {
            return elem.size === e.target.value
        })
        setProduct(productAfterChange)
        console.log(product)
        console.log(e.target.value)
    }

    const messageEndRef = useRef()
    const scrollBehavior = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }

    useEffect(() => {
        scrollBehavior()
    }, [])


    return (
        <>

            <div ref={messageEndRef}></div>
            <Topbar name='CATEGORIES' home='Categories' link='product1' />

            <div className="container-fluid pt-5 pb-3">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h3 className="fw-bold">SHOP WITH US</h3>
                        <div className="p text-muted">Browse from {furniture?.length} latest items</div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-3 flex-center">
                <div className="row align-items-center product1-width">
                    <div className="col-12 col-sm-4 col-md-3">
                        <BsFilter /><span> Filter Product</span>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 my-4 my-sm-0">
                        <span>20 Product Found</span>
                    </div>
                    <div className="col-12 col-sm-4 col-md-6 align-center justify-content-sm-end">
                        <span>Sort </span>
                        <select name="" className='form-control ms-3' style={{ maxWidth: '19rem' }}>
                            <option value="sofa">Sofa</option>
                            <option value="bed">Bed</option>
                            <option value="chair">Chair</option>
                            <option value="table">Table</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3 mb-5 flex-center">
                <div className="row product1-width">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                        <form>
                            <div className='card p-3 mt-3 rounded-0'>
                                <select name="" className='form-control' value={value} onChange={handleType}>
                                    <option value="sofa">Type</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="chair">Chair</option>
                                    <option value="bed">Bed</option>
                                    <option value="table">Table</option>
                                </select>

                                <select name="" className='form-control my-3' value={value} onChange={handleSize}>
                                    <option value='medium'>Size</option>
                                    <option value="large">Large</option>
                                    <option value="medium">Medium</option>
                                    <option value="small">Small</option>
                                </select>
                                <select name="" className='form-control'>
                                    <option>Color</option>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="silver">Silver</option>
                                    <option value="gold">Gold</option>
                                </select>
                            </div>
                        </form>

                        <div className="row my-4">
                            <div className="col">
                                <h5>Price Range</h5>
                                <input type="range" max='120' className='w-100 d-block mt-3 mb-2'
                                    onChange={(e) => { setRange(e.target.value) }} />
                                <span>Price:</span> <span className='fw-bold'>0 to {range}$</span>
                            </div>
                        </div>

                        <div className="card rounded-0 p-3">
                            <div className="row">

                                <div className="col">
                                    <h5>Latest Product</h5>
                                </div>

                                <form>
                                    <div>
                                        <input type="checkbox" id='any' />
                                        <label className='mt-2 ms-2' htmlFor="any">Any</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id='today' defaultChecked />
                                        <label className='mt-2 ms-2' htmlFor="today">Today</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id='day2' />
                                        <label className='mt-2 ms-2' htmlFor="day2">Last 2 days</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id='day5' />
                                        <label className='mt-2 ms-2' htmlFor="day5">Last 5 days</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id='day10' />
                                        <label className='mt-2 ms-2' htmlFor="day10">Last 10 days</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id='day15' />
                                        <label className='mt-2 ms-2' htmlFor="day15">Last 15 days</label>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-8 col-lg-9 text-center mt-4 mt-sm-0">
                        <div className="row">
                            {
                                furniture.map((elem, i) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 mt-3" key={i}>
                                            <div className="card rounded-0 w-100">
                                                <Link to={`/product2/${elem.id}`}><img className="card-img-top rounded-0"
                                                    style={{ height: '10rem' }} src={elem.image} alt={elem.name} /></Link>
                                                <div className="card-body">
                                                    <p className="card-text txt-justify">{elem.description?.slice(0, 45)} ...</p>
                                                    <h5 className="card-title">{elem.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
