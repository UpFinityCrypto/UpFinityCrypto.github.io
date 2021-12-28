import React from 'react';
import { Link } from "react-router-dom";
import classes from './banner.module.css';

function Banner() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  
  return (
    <div id="Banner" className={classes.banner}>
      <div className={classes.bannerOuter}>
        <div className = {classes.bannerInner}>
          <div className = {classes.bannerContent}>
            <div className={classes.bannerImage}>
              <img src="assets/img/banner/bannerImages/Upf_Banner.png" />
            </div>
            <div className={classes.mission}>
              <div className={classes.missionStatement}>
                <h1>BUY.HOLD.EARN.</h1>
                <p style={baseFontColor}>
                  <span>30+</span> Unique Features and Useful Utilities in a <span>SINGLE</span> Token
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
              <div className={classes.nftMoon}>
                <img className={classes.moonGirl} src="assets/img/banner/bannerImages/moonGirlbig.png" alt="mongirl"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
