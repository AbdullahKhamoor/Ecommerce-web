import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../Styles/ProductReview.css"

const ProductReview = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
      {
        ProductReviews.map((item,index)=>(
            <ProductReviewCard price= {item.price} name = {item.name} image = {item.image} review = {item.review} index = {index}
           key={item.image}  />
        )
)
      }
    </div>
  )
}

export default ProductReview
