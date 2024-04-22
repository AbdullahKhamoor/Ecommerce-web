import React from 'react'
import "../Styles/StarProduct.css"
const StarProduct = ({StarProduct,link}) => {
  return (
    <>
        <div className='starProduct'>
         <div className='leftone'>
          <a href={link}><img src={StarProduct[0].image} alt="1st product" /></a>
         </div>
         <div className='rightone'>
          <a href={link}> <img src={StarProduct[1].image} alt="2nd product" /></a>
          <a href={link}> <img src={StarProduct[2].image} alt="3rd product" /></a>
          <a className='img3' href={link}> <img src={StarProduct[3].image} alt="4th product" /></a>
         </div>
        </div>
    
    
    </>

  )
}

export default StarProduct
