import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }

  return (
    <div>
      <section className='cart__item'>
          <header className='cart__item-header'>
              <h4 className='cart__category'>{product.brand}</h4>
              <i onClick={handleDeleteProduct} className="fa-regular fa-trash-can"></i>
              <h3 className='cart__name'>{product.title}</h3>
          </header>
          <span className='cart__quantity'>{product.productsInCart.quantity}</span>
          <footer className='cart__item-footer'>
              <span className='cart__total-label'>Price:</span>
              <b className='cart__total-number'>{product.price}</b>
          </footer>
      </section>
    </div>
  )
}

export default ProductCartInfo