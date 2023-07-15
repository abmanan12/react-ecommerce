import React from 'react'

import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";

export default function TopFooter() {
    return (
        <>

            <div className="row">
                <div className="col-6 col-md-3">
                    <p className='mb-0 text-muted topfooter-icon'><CiDeliveryTruck /></p>
                    <p className='fw-bold mb-1 text-muted'>Fast & Free Delivery</p>
                    <p className='text-muted'>Free Delivery on all orders</p>
                </div>
                <div className="col-6 col-md-3">
                    <p className='mb-0 text-muted topfooter-icon'><BsCreditCard2Back /></p>
                    <p className='fw-bold mb-1 text-muted'>Money Back Guarantee</p>
                    <p className='text-muted'>Free Delivery on all orders</p>
                </div>
                <div className="col-6 col-md-3">
                    <p className='mb-0 text-muted topfooter-icon'><MdOutlinePayment /></p>
                    <p className='fw-bold mb-1 text-muted'>Secure Payment</p>
                    <p className='text-muted'>Free Delivery on all orders</p>
                </div>
                <div className="col-6 col-md-3">
                    <p className='mb-0 text-muted topfooter-icon'><MdContactSupport /></p>
                    <p className='fw-bold mb-1 text-muted'>Online Support</p>
                    <p className='text-muted'>Free Delivery on all orders</p>
                </div>
            </div>

        </>
    )
}
