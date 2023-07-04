import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Home from './Home'
import About from './About'
import Product from './Product'
import Product1 from './Product1'
import Product2 from './Product2'
import Contact from './Contact'
import Cart from './Cart'
import Checkout from './Checkout'
import PrivateRoute from '../PrivateRoute'

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/product1' element={<Product1 />} />
                        <Route path='/cart' element={<PrivateRoute Component={Cart} />} />
                        <Route path='/contact' element={<PrivateRoute Component={Contact} />} />
                        <Route path='/checkout' element={<PrivateRoute Component={Checkout} />} />
                        <Route path='/product2/:id' element={<PrivateRoute Component={Product2} />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    )
}
