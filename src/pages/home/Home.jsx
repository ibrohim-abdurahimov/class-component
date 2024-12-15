import React from 'react'
import Product from '../../components/product/Product'
import Counter from '../../components/counter/Counter'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import History from '../../components/history/History'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Info/>
        <History/>
        {/* <Counter title="Counter"/> */}
        <Product/>
        <Footer/>
    </div>
  )
}

export default Home