import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import FormatPrice from '../../../helpers/formatPrice'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function HeroCard({ description, price, link, id }) {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    const animateText = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.80, y: 30 }
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [inView, controls])

    return (
        <>

            <div className="col-12 col-sm-6 col-lg-4 mt-4">
                <motion.div ref={ref} variants={animateText} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                    initial='hidden' className="card rounded-0">

                    <Link to={`/product2/${id}`}><img className="card-img-top rounded-0 px-sm-0"
                        style={{ height: '10rem' }} src={link} alt='network-error' /></Link>

                    <div className="card-body d-flex flex-column justify-content-between"
                        style={{ height: '10rem' }}>
                        <p className="card-text txt-justify">{description?.slice(0, 45)} ...</p>
                        <h5 className="card-title">{<FormatPrice price={price} />}</h5>
                    </div>

                </motion.div>
            </div>

        </>
    )
}
