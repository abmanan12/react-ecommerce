import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Button, Drawer, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
    CardTravel, CheckOutlined, HomeOutlined, Logout, ProductionQuantityLimits, ShoppingCart,
    ProductionQuantityLimitsOutlined, ProductionQuantityLimitsSharp
} from '@mui/icons-material';

import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { BsFillArrowUpLeftSquareFill } from 'react-icons/bs';

const data = [
    { name: "Home", icon: <HomeOutlined />, link: '/' },
    { name: "Product", icon: <ProductionQuantityLimits />, link: '/product' },
    { name: "Product1", icon: <ProductionQuantityLimitsOutlined />, link: '/product1' },
    { name: "Product2", icon: <ProductionQuantityLimitsSharp />, link: '/product2' },
    { name: "Cart", icon: <CardTravel />, link: '/cart' },
    { name: "Checkout", icon: <CheckOutlined />, link: '/checkout' },
];

export default function Navbar() {

    const { isAuthenticated, dispatch } = useContext(AuthContext)

    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250, marginTop: 25 }} onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <ListItem key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Link to={item.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={item.name} /></Link>
                </ListItem>
            ))}
        </div>
    );

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light">

                <div className="container-fluid">

                    <Link className="navbar-brand ms-3" to="/">
                        <img src="/images/logo2.png" alt="logo" width="60" height="60" />
                    </Link>

                    <button className="navbar-toggler me-3 me-sm-5" type="button" data-bs-target="#navbarSupportedContent"
                        data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-md-5 mb-2 mb-lg-0 mt-4 mt-sm-0 text-center">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">Contact</NavLink>
                            </li>
                        </ul>

                        <ul className='navbar-nav ms-auto me-md-5 mb-2 mb-lg-0 d-flex align-items-center'>
                            <li className="nav-item">
                                {isAuthenticated
                                    ? <NavLink to='/auth/login' className="nav-link fw-bold">LOGIN</NavLink>
                                    : <Button style={{ color: 'black' }} onClick={() => setOpen(true)}>My Account</Button>
                                }
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link">
                                    <span className="position-relative"><ShoppingCart style={{ fontSize: '1.4rem' }} />
                                        <span style={{ fontSize: '10px' }} className="position-absolute badge top-0  
                                         translate-middle text-light rounded-pill bg-warning">2</span>
                                    </span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

            <div>
                <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                    <div className="conatainer">
                        <div className="row">
                            <div className="col-9">
                                {getList()}
                                <Button style={{ color: 'red', marginLeft: '45%', marginTop: 16 }} onClick={handleLogout}>{<Logout />}
                                    <span className='ms-1'>LOGOUT</span></Button>
                            </div>
                            <div className="col-3 mt-3">
                                <button className='btn' onClick={() => setOpen(false)}><BsFillArrowUpLeftSquareFill /></button>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>

        </>
    )
}
