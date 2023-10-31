import React from 'react';
import { imageSlider } from '../../../constants/index'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function PosterSlider() {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3500} className='rounded-xl '>
        {
          imageSlider.map((items, index) => {
            return (
              <>
                <div key={index}>
                  <img src={items.imageLink} alt='poster' className='rounded-2xl' />
                  {/* <p className="legend"></p> */}
                </div>
              </>
            )
          })
        }
      </Carousel>
    </>
  )
}
