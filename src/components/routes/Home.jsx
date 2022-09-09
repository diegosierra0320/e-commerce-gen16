import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'

const Home = () => {

  const [inputSearch, setInputSearch] = useState("")
  const [filterProducts, setFilterProducts] = useState()

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (inputSearch.length !== 0) {
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
    setFilterProducts(filter)
    
    } else {
      setFilterProducts('')
    }
  }, [inputSearch])

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className='home'>
      <div className='home__input-filter'>
        <CategoryFilter />
        <InputSearch setInputSearch={setInputSearch} />
      </div>
      <div className='home__container-card'>
        {
          filterProducts ? 
            filterProducts?.map(product => (
              <CardHome 
                key={product.id}
                product={product}
            />
            ))
          :
          products?.map(product => (
            <CardHome 
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home