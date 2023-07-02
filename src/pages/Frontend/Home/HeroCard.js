import React from 'react'

export default function HeroCard({ name, price, link }) {
    return (
        <>

            <div className="col-12 col-sm-6 col-lg-4 mt-3">
                <div className="card">
                    <img className="card-img-top px-sm-0" src={link} alt='network-error' />
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                        <h5 className="card-title">{price}</h5>
                    </div>
                </div>
            </div>

        </>
    )
}
