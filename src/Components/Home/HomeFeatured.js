import React from "react";
import headphoneImg from "../assets/headphone.png";
import iPhoneImg from "../assets/iphone11right.png";
import beatsWhite from "../assets/beatsWhite.png";
import { ButtonContainer } from "../StyleComponents/Button";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../ContextApi";

export default function HomeFeatured() {
  return (
    <div>
      <div className="home-featured-container">
        <div className="featured-img-container">
          <div className="left-img-holder">
            <img src={headphoneImg} alt="Male with Headphones" />
          </div>
          <div className="right-img-holder">
            <h2>Bose Noise Canceling</h2>
            <h3>Now we’ve raised the bar</h3>
            <h4>Exclusive Offer only at TechFy</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
        </div>

        <div className="featured-img-container ">
          <div className="left-img-holder2">
            <h2>iPhone 11 Pro</h2>
            <h3>A chip that’s all Pro</h3>
            <h4>Exclusive Offer only at TechFy</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
          <div className="right-img-holder2">
            <img src={iPhoneImg} alt="iPhone 11" />
          </div>
        </div>

        <div className="featured-img-container">
          <div className="left-img-holder">
            <img src={beatsWhite} alt="White beats headphone" />
          </div>
          <div className="right-img-holder">
            <h2>Beats by Dr. Dre</h2>
            <h3>New sassy colors</h3>
            <h4>Exclusive Offer only at TechFy</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
        </div>

        <div className="featured-img-container ">
          <div className="left-img-holder2">
            <h2>Motorola</h2>
            <h3>The first DynaTAC 8000X</h3>
            <h4>With 2 extra car batteries</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
          <div className="right-img-holder2">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1582951015/imgs_starwars/EcommerceProject/firstcellphone_wjlvle.png"
              alt="Old Phone"
            />
          </div>
        </div>
      </div>

      <div className="home-cards-wrapper">
        <ProductConsumer>
          {(value) => {
            // const randomNum = Math.floor(Math.random() * 6 + 3);

            return value.products
              .slice(23, 29)
              .map(({ id, title, img, price }) => {
                return (
                  <div key={id} className="card-holder">
                    <div className="top-card">
                      <img src={img} alt={title} />
                    </div>

                    <div className="desc-card">
                      <p>{title}</p>
                      <div className="card-price-ab">
                        <div>
                          <p> $ {price}</p>
                        </div>
                        <NavLink to="/products">
                          <ButtonContainer>Shop Now</ButtonContainer>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              });
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
