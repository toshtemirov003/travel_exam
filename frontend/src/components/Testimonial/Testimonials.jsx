import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolore
          beatae animi molestiae, esse culpa. Odit molestias modi mollitia at,
          accusamus in impedit doloribus necessitatibus, distinctio aliquam
          consectetur sit incidunt!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava1} alt="" />
          <div className="">
            <h6 className="mb0 mt3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolore
          beatae animi molestiae, esse culpa. Odit molestias modi mollitia at,
          accusamus in impedit doloribus necessitatibus, distinctio aliquam
          consectetur sit incidunt!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="" />
          <div className="">
            <h6 className="mb0 mt3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolore
          beatae animi molestiae, esse culpa. Odit molestias modi mollitia at,
          accusamus in impedit doloribus necessitatibus, distinctio aliquam
          consectetur sit incidunt!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava3} alt="" />
          <div className="">
            <h6 className="mb0 mt3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolore
          beatae animi molestiae, esse culpa. Odit molestias modi mollitia at,
          accusamus in impedit doloribus necessitatibus, distinctio aliquam
          consectetur sit incidunt!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="" />
          <div className="">
            <h6 className="mb0 mt3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
