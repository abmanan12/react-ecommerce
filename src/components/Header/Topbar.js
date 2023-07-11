import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar({ name, home, link }) {
    return (
        <>

            <div className='logo'>
                <img src="/images/logo1.jpg" alt="logo" width="95%" height="115" />
            </div>

            <div className='bg-danger topbar'>
                <div className="container-fluid">

                    <div className="bgImgProduct">
                        <div className="overlay">

                            <div className="row topbar-text">
                                <div className="col">
                                    <h1 className='fw-bold text-light'>{name}</h1>

                                    <Link className='link' to='/'>Home</Link><span className='px-2'>&gt;</span>

                                    <Link className='link text-danger' to={`/${link}`}>{home}</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
