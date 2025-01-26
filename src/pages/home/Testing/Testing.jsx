


import React from "react";
import Slider from "react-slick";


import Img0 from '../../../../public/images/header1.jpg';
import Img1 from '../../../../public/images/header2.jpg';
import Img2 from '../../../../public/images/header3.jpg';
import Img3 from '../../../../public/images/header4.jpg';


function Testing() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container bg-gray-500  max-w-[1440px] mx-auto my-10 ">
      <Slider {...settings}>
        <div className="header-item">
          <img src={Img0} alt="" />
        </div>
        <div className="header-item">
          <img src={Img1} alt="" />
        </div>
        <div className="header-item">
          <img src={Img2} alt="" />
        </div>
        <div className="header-item">
          <img src={Img3} alt="" />
        </div>
      </Slider>
    </div>
  );
}




export default Testing