import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter - 1 >= 1){
            setCounter(counter - 1 )
        }
    }

    const handleAddCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: productInfo.id,
            quantity: counter
        }
        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

  return (
    <section className='product-info'>
        <div className='product-info__header'>
            <NavLink to='/'>
                <h4>Home</h4>
            </NavLink>
            <ul>
                <li><b>{productInfo?.title}</b></li>
            </ul>
        </div>

        <div className='product-info__container'>
            <div className='product-info__img'>
                <img src={productInfo?.productImgs[0]} alt="" />
            </div>

            <div className='product-info__info'>
                <div>
                    <h2 className='product-info__info__title'>{productInfo?.title}</h2>
                    <p className='product-info__description'>{productInfo?.description}</p>
                </div>

                <div className='product-info__footer'>
                    <div className='product-info__price'>
                        <article>
                            <h3 className='product-info__price-label'>Price</h3>
                            <b className='product-info__price-value'>{productInfo?.price}</b>
                        </article>
                    </div>
                    
                    <div className='product-info__quantity'>
                        <article>
                            <h3 className='product-info__quantity-label'>Quantity</h3>
                            <div className='product-info__quantity-value'>
                                <button onClick={handleMinus}>-</button>
                                <div>{counter}</div>
                                <button onClick={handlePlus}>+</button>               
                            </div>
                        </article>
                    </div>
                </div>

                <div className='product-info__btn'>
                    <button onClick={handleAddCart} className='product-info__btn__add'>Add to card
                    <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDescription