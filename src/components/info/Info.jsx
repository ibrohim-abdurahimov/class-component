import React from 'react'
import "./Info.css"

import img1 from "../../assets/infocard1.png"
import img2 from "../../assets/infocard2.png"
import img3 from "../../assets/infocard3.png"

const Info = () => {
  return (
    <section className='info'>
        <div className="container">
            <div className="info__wrapper">
                <div className="info__card">
                    <div className="info__text">
                        <p className='info__text_num'>01</p>
                        <p className='info__text_title'>Best Coffee Flavour</p>
                    </div>
                    <div className="info__img">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="info__card">
                    <div className="info__text">
                        <p className='info__text_num'>02</p>
                        <p className='info__text_title'>Place to get lost</p>
                    </div>
                    <div className="info__img">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="info__card">
                    <div className="info__text">
                        <p className='info__text_num'>03</p>
                        <p className='info__text_title'>Proper roesting</p>
                    </div>
                    <div className="info__img">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info