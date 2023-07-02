import React, { useState } from 'react'
import { Products } from '../../../data/products'
import Instra from '../../../components/Instra'
import HeroCard from './HeroCard'

export default function Hero() {

  const [product, setProduct] = useState(Products)

  const filterProduct = category => {
    const productAfterDelete = Products.filter((elem) => {
      return elem.category == category
    })
    setProduct(productAfterDelete)
  }

  return (
    <>
      <div className='hero'>
        <div className="container-fluid">

          <div className='hero-bgImg'>
            <div className="overlay">
              <div className="row hero-card">
                <div className="col">
                  <div className="card hero-card-position">

                    <h6 className='fw-bold text-muted'>70% SALE OFF</h6>
                    <h3 className='fw-bold'>FURNITURE AT COST</h3>
                    <p className='text-muted txt-justify'>Suspendisse varius enim in eros elementum
                      tristique. Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
                    <button className='btn btn-warning btn-sm py-2 rounded-0'>
                      DISCOVER MORE</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container pb-5" style={{ paddingTop: '6rem' }}>

        <div className="row text-sm-center px-4 px-sm-5">
          <div className="col">
            <h3 className='fw-bold'>POPULAR PRODUCTS</h3>
            <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique.
              Duis cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
          </div>
        </div>


        {/* <div className="row d-flex justify-content-between">
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
            </div> */}

      </div>


      {/* <div className="container py-4">
        <div className="row">
          <div className="col-8 offset-2 border-top"></div>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">

            <div className="row text-center">
              {
                product.map((elem, i) => {
                  return (
                    <div className="col-6 col-lg-4 mt-3" key={i}>
                      <div className="card rounded-0 border-light" style={{ width: '100%' }}>
                        <img className="card-img-top rounded-0" style={{ height: '10rem' }} src={elem.image} alt={elem.name} />
                        <div className="card-body">
                          <p className="card-text">{elem.description}</p>
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
      </div> */}


      <div className="container-fluid py-5 hero-menufacturer">
        <div className="row">

          <div className="col-12 col-md-6 p-0">
            <img src="/images/backgroundImg.jpg" alt="Background-Img" />
          </div>

          <div className="col-12 col-md-6">
            <div className="row manufacturer-text p-3 p-sm-5">

              <div className="col">
                <h1 className='fw-bold'>BEST FURNITURE</h1>
                <h1 className='fw-bold'>MANUFACTURER</h1>
                <p className='txt-justify'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                  quis viverra ornare, eros dollar interdum nulla.</p>
                <p className='txt-justify'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                  quis viverra ornare, eros dollar interdum nulla.</p>
                <button className='btn btn-warning rounded-0'>DISCOVER MORE</button>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container pt-5 hero-products">

        <div className="row text-sm-center px-4 px-sm-5">
          <div className="col">
            <h3 className='fw-bold'>PRODUCTS MAY YOU LIKE</h3>
            <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros
              dollar interdum nulla.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1">

            <div className="row text-center">
              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Chair-2.jpg' />

              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Chair-3.jpeg' />

              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Chair-5.jpeg' />
            </div>

          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col">
            <button className='btn btn-outline-warning rounded-0'>DISCOVER MORE</button>
          </div>
        </div>

      </div>


      <Instra />


      <div className="container py-5 hero-products">

        <div className="row text-sm-center px-4 px-sm-5">
          <div className="col">
            <h3 className='fw-bold'>TOP PICKS</h3>
            <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1">

            <div className="row text-center">
              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Sofa-1.jpg' />

              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Sofa-4.jpg' />

              <HeroCard name='By Microfiber / Microsued 56" Armless Loveseat' price='367$'
                link='/images/Sofa-5.jpg' />
            </div>

          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col">
            <button className='btn btn-outline-warning rounded-0'>DISCOVER MORE</button>
          </div>
        </div>

      </div>

    </>
  )
}
