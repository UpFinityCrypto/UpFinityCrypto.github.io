import React from 'react';

import Swap from './Swap';

function Hero() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  return (
    <section className="d-flex flex-column justify-content-center" style={{height: "auto"}}>
      <div className="row" style={noMargin}>
        <div className="col-12 col-lg-8" style={{alignSelf: "center"}}>
          <div id="main" className="container" style={{padding: "0px"}}>
            <h1>UpFinity:</h1>
            <p>Building web3's leading <span className="typed" data-typed-items="Token, Ecosystem, Metaverse"></span></p>
            <div>
              <div className="wrap-address">
                <a id="UpfinityAdr" href="https://bscscan.com/address/0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae" target="_tab">
                  0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae
                </a>
              </div>
              <div className="row">
                <div className="col-6">
                  <a href="#" id="copyUpfinityAdr" className="button scrollto" onClick={() => window.copyAdr('copyUpfinityAdr', '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae')}>
                    Copy Address
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="button scrollto" onClick={window.addUPF}>
                    Add UPF in wallet
                  </a>
                </div>
              </div>
            </div>
            <p>Tax: buy 9% / sell 12%</p>
            <p>recommended slippage: buy 10+ / sell 14+</p>
            <div className="social-links" style={{fontSize:"30px"}}>
              <a href="https://t.me/UpFinityTG" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
              <a href="https://twitter.com/UpFinityTW" target="_tab" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://github.com/UpFinityCrypto/UpFinityCrypto.github.io/blob/main/UpFinity.sol" target="_tab" className="twitter"><i className="bx bxl-github"></i></a>
            </div>

            <div className="row">
              <div className="col-12">
                <a href="dashboard.html" className="button scrollto" target="_tab">Dashboard</a>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <a id="WhitePaperLink" href="https://upfinity.gitbook.io" className="button scrollto" target="_tab">WhitePaper</a>
              </div>
              <div className="col-6">
                <a id="UpFinomicsLink" href="upfinity.html" className="button scrollto" target="_tab">UpFinomics</a>
              </div>
            </div>
          </div>
        </div>
    
        <div className="col-12 col-lg-4" style={{alignSelf: "center"}}>
          <Swap />
        </div>
      </div>
    </section>
  );
}

export default Hero;
