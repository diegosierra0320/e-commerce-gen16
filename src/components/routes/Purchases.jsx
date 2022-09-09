import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PuchasesCard from '../puchases/PuchasesCard'
import getConfig from '../../utils/getConfig'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

      axios.get(URL, getConfig())
          .then(res => setPurchases(res.data.data.purchases))
          .catch(err => console.log(err))
  }, [])

  console.log(purchases);

  return (
    <div>
        <div className='purchases'>
        {
            purchases?.map(purchase => (
                <PuchasesCard 
                key={purchase.id}
                purchase={purchase}
                />
            ))
        }
        </div>
    </div>
  )
}

export default Purchases