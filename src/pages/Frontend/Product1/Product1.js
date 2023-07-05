import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import { BsFilter } from 'react-icons/bs';

import Topbar from '../../../components/Header/Topbar';
import FormatPrice from '../../../helpers/formatPrice';
import { useProductContext } from '../../../contexts/ProductContext';


export default function Product1() {

    const { allProducts, filterProducts, sorting, updateFilter, clearFilter,
        filters: { type, size, color, price, maxPrice, minPrice } } = useProductContext()

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
                        <div className="p text-muted">Browse from {allProducts?.length} latest items</div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-3 flex-center">
                <div className="row align-items-center product1-width">
                    <div className="col-12 col-sm-4 col-md-3">
                        <BsFilter /><span> Filter Product</span>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 my-4 my-sm-0">
                        <span>{filterProducts?.length} Product Found</span>
                    </div>
                    <div className="col-12 col-sm-4 col-md-6 align-center justify-content-sm-end">
                        <span>Sort </span>
                        <select className='form-select ms-3' onChange={sorting}
                            style={{ maxWidth: '19rem' }}>
                            <option value="lowest">Price (Lowest)</option>
                            <option value='#' disabled></option>
                            <option value="highest">Price (Highest)</option>
                            <option value='#' disabled></option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3 mb-5 flex-center">
                <div className="row product1-width">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                        <form>
                            <div className='card p-3 mt-3 rounded-0'>
                                <select name="type" className='form-select' value={type} onChange={updateFilter}>
                                    <option hidden value='all'>Type</option>
                                    <option value="Sofa">Sofa</option>
                                    <option value="Table">Table</option>
                                    <option value="Chair">Chair</option>
                                    <option value="Bed">Bed</option>
                                    <option value="Lighting">Lighting</option>
                                    <option value="Decor">Decor</option>
                                </select>

                                <select name="size" className='form-select my-3' value={size} onChange={updateFilter}>
                                    <option hidden value='all'>Size</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                                <select name="color" className='form-select' value={color} onChange={updateFilter}>
                                    <option hidden value='all'>Color</option>
                                    <option value="gold">Gold</option>
                                    <option value="silver">Silver</option>
                                    <option value="black">Black</option>
                                    <option value="green">green</option>
                                    <option value="brown">Brown</option>
                                </select>
                            </div>
                        </form>

                        <div className="row my-4">
                            <div className="col">
                                <h5>Price Range</h5>
                                <input type="range" value={price} name='price' min={minPrice} max={maxPrice}
                                    onChange={updateFilter} className='w-100 d-block mt-3 mb-2' />
                                <span>Price:</span> <span className='fw-bold'>{minPrice} to <FormatPrice price={price} /></span>
                            </div>
                        </div>

                        <div className="card rounded-0 p-3">
                            <div className="row">

                                <div className="col">
                                    <h5>Latest Product</h5>
                                </div>

                                <form>
                                    <div>
                                        <input type="radio" id='any' defaultChecked name='time' value='all' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="any">Any</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='today' name='time' value='today' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="today">Today</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='day2' name='time' value='day2' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="day2">Last 2 days</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='day5' name='time' value='day5' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="day5">Last 5 days</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='day10' name='time' value='day10' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="day10">Last 10 days</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='day15' name='time' value='day15' onChange={updateFilter} />
                                        <label className='mt-2 ms-2' htmlFor="day15">Last 15 days</label>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="col-12 text-start my-4">
                            <button className='btn btn-bg' onClick={clearFilter}>CLEAR FILTERS</button>
                        </div>

                    </div>

                    <div className="col-12 col-sm-6 col-md-8 col-lg-9 text-center mt-4 mt-sm-0">
                        <div className="row">
                            {
                                filterProducts?.map((elem, i) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 mt-3" key={i}>
                                            <div className="card rounded-0 w-100">
                                                <Link to={`/product2/${elem.id}`}><img className="card-img-top rounded-0"
                                                    style={{ height: '10rem' }} src={elem.image} alt={elem.name} /></Link>
                                                <div className="card-body">
                                                    <p className="card-text txt-justify">{elem.description?.slice(0, 45)} ...</p>
                                                    <h5 className="card-title">{<FormatPrice price={elem.price} />}</h5>
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
