import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'




const ProductList = ({ products, addToCart }) => (
    <div style={{  margin:'auto', width:"50%"}} >
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
    </div>
)





const mapStateToProps = state => ({
  products: getProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductList)
