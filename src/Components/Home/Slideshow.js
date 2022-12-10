import React from "react";
import { Slide } from "react-slideshow-image";
import { NavLink } from "react-router-dom";

import img1 from "../assets/slideshow-image_One.png";
import img2 from "../assets/slideshow-image_Two.png";
import img3 from "../assets/slideshow-image_Three.png";

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <NavLink to="/products">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${img1})` }}></div>
          </div>
        </NavLink>

        <NavLink to="/products">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${img2})` }}></div>
          </div>
        </NavLink>

        <NavLink to="/products">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${img3})` }}></div>
          </div>
        </NavLink>
      </Slide>
    </div>
  );
};

export default Slideshow;
