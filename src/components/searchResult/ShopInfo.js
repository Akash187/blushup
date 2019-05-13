import React from 'react';
import Carousel from 'nuka-carousel';

const ShopInfo = () => {
  return (
    <div className="shop-info">
      <div className="shop-carousel">
        <Carousel
          autoplay
          wrapAround
        >
          <img src="images/shop.jpg" alt="shop"/>
          <img src="images/shop2.jpg" alt="shop2"/>
          <img src="images/shop3.jpg" alt="shop3"/>
        </Carousel>
        <span className="favourite-icon"><i className="far fa-heart"/></span>
      </div>
      <div className="shop-overview">
        <div className='shop-name'>Lancome</div>
        <div className="shop-address">Saks Fifth Avenue, 754 5th Avenue, New York</div>
        <div className="shop-promo-detail">1 product purchase required</div>
        <div className="shop-rating">
          <span className="star-rating">
            <i className="far fa-star"/>
            <i className="far fa-star"/>
            <i className="far fa-star"/>
            <i className="far fa-star"/>
            <i className="far fa-star"/>
          </span>{' '}
          <span className="rating-count">
            (40)
          </span>
          </div>
        <div className="btn-group">
          <button className="btn"><span className="btn-small">12:00PM</span></button>
          <button className="btn"><span className="btn-small">13:00PM</span></button>
          <button className="btn"><span className="btn-small">14:00PM</span></button>
          <button className="btn"><span className="btn-small">15:00PM</span></button>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
