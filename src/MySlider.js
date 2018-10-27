import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './css/index.css';
import './css/slider-animations.css';

const MySlider = (props) => {
  let imageSrcs = [{imagesrc: "http://emeklilikvehayat.com/wp-content/uploads/2018/08/blog-05.-image.jpg", title: 'Austins Website',
		description:
		'Austins stuff that he does'}, {imagesrc: "https://thumbs.dreamstime.com/z/online-shopping-simple-vector-icon-set-shop-computer-cart-delivery-card-gift-operator-51606828.jpg", title: 'Shop Here',
  		description:
  		'SUHHHH'}, {imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1ApykA4AKHtY0iEGZc_k0Fl5zfcXmOJXDv6LiUpYYKgCckg4", title: 'Austin sells goods',
    		description: 'Feel free to buy my goods'}, {imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0grrGzWYOUkSNdJ9qOLLOzX_AybZgDf7-78sok5lPiwYUBSKQ", title: 'Amazon .5',
      		description: ':)'}]
  return(
    <div>
    <div className="wrapper">
    </div>
    <Slider className="slider-wrapper" autoplay={2000}>
    {imageSrcs.map((image, index) =>
      <div key={index}
					className="slider-content"
					style={{ background: `url('${image.imagesrc}') no-repeat center center` }}>
          <div className="inner">
          <h1>{image.title}</h1>
          <p>{image.description}</p>
          </div>
      </div>)}
    </Slider>
    </div>
  )
}

export default MySlider
