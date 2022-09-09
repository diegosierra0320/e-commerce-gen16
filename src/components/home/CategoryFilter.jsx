import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../store/slices/products.slice'

const CategoryFilter = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  const dispatch = useDispatch()

  const handleClickCategory = id => {
    dispatch(getProductByCategory(id))
  }

  const products = useSelector(state => state.products)

  return (
    <div className='category'>
      <h3>Category</h3>
      <ul>
        <li onClick={handleClickCategory}>All Product</li>
          {
            categories?.map(category => (
              <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
            ))
          }
      </ul>
    </div>
  )
}

export default CategoryFilter