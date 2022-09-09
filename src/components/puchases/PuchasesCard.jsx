import React from 'react'
import ProductPurchases from './ProductPurchases';


const PuchasesCard = ({purchase}) => {

  return (
    <article className='card-purchases'>
        <h3 className='card-purchases__date'>{purchase.createdAd}</h3>
        <ul className='card-purchases__body'>
            {
                purchase.cart.products.map(product => (
                    <ProductPurchases 
                    key={product.id}
                    product={product}
                    />
                ))
            }
        </ul>
    </article>

  )
}

export default PuchasesCard