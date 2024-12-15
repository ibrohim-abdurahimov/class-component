import React from 'react'
import "./History.css"

import img1 from "../../assets/infocard1.png"
import img2 from "../../assets/infocard2.png"
import img3 from "../../assets/infocard.png"

const History = () => {
    return (
        <section className='history'>
            <div className="container">
                <div className="history__wrapper">
                    <div className="history__card_first">
                        <img src={img1} alt="" />
                    </div>
                    <div className="history__card_sec">
                        <img src={img2} alt="" />
                    </div>
                    <div className="history__card_thir">
                        <img src={img3} alt="" />
                    </div>
                    <div className="history__card_four">
                        <p className="history__card_subtitle">Our history</p>
                        <h2 className="history__card_title">
                            Create a
                            new story with us
                        </h2>
                        <p className="history__card_desc">
                            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                            atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History