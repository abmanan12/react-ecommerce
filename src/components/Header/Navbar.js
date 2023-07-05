import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ShoppingCart } from '@mui/icons-material';

import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { useCartContext } from '../../contexts/CartContext';

export default function Navbar() {

    const { cart } = useCartContext()
    const { isAuthenticated, dispatch } = useContext(AuthContext)

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
                        <ul className="navbar-nav me-auto ms-md-5 mb-2 mb-lg-0 mt-5 mt-sm-0 text-center">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link">PRODUCT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">CONTACT</NavLink>
                            </li>
                        </ul>

                        <ul className='navbar-nav ms-auto me-md-5 mb-2 mb-lg-0 d-flex align-items-center'>
                            <li className="nav-item">
                                {!isAuthenticated
                                    ? <NavLink to='/auth/login' className="nav-link fw-bold">LOGIN</NavLink>
                                    : <NavLink to='/' className="nav-link fw-bold" onClick={handleLogout}>
                                        LOGOUT</NavLink>
                                }
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link">
                                    <span className="position-relative"><ShoppingCart style={{ fontSize: '1.4rem' }} />
                                        <span style={{ fontSize: '10px' }} className="position-absolute badge top-0  
                                         translate-middle text-light rounded-pill bg-warning">{cart?.length}</span>
                                    </span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </>
    )
}
