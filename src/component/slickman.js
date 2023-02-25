import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    className: "center",


    centerMode: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="rounded-md">
        <img
          className="w-25 h-20 rounded-md"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-womens-conference-flyer-template-design-c934b1a392b82f98d71e499132739606.jpg?ts=1637003106"
          alt=""
        />
      </div>
      <div className=" rounded-md">
        <video className="w-25 h-20 rounded-md" controls autoPlay loop>
          <source
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mega-sale-instagram-video-post-design-template-a9f2e3449ca63a3c69632190767ff255.mp4?ts=1574600524"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="rounded-md ">
        <img
          className="w-25 h-20 rounded-md"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-womens-conference-flyer-template-design-c934b1a392b82f98d71e499132739606.jpg?ts=1637003106"
          alt=""
        />
      </div>
      <div className="rounded-md ">
        <video className="w-25 h-20" controls autoPlay loop>
          <source
            src="https://marketplace.canva.com/EAFQsyB-g8I/3/0/450w/canva-J8G9p65S1Ks.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Slider>
  );
}
