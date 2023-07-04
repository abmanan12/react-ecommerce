import React from 'react'

import HeroCard from './HeroCard'
import Instra from '../../../components/Instra'
import { Link } from 'react-router-dom'

export default function Hero() {
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
                    <Link to='/product1' className='btn btn-warning text-white btn-sm py-2 rounded-0'>
                      DISCOVER MORE</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container py-5 hero-products" style={{ marginTop: '6rem' }}>

        <div className="row text-sm-center px-4 px-sm-5">
          <div className="col">
            <h3 className='fw-bold'>POPULAR PRODUCTS</h3>
            <p className='txt-justify text-sm-center'>Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dollar interdum nulla.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1">

            <div className="row text-center">
              <HeroCard description='A luxurious leather sofa for a touch of elegance.' price='1699.99' id='furItem19'
                link='https://images.pexels.com/photos/6933860/pexels-photo-6933860.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='An L-shaped sofa for versatile seating options.' price='1499.99' id='furItem28'
                link='https://images.pexels.com/photos/6980714/pexels-photo-6980714.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='A versatile convertible sofa that can be adjusted for sitting or sleeping.' price='899.9'
                id='furItem13' link='https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg?auto=compress&cs=tinysrgb&w=400' />
            </div>

          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col">
            <Link to='/product1' className='btn btn-outline-warning rounded-0'>DISCOVER MORE</Link>
          </div>
        </div>

      </div>


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
                <Link to='/product1' className='btn btn-warning text-white rounded-0'>DISCOVER MORE</Link>
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
              <HeroCard description='An eye-catching accent chair to add personality to your space.' price='199.99' id='furItem16'
                link='https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='An elegant armchair for comfortable seating.' price='249.99' id='furItem22'
                link='https://images.pexels.com/photos/1366875/pexels-photo-1366875.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='Elegant dining chairs for comfortable seating during meals.' price='99.99' id='furItem10'
                link='https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400' />
            </div>

          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col">
            <Link to='/product1' className='btn btn-outline-warning rounded-0'>DISCOVER MORE</Link>
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
              <HeroCard description='A modern platform bed for a contemporary bedroom.' price='899.99' id='furItem8'
                link='https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='A canopy bed for a romantic and cozy atmosphere' price='1299.99' id='furItem20'
                link='https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400' />

              <HeroCard description='A bed with built-in storage drawers for extra convenience.' price='1199.99' id='furItem14'
                link='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=400' />
            </div>

          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col">
            <Link to='/product1' className='btn btn-outline-warning rounded-0'>DISCOVER MORE</Link>
          </div>
        </div>

      </div>

    </>
  )
}
