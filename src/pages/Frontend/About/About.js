import React from 'react'

import Instra from '../../../components/Instra'
import Topbar from '../../../components/Header/Topbar'

export default function About() {
  return (
    <>

      <Topbar name='ABOUT' home='About' link='about' />

      <div className='py-5'>
        <div className="container content-center">
          <div className="row about-width">
            <div className="col">
              <p className='text-muted txt-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                fuga molestiae sint adipisci, consequatur, earum nisi optio necessitatibus hic error assumenda sed modi
                repudiandae repellat enim, blanditiis odit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus possimus, alias sit ipsam aspernatur esse deserunt doloremque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img src="/images/table-1.jpeg" className='about-img px-2' alt="Chair Pic" />
          </div>
        </div>
      </div>

      <div className='text-center my-5'>
        <div className="container content-center">
          <div className="row about-width">
            <div className="col">
              <h2 className='fw-bold mb-3'>JOURNEY START FROM</h2>
              <p className='text-muted txt-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                fuga molestiae sint adipisci, consequatur, earum nisi optio necessitatibus hic error assumenda sed modi
                repudiandae repellat enim, blanditiis odit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus possimus, alias sit ipsam aspernatur esse deserunt doloremque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img src="/images/Sofa-1.jpg" alt="Sofa Pic" className='about-img px-2' />
          </div>
        </div>
      </div>

      <div className='text-center my-5'>
        <div className="container content-center">
          <div className="row about-width">
            <div className="col">
              <h2 className='fw-bold mb-3'>2023</h2>
              <p className='text-muted txt-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                fuga molestiae sint adipisci, consequatur, earum nisi optio necessitatibus hic error assumenda sed modi
                repudiandae repellat enim, blanditiis odit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus possimus, alias sit ipsam aspernatur esse deserunt doloremque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-5'>
        <Instra />
      </div>

    </>
  )
}
