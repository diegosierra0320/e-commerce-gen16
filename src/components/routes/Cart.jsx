import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCartInfo from '../cart/ProductCartInfo'
import getConfig from '../../utils/getConfig'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()
  const [totalPrice, setTotalPrice] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
        .then(res => {
            const products = res.data.data.cart.products 
            setCartProducts(products)
            const total = products.reduce((acc, cv) => {
                return Number(cv.price) * cv.productsInCart.quantity + acc
            }, 0)
            setTotalPrice(total)
        })
        .catch(err => setCartProducts())
  }

    useEffect(() => {
        getAllProductsCart()
    }, [])
    

    const handleCheckout = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL, obj, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductsCart()
                setTotalPrice(0)
            })
            .catch(err => console.log(err))
    }

  return (
    <section className='cart'>
        <div className='cart__container'>
        <h2 className='cart__title'>Cart</h2>
            <div className='cart__container__item'>
                {
                    cartProducts?.map(product => (
                    <ProductCartInfo 
                    key={product.id}
                    product={product}
                    getAllProductsCart={getAllProductsCart}
                    />
                    ))
                }
            </div>
        </div>
        <hr className='cart__hr' />
        <footer className='cart__footer'>
            <span className='cart__total-global'>Total:</span>
            <b className='cart_total-global-value'>{totalPrice}</b>
        </footer>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
    </section>
  )
}


export default Cart