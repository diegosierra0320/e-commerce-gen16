import React from 'react'

const ProductPurchases = ({product}) => {

  return (
    <li className='card-purchase__item'>
        <h4 className='card-purchase__name'>{product.title}</h4>
        <span className='card-purchase__quantity'>{product.productsInCart.quantity}</span>
        <span className='card-purchases__price'>{product.price}</span>
    </li>
  )
}

export default ProductPurchases