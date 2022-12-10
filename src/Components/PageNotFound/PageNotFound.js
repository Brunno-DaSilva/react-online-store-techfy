import React from "react";
import { NavLink } from "react-router-dom";
import logoTypeImg from "../assets/techfy-logo-type.png";
import { ProductConsumer } from "../../ContextApi";
import ImageGallery from "./ImageGallery";

const PageNotFound = () => {
  return (
    <div>
      <div className="top-color"></div>
      <div className="four-style-one">4</div>
      <div className="zero-style">0</div>
      <div className="four-style-two">4</div>

      <div className="pageNotFound-container">
        <div></div>
        <NavLink to="/products">
          <div className="pageNotFound-img">
            <img src={logoTypeImg} alt="Login" />
            <span className="go-to">Go to products</span>
          </div>
        </NavLink>
        <div>
          <h3>Oops, Sorry! Go back to products or check out these options </h3>
        </div>
        <div className="image-gallery-direction">
          <ProductConsumer>
            {(value) => {
              return value.products.slice(0, 3).map((product) => {
                return <ImageGallery key={product.name} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
      <div className="bottom-color"></div>
    </div>
  );
};
export default PageNotFound;
