// import React from 'react'
// import './Body.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";




// const Body = () => {
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const images = [
//   "https://i.ibb.co/7t4FfBJ/Img1.png",
//   "https://i.ibb.co/nnbK98t/Img2.png",
//   "https://i.ibb.co/6gyFGyX/Img3.png",
//   "https://i.ibb.co/VMDPbwm/Img4.png",
//   "https://i.ibb.co/Zxj1Mkt/Img5.png",
// ];
//   const images2 = [
//     "https://i.ibb.co/7t4FfBJ/Img1.png",
//     "https://i.ibb.co/nnbK98t/Img2.png",
//     "https://i.ibb.co/6gyFGyX/Img3.png",
//     "https://i.ibb.co/VMDPbwm/Img4.png",
//     "https://i.ibb.co/Zxj1Mkt/Img5.png",
//   ];
//   return (
//     <>
//       <div className="image-slider">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>

    
//   );
  
// }

// export default Body

import React from "react";
import "./Body.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Body = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images1 = [
    "https://i.ibb.co/7t4FfBJ/Img1.png",
    "https://i.ibb.co/nnbK98t/Img2.png",
    "https://i.ibb.co/6gyFGyX/Img3.png",
    "https://i.ibb.co/VMDPbwm/Img4.png",
    "https://i.ibb.co/Zxj1Mkt/Img5.png",
  ];

  const images2 = [
    "https://i.ibb.co/R0W9TgK/Screenshot-2024-05-30-at-2-55-47-AM.png",
    "https://i.ibb.co/gvpphCQ/Screenshot-2024-05-30-at-2-56-33-AM.png",
  ];
  const images3 = [
    "https://i.ibb.co/R0W9TgK/Screenshot-2024-05-30-at-2-55-47-AM.png",
    "https://i.ibb.co/gvpphCQ/Screenshot-2024-05-30-at-2-56-33-AM.png",
  ];

  return (
    <>
      <div className="image-slider">
        <Slider {...settings}>
          {images1.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="image-slider small-slider">
        <Slider {...settings}>
          {images2.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image small-slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="Make">
        <div className="btn">
          <h5> Shop Now</h5>
        </div>

        <div className="btn">
          <h5> Read The Story</h5>
        </div>
      </div>

      <div className="image-slider">
        <Slider {...settings}>
          {images3.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image small-slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="Pro">
        <h2>Top Picks for You</h2>
        <ul>
          <li>Women's Vacation & Resort Clothing, Shoes & Accessories</li>
          <li>Men's Vacation & Resort Clothing, Shoes & Accessories</li>
          <li>Women's Wedding Guest Outfits</li>
          <li>Men's Wedding Guest & Cocktail Outfits</li>
          <li>Makeup</li>
          <li>New Markdowns</li>
        </ul>
      </div>
    </>
  );
};

export default Body;
