import React from 'react';

import { Swap, Buy, Sell } from './Swap';
import { Link } from "react-router-dom";

function Hero() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = { margin: "0px" };

  const taxTitle = (
    <div>
      <p>-3% Tax Reduction if</p>
      <a href="https://upfinity.gitbook.io/upfinity/special-features/advanced-tax-algorithms#stabilizing-the-market-more">
        <div class="underline">
          buy right after the sell
        </div>
      </a>
      <p>-3% Tax Reduction by</p>
      <Link to="/nft">
        <div class="underline">
          holding NFT
        </div>
      </Link>
    </div>
  );

  return (
    <section className="d-flex flex-column justify-content-center" style={{ height: "auto" }}>
      {/*<video autoPlay muted id="bgVideo">*/}
      {/*  <source src="assets/img/intro.mp4" type="video/mp4"/>*/}
      {/*  Your browser does not support HTML5 video.*/}
      {/*</video>*/}
      <div className="row" style={noMargin}>
        <div className="col-12 col-lg-8" style={{alignSelf: "center"}}>
          <div id="main" className="container" style={{padding: "0px"}}>
            <h1>UpFinity:</h1>
            <p>Building web3's leading <span className="typed" data-typed-items="Token, Ecosystem, Metaverse"></span></p>
            <p><span>30+</span> Unique Features and Useful Utilities in a <span>SINGLE</span> token</p>
            <div>
              <nav id="navbar" className="navbar" style={{ display: "inline-flex" }}>
                <ul className="flex">
                  <li className="dropdown">
                    <a  className="nav-link scrollto" href="https://bscscan.com/address/0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae" target="_tab">
                      <div className="underline font-size">
                        0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae
                      </div>
                      {/*<a id="UpfinityAdr" href="https://bscscan.com/address/0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae" target="_tab">*/}
                    </a>
                    {/*<ul>*/}
                    {/*  <li>*/}
                    {/*    <div className="row">*/}
                    {/*      <div style={{ display: "inline-block", overflow: "hidden" }}>Click</div>*/}
                    {/*      <div style={{ display: "inline-block", overflow: "hidden" }}>to copy address</div>*/}
                    {/*      <a  id="copyUpfinityAdr" className="" onClick={() => window.copyAdr('copyUpfinityAdr', '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae')}>*/}
                    {/*        here*/}
                    {/*      </a>*/}
                          
                    {/*    </div>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                  </li>
                </ul>
              </nav>
              <div className="row">
                <div className="col-6">
                  <a id="copyUpfinityAdr" className="button scrollto" onClick={() => window.copyAdr('copyUpfinityAdr', '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae')}>
                    Copy Address
                  </a>
                </div>
                <div className="col-6">
                  <a className="button scrollto" onClick={window.addUPF}>
                    Add UPF in wallet
                  </a>
                </div>
              </div>
            </div>
            <div className="table">
              <p className="cell">Tax: buy 9%
                <i className="bi bi-info-circle text-primary" title='
                <div>
                  <p>-3% Tax Reduction if</p>
                  <a href="https://upfinity.gitbook.io/upfinity/special-features/advanced-tax-algorithms#stabilizing-the-market-more">
                    <div class="underline">
                      buy right after the sell
                    </div>
                  </a>
                  <p>-3% Tax Reduction by</p>
                  <a href="/#/nft">
                    <div class="underline">
                      holding NFT
                    </div>
                  </a>
                </div>
              ' style={{ fontSize: "20px" }}></i>
              </p>
              <p className="cell">/ sell 12%</p>
            </div>
            <p>recommended slippage: buy 10+ / sell 14+</p>
            <div className="social-links" style={{fontSize:"30px"}}>
              <a href="https://t.me/UpFinityTG" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
              <a href="https://twitter.com/UpFinityTW" target="_tab" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="https://github.com/UpFinityCrypto/UpFinityCrypto.github.io/blob/main/UpFinity.sol" target="_tab" className="twitter"><i className="bx bxl-github"></i></a>
            </div>

            <div className="row">
              <div className="col-12">
                <Link to="/dashboard" className="button scrollto">Dashboard</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <a id="WhitePaperLink" href="https://upfinity.gitbook.io" className="button scrollto" target="_tab">WhitePaper</a>
              </div>
              <div className="col-6">
                <Link id="UpFinomicsLink" to="/upfinity" className="button scrollto">UpFinomics</Link>
              </div>
            </div>
          </div>
        </div>
    
        <div className="col-12 col-lg-4" style={{alignSelf: "center"}}>
          <Buy />
        </div>
      </div>
    </section>
  );
}

export default Hero;
