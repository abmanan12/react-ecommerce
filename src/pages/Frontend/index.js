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
import Sidebar from './Sidebar'
import PrivateRoute from '../PrivateRoute'

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        {/* <Route path='/product' element={<PrivateRoute Component={Product} />} /> */}
                        <Route path='/product' element={<Product />} />
                        <Route path='/about' element={<About />} />
                        {/* <Route path='/contact' element={<PrivateRoute Component={Contact} />} /> */}
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/product1' element={<Product1 />} />
                        <Route path='/product2' element={<Product2 />} />
                        <Route path='/sidebar' element={<Sidebar />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    )
}
