import React from 'react'
import {Rating} from "@material-ui/lab"
import "./home.css"



const Card=({product})=> {
  const options= {
    
 
    readOnly:true,
    precision:0.5,
    value:product.ratings,
    
}
  return (
   <a className='productCard' href="/">
    <img src={product.images} alt={product.name}/>
    <p>{product.name}</p>
    <div>
        <Rating {...options} />
        <span className="productCardSpan">
         ({product.numOfReviews})
        </span>
      </div>
      <span className='priceSpan'>{`₹${product.price}`}</span>
    </a>


  )
}

export default Card