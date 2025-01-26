import React from 'react'
import Navbar from '../../Component/navbar/Navbar'
import Header from './header/Header'
import HeroBrand from './heroBrand/HeroBrand'
import ProductSlider from '../../Component/ProductSlider/ProductSlider.jsx'
import ImageBanner from '../../Component/imageBanner/ImageBanner.jsx'
import products from '../../Component/Products.js'
import Testing from './Testing/Testing.jsx'





function Home() {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <Header></Header>
            <HeroBrand />
            <ProductSlider products={products} />
            <ImageBanner />
            <Testing />

            
            
            
        </div>
    )
}

export default Home
