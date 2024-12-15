import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state= {
            count: 1,
            show: false
        }
    }
    handleDec = () => {
        this.setState({count: this.state.count - 1})
    }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>inc</button>
        <button disabled={this.state.count <= 0} onClick={this.handleDec}>dec</button>
        <button onClick={()=> this.setState({show: !this.state.show})}>show more</button>
        { 
            this.state.show &&
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla architecto quod autem, perspiciatis iusto maxime totam.</p>
        }
      </div>
    )
  }
}
