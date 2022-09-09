import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import ProductDetails from './components/routes/ProductDetails'
import Cart from './components/routes/Cart'


function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: "Diego",
  //     lastName: "Sierra",
  //     email: "diego.sierra870320@gmail.com",
  //     password: "Diego870320",
  //     phone: "3028609814",
  //     role: "admin"
  //   }

  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route element={<ProtectedRoutes /> }>
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
