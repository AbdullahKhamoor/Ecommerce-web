import React from 'react'
import Offer from './Offer.js'
import "../Styles/offer.css"

const Offers = ({offer}) => {
  return (
    <>
    <div className="offersSection">
      {
         offer.map((item,index)=>(
          <Offer key={item.image} index = {index} src={item.image} />
         ))
      }
    </div>
    </>
 )
}

export default Offers
