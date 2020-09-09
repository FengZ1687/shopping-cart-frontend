import React,{Component} from 'react'
import './productitem.css'
class ProductItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      height: props.height,
    } 
  }


  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };
  render() {

    return (
    
  <div style={{ marginBottom: 20 ,marginLeft: 20 , display:'inline-block'}}>
   { this.state.showModal ?(
   <div id="myModal" className="modal">
  <span class="close" onClick={() => {this.setState({ showModal: false});}}>&times;</span>
    <div className="white">
    {this.props.product.name}
    </div>
    <img 
    className="modal-content"
    id="img01"
    src={this.props.product.img} 
    onClick={() => {
      this.setState({ showModal: false});
    }}
    style={{}}
    />
    <div className="white">
    &#36;
    {this.props.product.price}
    </div>
    <div className="white">
    {this.props.product.productDesc}
    </div>
    <div id="caption"></div>
    </div>
   ):(
    <img 
    src={this.props.product.img} 
    onClick={() => {
      this.setState({ showModal: true});
    }}
    style={{height:250, width:200}}
    />
   )
  }

    <div style={{textAlign:"center"}}>
   <div>
    {this.props.product.name}
    </div>
    <div>
      &#36;
    {this.props.product.price}
  </div>
  <div>
    {this.props.product.inventory ? ` ${this.props.product.inventory} in stock` : null}
  </div>
    <button
      onClick={this.props.onAddToCartClicked}
      disabled={this.props.product.inventory > 0 ? '' : 'disabled'}>
      {this.props.product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
    </div>

  </div>


)
}
}


export default ProductItem
