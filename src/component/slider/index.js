import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './imgSlider.css'

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Slider {...settings} className='carousel'>
      <div className='wrap'>
        <img src='/images/slider-badging.jpg' />
      </div>
      <div className='wrap'>
        <img src='/images/slider-badging.jpg' />
      </div>
      <div className='wrap'>
        <img src='/images/slider-badging.jpg' />
      </div>
    </Slider>
  )
}

export default ImgSlider
