import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__wrapper">
                    <h1 className="hero__title">
                        Enjoy Your
                        Morning Coffee.
                    </h1>
                    <p className="hero__desc">
                        The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity
                    </p>
                    <button className='hero__btn'>Test Coffee</button>
                </div>
            </div>
        </section>
    )
}

export default Hero