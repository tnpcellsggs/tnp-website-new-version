import React from 'react';
import { imageSlider } from '../../../constants/index'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function PosterSlider() {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3500} className='rounded-xl ' showThumbs={false}>
        {
          imageSlider.map((items, index) => {
            return (              
                <div key={index+items.imageLink+Math.random()}>
                  <img src={items.imageLink} alt='poster' className='w-full h-full rounded-2xl'  />
                  {/* <p className="legend"></p> */}
                </div>
             
            )
          })
        }
      </Carousel>
    </>
  )
}
