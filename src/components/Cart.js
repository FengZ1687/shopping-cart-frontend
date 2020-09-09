import React, { Component } from 'react'
import './Cart.css'
import { addToCart ,removefromCart} from '../actions'
import { connect } from 'react-redux'
import { createOrder } from '../actions'

import { getTotal, getCartProducts } from '../reducers'

class Cart  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    
  }
  handleChange(e){ 
    this.setState({email: e.target.value})
  }


  render(){
    const { products, total,addToCart,removefromCart} = this.props;
    const validate = (email) => {
      const express = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
      return express.test(String(email).toLowerCase())
  }
  
  const nodes = products.length > 0 ? (
    products.map(product =>
      <div className="item" key={product.id}>
      <div className="imgcontainer">
      <img src={product.img} className="pic"/>
      </div>
      <div className="intro">
      <div >
      {product.name}  
      </div>
      <div >
      &#36;{product.price}
      </div>
      </div>
      <div className="detail">
      <div >
      <button
      onClick={()=>removefromCart(product.id)}
      disabled={product.quantity > 0 ? '' : 'disabled'}
      >-</button>
      {product.quantity ? ` x ${product.quantity}` : null}
      <button
      onClick={()=>addToCart(product.id)}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      +
      </button>
      </div>
      <div>
      Total:&#36;{(product.price*product.quantity).toFixed(2)}
      </div>
      </div>
    </div>
    )
  ) : (
    <span>Your Cart is empty</span>
  )
  return (
    <div>
      <h3>ACME Shopping Cart</h3>
      <div>{nodes}</div>
      <div>
      <p>Total: &#36;{total}</p>
      {!validate(this.state.email) ? <div>Enter Your Valid Email to Check out:</div>:null}
      <input type="text" value={this.state.email} onChange={this.handleChange} />
      </div>
      <button onClick={()=>createOrder(products,this.state.email)}
        disabled={(products.length > 0 && validate(this.state.email) ) ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { addToCart ,removefromCart,createOrder}
)(Cart)
