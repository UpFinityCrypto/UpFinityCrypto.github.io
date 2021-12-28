import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthHalf = {width: "50%"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Footer">
      <div className="container">
        <div className="row" style={noMargin}>
          <div className="col-6 col-lg-2">
            <Link to="/dashboard" className="button scrollto">Dashboard</Link>
          </div>
          <div className="col-6 col-lg-2">
            <Link to="/roadmap" className="button scrollto">Roadmap</Link>
          </div>

          <div className="col-4 col-lg-2">
            <Link to="/airdrops" className="button scrollto">Airdrops</Link>
          </div>
          <div className="col-4 col-lg-2">
            <Link to="/community" className="button scrollto">Community</Link>
          </div>
          <div className="col-4 col-lg-2">
            <Link to="/faqs" className="button scrollto">FAQs</Link>
          </div>

          <div className="col-12 col-lg-2 text-center">
            <Link to="/donations" className="button scrollto">Donations</Link>
          </div>
        </div>

        <h3>UpFinity</h3>
        <p>Buy, Hold, Earn: World's Best Innovative, Upgradable Token</p>
        <div className="social-links">
          <a href="https://t.me/UpFinityTG" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
          <a href="https://twitter.com/UpFinityTW" target="_tab" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/TheUpfinity/" target="_tab" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/theupfinity" target="_tab" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://discord.gg/crQkCE7Mn6" target="_tab" className="discord"><i className="bx bxl-discord"></i></a>
          <a href="https://www.reddit.com/r/upfinity" target="_tab" className="reddit"><i className="bx bxl-reddit"></i></a>
        </div>
        <div className="copyright">
          <Link to="/donations">Click Here to fund our Project</Link>
        </div>
        <div className="copyright">
          <p>Official email: <strong>theupfinity@gmail.com</strong></p>
          <p>secondary email: <strong>theupfinity@protonmail.com</strong></p>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>UpFinity</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
        <div id="cvalue"></div>
        <div id="ctime"></div>
        <img src="assets/img/2UPFLOGOxmas.png" style={{width:"100%", height: "300px"}} />
      </div>
    </section>
  );
}

export default Footer;
