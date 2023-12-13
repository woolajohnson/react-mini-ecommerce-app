

import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Computer Parts Store</h1>
      <Link to="/products"><button>View Products</button></Link>
      
    </div>
  )
}
