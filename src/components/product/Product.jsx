import axios from 'axios'
import React, { Component } from 'react'
import "./Product.css"

export default class Product extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/products")
      .then(res => this.setState({ data: res.data.products })
      )
  }
  render() {
    return (
      <section className='product'>
        <div className='container'>

          <p className='product__title'>Popular Product</p>
          <h2 className='product__subtitle'>Coffee popular Product</h2>
          <div className='product__wrapper'>
            {
              this.state.data?.map((product) => (
                <div className='product__card' key={product.id}>
                  <div>
                    <img src={product.thumbnail} alt="" />
                  </div>
                  <p className='card__title'>{product.title}</p>
                  <div className='card__price'>
                    <p className='price__title'>Price-</p>
                    <p className='last__price'>${product?.price}/</p>
                    <p className='disc__price'>${product.discountPercentage}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}
