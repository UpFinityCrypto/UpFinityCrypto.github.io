import React from 'react';

function Upfinomics() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2.5em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Upfinomics">
      <div className="container">

        <div className="section-title">
          <h2>UpFinomics</h2>
          <p>Delicately designed for <span className="text-bold text-color-secondary">LONG-TERM</span> sustainability</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><span>9</span>% Buy Tax / <span>12</span>% Sell Tax</h5>
                <ul className="ul-no-style">
                </ul>
                <img src="assets/img/upfinomics/upfinomics.PNG" />

              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Initial Token Distribution</h5>
                <ul className="ul-no-style">
                  <li><i className="bx bx-check-double text-color-primary"></i>Project / Minus Tax: used for Burn / Giveaway / Airdrop event!</li>
                </ul>
                <img src="assets/img/upfinomics/distribution.PNG" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Upfinomics;