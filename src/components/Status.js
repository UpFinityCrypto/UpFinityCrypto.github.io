import React from 'react';

import Mynft from './Mynft';

function Status() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const bigNumber = {fontSize: "3em", fontWeight: "bold"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Status">
      <div className="container">

        <div className="section-title">
          <h2>Status</h2>
          <p id="dappNeeded"></p>
          <div>Buy: <span id="BuyStatus"></span></div>
          <div>Sell: <span id="SellStatus"></span></div>
          
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 text-justify content">
            <p>Questions about sell? Check FAQs!</p>
            <a href="faqs.html" className="button scrollto">FAQs</a>
          </div>
          <div className="col-12 col-lg-12 text-justify content">
            <div className="row mt-5" style={bigNumber}>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Limit Per 1 Buy</h5>
                    <h6 className="text-center ">(<span id="_maxTxNume"></span>% Impact)</h6>
                    <div id="oneBuyLimitStatus" className="text-center"></div>
                    
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Balance</h5>
                    <h6 className="text-center ">(<span id="_maxBalanceNume"></span>% Max)</h6>
                    <div id="balanceStatus" className="text-center" style={{fontSize: "0.4em"}}></div>
                    <div><span id="balancePercentageStatus" className="text-center"></span>%</div>
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Grade</h5>
                    <div id="balanceIcon" style={{fontSize: "100px", fontWeight: "100"}}></div>
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Tax Reduction</h5>
                    <div><span id="taxReduction" className="text-center">-0%</span></div>
                </div>
              </div>
            
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Limit Per 1 Sell</h5>
                    <h6 className="text-center ">(<span id="_maxSellNume"></span>% Impact)</h6>
                    <div id="oneSellLimitStatus" className="text-center"></div>
                    
                </div>
              </div>
             <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Sell Cooltime</h5>
                    <div id="sellCooltime" className="text-center" style={{fontSize: "0.4em"}}></div>
                    
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 id="cantSellStatus" className="text-center "></h5>
                    <div id="circuitBreakerStatus" className="text-center"></div>
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                  <h5 className="text-center ">Your Penalty Tax</h5>
                  <div><span id="yourTaxPenalty">+0%</span></div>
                </div>
              </div>
              <div className="col-6 col-lg-3 align-items-stretch center">
                <div className="icon-box">
                    <h5 className="text-center ">Dividend Party</h5>
                    <div id="dividendPartyStatus"></div>
                    <div style={font0_5em}>+<span id="dividendPartyImpactMin"></span>% ~ +<span id="dividendPartyImpactMax"></span>%</div>
                </div>
              </div>
            </div>
            
            <Mynft />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Status;
