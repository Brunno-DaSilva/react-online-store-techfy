import React from "react";
import { NavLink } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="main-services">
      <div className="sub-title-services">
        <h1>Shop the Latest Tech</h1>
      </div>
      <div className="body-icon-container">
        <NavLink to="products">
          <div className="icon-item">
            <div className="icon-item-top">
              <i className="fas fa-laptop"></i>
            </div>
            <div className="icon-item-info">
              <h3>Laptops</h3>
            </div>
          </div>
        </NavLink>

        <NavLink to="products">
          <div className="icon-item">
            <div className="icon-item-top">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="icon-item-info">
              <h3>Smart Phones</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to="products">
          <div className="icon-item">
            <div className="icon-item-top">
              <i className="fas fa-tv"></i>
            </div>
            <div className="icon-item-info">
              <h3>TVs</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to="products">
          <div className="icon-item">
            <div className="icon-item-top">
              <i className="fas fa-headphones"></i>
            </div>
            <div className="icon-item-info">
              <h3>headphone</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to="products">
          <div className="icon-item">
            <div className="icon-item-top">
              <i className="fas fa-desktop"></i>
            </div>
            <div className="icon-item-info">
              <h3>monitors</h3>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeServices;
