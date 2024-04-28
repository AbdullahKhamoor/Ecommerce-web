import React from 'react'
import "../Styles/ProductReviewCard.css"

const ProductReviewCard = ({image, index, review, name, price}) => {
  return (
    <div className='ProductReviewCard'>
          <img src={image} alt={`${index} review`} />
          <h3>{review}</h3>
          <span>{name}</span>
          <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
