

import * as types from '../constants/ActionTypes'

export const getAllProducts = () => async (dispatch) => {
  const res = await fetch("http://localhost:9191/products");
  const products = await res.json();
   console.log(products)
  dispatch({
    type: 'RECEIVE_PRODUCTS',
    products
  });
};



const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removefromCart = productId => (dispatch, getState) => {
    dispatch(removefromCartaction(productId))
}

const removefromCartaction = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const createOrder = (order,email)  => {
    fetch("http://localhost:9191/updateProducts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: 'no-referrer',
      redirect: 'follow',
      body: JSON.stringify(order)
    })
    .then(response => response.text())
    // .then((contents) => 
    //    dispatch({ type: CHECKOUT_REQUEST, payload: data })
    // )
    .catch(() => console.log("Can’t access"))

    alert("Order Success! order will be sent to your email")
    fetch(`http://localhost:9191/order/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: 'no-referrer',
      redirect: 'follow'
    })
    .then(response => response.text())
    // .then((contents) => 
    //    dispatch({ type: CHECKOUT_REQUEST, payload: data })
    // )
    .catch(() => console.log("MailSending failed")) 
    window.location.reload(false) 
}

