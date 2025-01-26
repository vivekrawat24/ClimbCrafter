import React from 'react'
import Slider from 'react-slick'
import  '../ProductSlider/productslider.css'



import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import Card from '../card/Card.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductSlider({products}) {
    

    const setting1 = {
        dots: false,
        infinite: false,
        infinite:true,
        slidesToShow:innerWidth > 1700? 5:4,
        slidesToScroll: 2 ,
        prevArrow: <IoIosArrowBack className='producter-slider-arrow shadow-lg' />,
        nextArrow: <IoIosArrowForward className='producter-slider-arrow shadow-lg' />
    }

    return (
        <section className="product-slider">
            <div className='product-slider-wrapper max-w-[1800px] mx-auto px-10'>
                <Slider {...setting1}>
                    {products.map(product=><Card {...product} key={product.id}></Card>)}
                </Slider>
            </div>
        </section>
    )
}

export default ProductSlider
