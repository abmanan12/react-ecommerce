import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from '../../../helpers/formatPrice'

export default function HeroCard({ description, price, link, id }) {
    return (
        <>

            <div className="col-12 col-sm-6 col-lg-4 mt-4">
                <div className="card rounded-0">
                    <Link to={`/product2/${id}`}><img className="card-img-top rounded-0 px-sm-0" style={{ height: '10rem' }}
                        src={link} alt='network-error' /></Link>
                    <div className="card-body d-flex flex-column justify-content-between"
                        style={{ height: '10rem' }}>
                        <p className="card-text txt-justify">{description?.slice(0, 45)} ...</p>
                        <h5 className="card-title">{<FormatPrice price={price} />}</h5>
                    </div>
                </div>
            </div>

        </>
    )
}
