import React, { Component } from 'react'
import ProductList from './components/ProductsList'
import Header from './common/header';
import Cart from './components/Cart'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: true 
    };
    this.showHome= this.showHome.bind(this)
    this.showCart = this.showCart.bind(this)
  }

  showHome() 
  {   
    this.setState({ homePage: true })
  }
  showCart() 
  {   
    this.setState({ homePage: false })
  }
  

  render() {

    return (
  <div>
    <Header showHome={this.showHome}  showCart={this.showCart}  />
    {this.state.homePage?(
    <ProductList/>
    ):(
    <Cart />
    )}
  </div>
    )
  }
}

export default App
