import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Slider  ({start})  {
  return (
      <Carousel fade >

          {
              start.map((item) => (
                  <Carousel.Item>
                      <img
                          className='d-block w-100'
                          src={item}
                          alt="First Slide"
                      />
                  </Carousel.Item>


              ))




          }



      </Carousel>
  )
}

export default Slider
