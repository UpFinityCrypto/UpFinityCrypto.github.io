import React from 'react';
import { Link } from "react-router-dom";
import classes from './banner.module.css';

function Banner() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  
  return (
    <div id="Banner">
      <div className="row">
        <div className="col-12 col-lg-8">
          <img src="assets/img/banner/bannerImages/Upf_Banner_900.png" />
          <h1>BUY.HOLD.EARN.</h1>
          <p>
            Every Feature and Utility works in your favor
          </p>
          <div className="row">
            <div className="col-6">
              <Link to="/swap" className="button scrollto">
                <p className="center">Buy Now!</p>
              </Link>
            </div>
            <div className="col-6">
              <Link to="/upfinity" className="button scrollto">
                <p className="center">Learn More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div>
            <img src="assets/img/banner/bannerImages/moonGirlbig_400.png" alt="mongirl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
